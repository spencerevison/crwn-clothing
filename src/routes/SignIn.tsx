import {
  createUserDocumentFromAuth,
  signInWithGoogle,
} from "../utils/firebase/firebase.utils";

export interface ISignInProps {}

export default function SignIn(props: ISignInProps) {
  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
}
