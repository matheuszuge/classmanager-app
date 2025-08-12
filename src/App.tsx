import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./styles/main.css";
import { Layout } from "./components/Layout";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import ClassRoom from "./pages/classRoom/ClassRoom";
import { Users } from "./pages/users/Users";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "classroom", element: <ClassRoom /> },
      { path: "users", element: <Users /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
