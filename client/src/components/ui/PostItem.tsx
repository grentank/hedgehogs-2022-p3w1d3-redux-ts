import { Button, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { deleteOnePost } from '../../redux/postsSlice/postsSlice';
import type { Post } from '../../redux/postsSlice/types';

type PostItemProps = {
  post: Post;
};

function PostItem({ post }: PostItemProps): JSX.Element {
  console.log('render');
  const dispatch = useAppDispatch();
  return (
    <ListItem>
      <ListItemText primary={post.body} />
      <Button onClick={() => dispatch(deleteOnePost(post.id))} variant="contained" color="error">
        x
      </Button>
    </ListItem>
  );
}

export default React.memo(PostItem);
