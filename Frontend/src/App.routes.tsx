import { createBrowserRouter } from "react-router";
import App from "./App.js";
import Login from "./features/auth/Pages/Login.tsx";
import Register from "./features/auth/Pages/Register.tsx";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
