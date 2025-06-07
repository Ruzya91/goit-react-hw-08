import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Phonebook</h2>
      <ContactForm />

      <h2 style={{ display: "flex", justifyContent: "center" }}> Contacts </h2>
      <Filter />
      {isLoading ? <p>Loading...</p> : <ContactList />}
    </div>
  );
};

export default ContactsPage;
