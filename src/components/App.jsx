// import { Section } from './Section/Section';
// import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
// import { ContactsList } from './Contacts/ContactsList';
// import { Filter } from './Filter/Filter';
import { GlobalStyles } from './GlobalStyles.styled';
// // import { ToastContainer } from 'react-toastify';

// export const App = () => {
//   return (
//     <>
//       <Section title="Phone book">
//         <PhoneBookForm />
//       </Section>
//       <Section title="Contacts">
//         <Filter />
//         <ContactsList />
//       </Section>
//       {/* <ToastContainer /> */}
//       <GlobalStyles />
//     </>
//   );
// };
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

const Home = lazy(() => import('../pages/Home'));
const RegisterForm = lazy(() => import('../pages/RegisterForm'));
const LogInForm = lazy(() => import('../pages/LogInForm'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterForm />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LogInForm />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};
