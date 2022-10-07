import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer, NavLinks, NavLink, LogoContiner } from './navigation.styles.js';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer className="navigation">
        <LogoContiner className="nav-link" to={'/'}>
          <CrownLogo className="logo" />
        </LogoContiner>
        <NavLinks className="nav-links-conainer">
          <NavLink className="nav-link" to={'/shop'}>
            Shop
          </NavLink>
          {
            currentUser ? (
              <NavLink as={'span'} className="nav-link" onClick={signOutUser}>Sign Out</NavLink>)
              : (<NavLink className="nav-link" to={'/auth'}>
                Sign in
              </NavLink>)
          }
          <CartIcon />
        </NavLinks>
        {
          isCartOpen && <CartDropdown />
        }

      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation;