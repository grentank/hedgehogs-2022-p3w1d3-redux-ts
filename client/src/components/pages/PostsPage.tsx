import { Button, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import AddPostForm from '../ui/AddPostForm';
import PostItem from '../ui/PostItem';

export default function PostsPage(): JSX.Element {
  const allPosts = useAppSelector((store) => store.posts.posts);
  return (
    <>
      <AddPostForm />
      <List>
        {allPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </List>
    </>
  );
}
