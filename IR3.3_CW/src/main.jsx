import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from './App.jsx'
// import './index.css'
import About from './pages/About'
import Blogs from './pages/Blogs'
import BlogDetails from './pages/BlogDetails.jsx'

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
    path: "/blogs",
    element: <Blogs />
  },
  {
    path: "blogs/:blogId",
    element: <BlogDetails />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
