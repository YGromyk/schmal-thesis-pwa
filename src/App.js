import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/auth/SignInPage';
import SignUp from './pages/auth/SignUpPage';
import Home from './pages/home/Home';
import Friends from './pages/home/Friends';
import Search from './pages/home/Search';
import UserProfile from './pages/home/UserProfile';
function App() {
  const date = localStorage.getItem("refreshExpiresAt");
  console.log(date);
  const isNotExpired = new Date(date) < new Date() && date ? false : true;

  const homeIfLoggedIn = (or) => {
    return <>
      {/* isNotExpired      ? */}
       {or}
      {/* : <Navigate to="/home" replace /> */}
    </>
  }
  return (
    <Routes>
      <Route path="/" element={homeIfLoggedIn(<SignIn />)} />
      <Route path="/signin" element={homeIfLoggedIn(<SignIn />)} />
      <Route path="/signup" element={homeIfLoggedIn(<SignUp />)}/>
      <Route path="/home" element={<Home />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/me" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/users/:userId" element={<UserProfile />} />
    </Routes>
  );

}

export default App;
