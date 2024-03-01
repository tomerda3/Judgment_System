import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";

// Create a UserContext with default login and logout functions
const UserContext = createContext({
  login: () => {},
  logout: () => {},
});

// Custom hook to manage user data and authentication
function useUsers() {
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState(null);

  // Function to login the user and save data to localStorage
  const login = useCallback((data, token) => {
    console.log("data:", data);
    const { _id, firstName, lastName, role, email } = data;

    setToken(token);
    setId(_id);
    setFirstName(firstName);
    setLastName(lastName);
    setRole(role);
    setEmail(email);

    try {
      // Save user data to localStorage
      localStorage.setItem("userData", JSON.stringify({ ...data, token }));
    } catch (err) {
      console.log(err);
    }
  }, []);

  // Function to logout the user and remove data from localStorage
  const logout = useCallback(() => {
    try {
      // Remove user data from localStorage
      localStorage.removeItem("userData");
    } catch (err) {
      console.log(err);
    }

    // Clear user state variables
    setToken(null);
    setId(null);
    setFirstName(null);
    setLastName(null);
    setRole(null);
    setEmail(null);
  }, []);

  // Effect to retrieve stored data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token) {
      login(storedData, storedData.token);
    }
  }, [login]);

  // Check if the hook is used outside of the UserProvider
  const userData = useContext(UserContext);
  if (userData === undefined) {
    throw new Error("UserContext was used outside of the UserProvider");
  }

  // Object containing login, logout functions, and user data
  return {
    userData,
    login,
    logout,
    token,
    id,
    firstName,
    lastName,
    role,
    email,
  };
}

export { UserContext, useUsers };
