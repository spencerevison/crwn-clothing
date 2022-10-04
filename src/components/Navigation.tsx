import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
import { ReactComponent as CartIcon } from "../assets/shopping-bag.svg";
import { UserContext } from "../contexts/user.context";
import { signOutUser } from "../utils/firebase/firebase.utils";

export interface INavigationProps {}

export default function Navigation(props: INavigationProps) {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="mb-6 flex h-16 w-full justify-between py-3 px-6 sm:mb-6 sm:py-0 sm:px-0">
        <Link className="" to="/">
          <CrwnLogo />
        </Link>
        <div className="flex h-full w-4/5 items-center justify-end sm:w-auto">
          <Link className="py-3 px-4" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="py-3 px-4" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="py-3 px-4" to="/auth">
              SIGN IN
            </Link>
          )}
          <Link to="/shop">
            <CartIcon />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
