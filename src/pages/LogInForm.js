import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import { Button, StyledForm } from './LogIn.styled';

const userSchema = Yup.object({
  email: Yup.string()
    .required('Email is a required field')
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, `Wrong email`),
  password: Yup.string().required('Password is a required field'),
});

const LogInForm = () => {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: userSchema,
    onSubmit: values => {
      dispatch(logIn(values));
    },
  });

  const dispatch = useDispatch();
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <label>
        <TextField
          autoComplete="on"
          type="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </label>
      <label>
        <TextField
          autoComplete="on"
          type="password"
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </label>
      <Button type="submit">Log In</Button>
    </StyledForm>
  );
};

export default LogInForm;
