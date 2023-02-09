import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { addOnePost } from '../../redux/postsSlice/postsSlice';

export default function AddPostForm(): JSX.Element {
  const [input, setInput] = useState('');
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => setInput(e.target.value),
    [],
  );
  const dispatch = useAppDispatch();
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
      <OutlinedInput
        value={input}
        onChange={changeHandler}
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start">Пост:</InputAdornment>}
        label="Search"
      />
      <Button
        type="button"
        onClick={() => {
          dispatch(addOnePost({ id: Math.floor(Math.random() * 1e6), body: input, authorId: 1 }));
        }}
      >
        +1
      </Button>
    </FormControl>
  );
}
