import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      {isLoggedIn && (
        <>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        </>
      )}
      {!isLoggedIn && (
        <>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </>
      )}
    </nav>
  );
}
