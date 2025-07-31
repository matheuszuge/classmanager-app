import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./styles/main.css";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ClassRoom } from "./pages/ClassRoom";
import { Users } from "./pages/Users";

// Definindo rotas com Data Router
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
