import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import TodosList from "./pages/TodosList";
import About from "./pages/About";
import TodoDetails from "./pages/TodosDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todos",
    element: <TodosList />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/todos/:id",
    element: <TodoDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
