import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/HomePage/Home';
import Author from './Author/Author';
import CustomerDetails from './Author/CustomerDetails';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:"/hussain",
    element:<Author></Author>
  },
  {
    path:"/hussain/:id",
    element:<CustomerDetails></CustomerDetails>,
    
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
