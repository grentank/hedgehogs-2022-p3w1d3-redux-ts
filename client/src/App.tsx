import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CounterPage from './components/pages/CounterPage';
import LoginPage from './components/pages/LoginPage';
import MainPage from './components/pages/MainPage';
import NavigationBar from './components/ui/NavigationBar';
import { useAppDispatch } from './redux/hooks';
import { checkAuth } from './redux/userSlice/userSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  return (
    <Container>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </Container>
  );
}

export default App;
