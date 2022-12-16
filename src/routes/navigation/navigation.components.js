import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

// import { signOutUser } from '../../utils/firebase/firebase.utils';
import { useDispatch } from "react-redux";

import { NavigationContainer, NavLinks, NavLink, LogoContiner } from './navigation.styles.js';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { signOutStart } from '../../store/user/user.action';

const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart())

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