import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutHandler } from '../../redux/userSlice/userSlice';

export default function NavigationBar(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const searchPosts = useAppSelector((store) => store.posts.searchPosts);
  console.log('Navbar rerender');
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            {user.status === 'logged' ? `Hello, ${user.name}` : 'Guest'}
          </IconButton>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/counter" color="inherit">
            Counter
          </Button>
          {user.status === 'empty' ? (
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
          ) : (
            user.status === 'logged' && (
              <>
                <Button component={Link} to="/posts" color="inherit">
                  Posts
                </Button>
                <Button component={Link} to="/search" color="inherit">
                  Search-{searchPosts.length}
                </Button>
                <Button color="inherit" onClick={() => dispatch(logoutHandler())}>
                  Logout
                </Button>
              </>
            )
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
