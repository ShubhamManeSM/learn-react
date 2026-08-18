import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import App from "./App";
import Products from "./pages/Products";
import About from "./pages/About";
import ProductsDetails from "./pages/ProductsDetails";
import Cart from "./pages/Cart";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/products/:productsId",
    element: <ProductsDetails />
  },
  {
    path: "/cart",
    element: <Cart />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

