import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Navigate,
  Routes,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    token: localStorage.getItem("token"),
    email: "",
    isAuthenticated: false,
  });

  const handleLogin = (token, email) => {
    localStorage.setItem("token", token);
    setUser({
      token,
      email: email,
      isAuthenticated: true,
    });
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser({
      token: null,
      email: "",
      isAuthenticated: false,
    });
  };
  return (
    <Router>
      <UserContext.Provider value={{ user, handleLogin }}>
        <div className="bar">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          {user.isAuthenticated && <Link to="/dashboard">Dashboard</Link>}
          {user.isAuthenticated && (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;

// I created a new context called UserContext and used the UserContext.Provider component to wrap the entire app. This makes the context's value available to all components inside the provider.
// The context value is an object containing the user's token and a boolean isAuthenticated that tells if the user is logged in or not.
// The handleLogin function takes the token as an argument and saves it to local storage and update the state, that way the isAuthenticated value is set to true.

// Now in the Login component you can use the context to set the token and update the state, by calling the handleLogin function.
