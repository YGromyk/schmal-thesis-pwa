import { useAuthState } from "../storage/store";
import { Route, Redirect, Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
    let auth = useAuthState();
    console.log(auth);
    return (
        auth.token ? <Outlet/> : <Navigate to='/signin'/>
    );
  }