import { ContactsList } from 'components/Contacts/ContactsList';
import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      <h1>Contacts</h1>
      <PhoneBookForm />
      <Filter />
      {isLoading && <p>Refreshing data...</p>}
      <ContactsList />
    </div>
  );
};

export default Contacts;
