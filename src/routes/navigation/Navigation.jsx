import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="sign-in-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        { isCartOpen && <CartDropdown /> }
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
