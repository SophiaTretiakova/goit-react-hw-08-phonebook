import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </div>
      {isLoggedIn ? (
        <div>
          <p>
            Hello, <span className="text-red-600">{user.name}</span>
          </p>
          <Button
            onClick={() => {
              dispatch(logOut());
            }}
            variant="contained"
          >
            Log out
          </Button>
        </div>
      ) : (
        <div>
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      )}
    </header>
  );
};
