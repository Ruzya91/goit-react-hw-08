import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { nanoid } from "nanoid";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isExist = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Number
        <input type="tel" name="number" required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
