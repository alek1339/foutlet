import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="nav-link" to={'/'}>
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-conainer">
          <Link className="nav-link" to={'/shop'}>
            Shop
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>Sign Out</span>)
              : (<Link className="nav-link" to={'/auth'}>
                Sign in
              </Link>)
          }

        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;