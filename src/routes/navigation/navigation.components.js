import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import './navigation.styles.scss'

const Navigation = () => {
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
          <Link className="nav-link" to={'/sign-in'}>
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;