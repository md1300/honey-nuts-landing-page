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
    
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
