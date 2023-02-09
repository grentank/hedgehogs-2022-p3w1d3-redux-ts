import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Post, PostsSliceState } from './types';
import type { AppThunk } from '../hooks';

const initialState: PostsSliceState = {
  posts: [],
  searchPosts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setAllPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    addOnePost: (state, action: PayloadAction<Post>) =>
      // state.posts.push(action.payload);
      ({
        ...state,
        posts: [action.payload, ...state.posts],
      }),
    deleteOnePost: (state, action: PayloadAction<Post['id']>) => ({
      ...state,
      posts: state.posts.filter((post) => post.id !== action.payload),
    }),
    setSearchPosts: (state, action: PayloadAction<Post[]>) => {
      state.searchPosts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addOnePost, setAllPosts, deleteOnePost, setSearchPosts } = postsSlice.actions;

export default postsSlice.reducer;

export const loadAllPosts = (): AppThunk => (dispatch) => {
  axios<Post[]>('/posts')
    .then((res) => dispatch(setAllPosts(res.data)))
    .catch(console.log);
};

export const loadSearchPosts =
  (input: string): AppThunk =>
  (dispatch) => {
    axios
      .post<Post[]>('/posts/search', { input })
      .then((res) => dispatch(setSearchPosts(res.data)))
      .catch(console.log);
  };
