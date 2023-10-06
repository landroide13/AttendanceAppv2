import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from './views/Dashboard';
import Login from "./views/Login";
import Signup from "./views/Signup";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Dashboard />
    },
])


export default router;