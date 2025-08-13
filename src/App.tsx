import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
import { Layout } from "./components/Layout";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import ClassRoom from "./pages/classRoom/ClassRoom";
import Users from "./pages/users/Users";

const router = createBrowserRouter([
  { index: true, element: <Login /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "home", element: <Home /> },
      { path: "classroom", element: <ClassRoom /> },
      { path: "users", element: <Users /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
