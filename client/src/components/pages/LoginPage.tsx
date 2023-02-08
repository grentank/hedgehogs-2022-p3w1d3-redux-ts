import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { loginHandler } from '../../redux/userSlice/userSlice';
import type { FormUser } from '../../redux/userSlice/userTypes';
// import { setUser } from '../../redux/userSlice/userSlice';

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [formInput, setFormInput] = useState<FormUser>({ name: '', password: '' });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(loginHandler(formInput));
      }}
    >
      <TextField
        value={formInput.name}
        onChange={changeHandler}
        id="outlined-basic"
        label="Name"
        name="name"
        variant="outlined"
      />
      <TextField
        value={formInput.password}
        onChange={changeHandler}
        id="outlined-basic"
        label="Password"
        name="password"
        type="password"
        variant="outlined"
      />
      <Button type="submit">Login</Button>
    </form>
  );
}
