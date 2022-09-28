import { useState } from "react";
import { getErrorCode } from "../utils/error.utils";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import FormInput from "./FormInput";

export interface IFormFields {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultFormFields: IFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [formFields, setFormFields] = useState<IFormFields>(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (getErrorCode(error) === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        reportError(error);
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className="flex w-96 flex-col">
      <h2 className="my-2">Don&apos;t have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button className="btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
