import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import { HomeScreen, Login, Register } from "./screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
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
