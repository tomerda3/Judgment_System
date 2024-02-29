import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

import HomeScreen from "./screens/HomeScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Error from "./screens/Error";
import Header from "./components/ui/Header";
import AppLayout from "./components/ui/AppLayout";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
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
    ],
  },
]);

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />;
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
