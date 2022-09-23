import { useAuthState } from "../storage/store";
import { Route, Redirect, Navigate, Outlet } from 'react-router-dom';

export default function OpenRoute() {
    let auth = useAuthState();
    console.log(auth);
    return (
        auth.token ?<Navigate to='/home'/> : <Outlet/>
    );
  }