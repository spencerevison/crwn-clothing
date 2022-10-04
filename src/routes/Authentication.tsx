import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

export interface ISignInProps {}

export default function SignIn(props: ISignInProps) {
  return (
    <div className="flex flex-col justify-center gap-16 md:flex-row md:gap-8 lg:gap-24">
      <SignInForm className="" />
      <SignUpForm className="" />
    </div>
  );
}
