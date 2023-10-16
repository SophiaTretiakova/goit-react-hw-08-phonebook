import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, Label, Button } from './PhoneBookForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { toast } from 'react-toastify';
import { TextField } from '@mui/material';

const AddSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .required('Required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const PhoneBookForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    const isInContacts = contacts.filter(contact => {
      return newContact.name === contact.name;
    }).length;

    if (isInContacts) {
      toast(`${newContact.name} is already in your contacts`);
      return;
    }
    dispatch(addContact({ ...newContact }));
  };

  const formik = useFormik({
    initialValues: { name: '', number: '' },
    validationSchema: AddSchema,
    onSubmit: contact => {
      const newContact = {
        ...contact,
      };
      addNewContact(newContact);
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Label>
        <TextField
          id="name"
          value={formik.values.name}
          label="Name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      </Label>
      <Label>
        <TextField
          id="number"
          value={formik.values.number}
          label="Number"
          name="number"
          type="tel"
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
      </Label>
      <Button variant="outlined" type="submit">
        Add contact
      </Button>
    </StyledForm>
  );
};
