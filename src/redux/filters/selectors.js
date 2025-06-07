export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filter;

export const selectFilteredContacts = (state) => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state)?.toLowerCase().trim();

  if (!contacts || !Array.isArray(contacts)) return [];

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
};
