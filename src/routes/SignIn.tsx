import SignUpForm from "../components/SignUpForm";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../utils/firebase/firebase.utils";

export interface ISignInProps {}

export default function SignIn(props: ISignInProps) {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <SignUpForm />
    </div>
  );
}
