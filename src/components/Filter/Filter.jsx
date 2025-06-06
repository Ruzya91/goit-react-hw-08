import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
}
