import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, Label, Button } from './RegisterForm.styled';
import { TextField } from '@mui/material';

const userSchema = Yup.object({
  name: Yup.string()
    .required('Name is a required field')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces.`
    ),
  email: Yup.string()
    .required('Email is a required field')
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, `Wrong email`),
  password: Yup.string().required('Password is a required field'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: userSchema,
    onSubmit: values => {
      dispatch(register(values));
      console.log(values);
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
          id="email"
          value={formik.values.email}
          label="E-mail"
          name="email"
          type="email"
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Label>
      <Label>
        <TextField
          autoComplete="on"
          type="password"
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </Label>
      <Button type="submit">Sign Up</Button>
    </StyledForm>
  );
};

export default RegisterForm;
