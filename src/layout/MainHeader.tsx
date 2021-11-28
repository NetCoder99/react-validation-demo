import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../store/authReducer";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const authCtx = useContext(AuthContext);

  return (
    <header className={classes.header}>
      <header>Options</header>
      <nav className={classes.nav}>
        <ul>
        <li>
            <NavLink activeClassName={classes.active} to="/login">
              Requests
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/login">
              Quotes
            </NavLink>
          </li>
          {!authCtx.state.isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/login">
                Login
              </NavLink>
            </li>
          )}

          {authCtx.state.isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/logout">
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
