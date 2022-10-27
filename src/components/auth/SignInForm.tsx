import { useState } from "react";
import { getErrorCode } from "../../utils/error.utils";
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "./FormInput";

export interface IFormFields {
  email: string;
  password: string;
}

const defaultFormFields: IFormFields = {
  email: "",
  password: "",
};

export default function SignInForm({ className }: { className?: string }) {
  const [formFields, setFormFields] = useState<IFormFields>(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (getErrorCode(error)) {
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        default:
          reportError(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      reportError(error);
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className={`${className} flex w-full flex-col`}>
      <h2 className="my-2">Already have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <button className="btn flex-auto" type="submit">
            Sign In
          </button>
          <button
            className="btn btn-google flex-auto"
            type="button"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </button>
        </div>
      </form>
    </div>
  );
}
