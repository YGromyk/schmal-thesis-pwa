import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Navigate,
  useHistory,
  useLocation,
  Routes
} from "react-router-dom";
import SignIn from './pages/auth/SignInPage';
import SignUp from './pages/auth/SignUpPage';
import Home from './pages/home/Home';
import Friends from './pages/home/Friends';
import Search from './pages/home/Search';
import UserProfile from './pages/home/UserProfile';
import PostPage from './pages/home/Post';
import UserSettings from './pages/UserSettings';
import { useAuthState } from './storage/store';
import PrivateRoute from './common/PrivateRoute';
import OpenRoute from './common/OpenRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<OpenRoute />}>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />}/>
        </Route>
      <Route element={<PrivateRoute />}>

        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/friends' element={<Friends />}/>
        <Route path='/me' element={<Home />}/>
        <Route path='/settings' element={<UserSettings />}/>
        <Route path='/users/:userId' element={<UserProfile />}/>
        <Route path='/users/:userId/post/:postId' element={<PostPage />}/>
        <Route path='/search' element={<Search />}/>

        </Route>
      </Routes>
    </Router>
  );

};

export default App;
