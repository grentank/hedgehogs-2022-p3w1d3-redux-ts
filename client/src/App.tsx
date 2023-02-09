import { CircularProgress, Container } from '@mui/material';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/HOC/PrivateRoute';
import CounterPage from './components/pages/CounterPage';
import LoginPage from './components/pages/LoginPage';
import MainPage from './components/pages/MainPage';
import PostsPage from './components/pages/PostsPage';
import SearchPage from './components/pages/SearchPage';
import NavigationBar from './components/ui/NavigationBar';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { loadAllPosts } from './redux/postsSlice/postsSlice';
import { checkAuth } from './redux/userSlice/userSlice';

function App(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuth());
    dispatch(loadAllPosts());
  }, []);
  return (
    <Container>
      {user.status === 'fetching' ? (
        <CircularProgress />
      ) : (
        <>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route
              path="/login"
              element={
                <PrivateRoute isAllowed={user.status === 'empty'} redirectPath="/posts">
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route
              element={<PrivateRoute isAllowed={user.status === 'logged'} redirectPath="/login" />}
            >
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/search" element={<SearchPage />} />
            </Route>
          </Routes>
        </>
      )}
    </Container>
  );
}

export default App;
