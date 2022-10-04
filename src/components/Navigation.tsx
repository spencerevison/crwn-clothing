import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
import CartIcon from "./CartIcon";
import { UserContext } from "../contexts/user.context";
import { signOutUser } from "../utils/firebase/firebase.utils";
import CartDropdown from "./CartDropdown";
import { CartContext } from "../contexts/cart.context";

export interface INavigationProps {}

export default function Navigation(props: INavigationProps) {
  const { currentUser } = useContext(UserContext);
  const { hidden, toggleHidden } = useContext(CartContext);

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
            <CartIcon onClick={toggleHidden} />
          </Link>
        </div>
        <CartDropdown className={hidden ? "hidden" : ""} />
      </div>
      <Outlet />
    </>
  );
}
