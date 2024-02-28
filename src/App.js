import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Error from "./screens/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
