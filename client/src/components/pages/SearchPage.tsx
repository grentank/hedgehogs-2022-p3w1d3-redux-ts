import {
  FormControl,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  OutlinedInput,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loadSearchPosts } from '../../redux/postsSlice/postsSlice';

export default function SearchPage(): JSX.Element {
  const searchPosts = useAppSelector((store) => store.posts.searchPosts);
  const dispatch = useAppDispatch();
  const [input, setInput] = useState('');
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => setInput(e.target.value),
    [],
  );
  useEffect(() => {
    dispatch(
      { type: 'LOAD_SEARCH_POSTS', payload: input },
      // loadSearchPosts(input)
    );
  }, [input]);
  return (
    <>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
        <OutlinedInput
          value={input}
          onChange={changeHandler}
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">ф</InputAdornment>}
          label="Search"
        />
      </FormControl>
      <List>
        {searchPosts.map((post) => (
          <ListItem key={post.id}>
            <ListItemText primary={post.body} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
