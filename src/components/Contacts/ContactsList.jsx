import { useEffect } from 'react';
import { ContactsListItem } from './ContactsListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { getContacts } from 'redux/contacts/operations';
// import { ToastContainer } from 'react-toastify';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectVisibleContacts);
  return (
    <>
      <ul>
        {filteredContacts.length > 0 &&
          filteredContacts.map(contact => {
            return <ContactsListItem key={contact.id} contact={contact} />;
          })}
      </ul>
      {filteredContacts.length === 0 && <p>No contacts are available</p>}
    </>
  );
};
