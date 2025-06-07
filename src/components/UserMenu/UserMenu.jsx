import { useDispatch, useSelector } from "react-redux";
import { logout as logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <p>Welcome, {user.name}</p>
      <button style={{ marginLeft: "20px" }} onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
}
