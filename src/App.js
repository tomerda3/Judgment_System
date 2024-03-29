import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "./App.css";

import { DarkModeProvider } from "./context/DarkModeContext";
import { UserContext, useUsers } from "./context/UserContext";
import AppLayout from "./components/ui/AppLayout";
import HomeScreen from "./screens/HomeScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Error from "./screens/Error";
import Judgments from "./screens/Judgments";
import MyJudgments from "./screens/MyJudgments";
import EditJudgment from "./screens/EditJudgment";

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
    errorElement: <Error />,
    children: [
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
      {
        path: "/judgments",
        element: <Judgments />,
      },
      {
        path: "/myjudgments",
        element: <MyJudgments />,
      },
      {
        path: "/editjudgment/:id",
        element: <EditJudgment />,
      },
    ],
  },
]);

function App() {
  const { login, logout, token, id, firstName, lastName, role, email } =
    useUsers();

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider
          value={{ login, logout, token, id, firstName, lastName, role, email }}
        >
          <RouterProvider router={router} />;
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--background-secondary-color)",
                color: "var(--text-color)",
              },
            }}
          />
        </UserContext.Provider>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
