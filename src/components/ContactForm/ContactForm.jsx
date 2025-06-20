import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isExist = contacts.some((contact) => contact.number === number);

    if (isExist) {
      alert(`Number ${number} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input type="text" name="name" required />
      </label>
      <label className={css.label}>
        Number
        <input className={css.input} type="tel" name="number" required />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
