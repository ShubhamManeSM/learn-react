import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import App from './App';
import About from './pages/About.jsx';
import Stays from './pages/Stays.jsx';
import './index.css'
import StaysDetails from './pages/StaysDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/stays",
    element: <Stays />
  },
  {
    path: "stays/:staysId",
    element: <StaysDetails />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
