import { useState } from "react";
import Login from "./Modules/Login";
import Dashboard from "./Modules/Dashboard";

export default function App() {
  const [user, setUser] = useState(null);

  // TEMPORARY mock login — no backend needed yet.
  // Username: admin   Password: 1234
  // Once your API exists, swap this back for a real fetch("/api/login", ...) call.
  const handleLogin = async (username, password) => {
    if (username === "admin" && password === "1234") {
      setUser({ name: "Admin" });
    } else {
      throw new Error("Incorrect username or password.");
    }
  };

  if (!user) {
    return (
      <Login
        onLogin={handleLogin}
        onForgotPassword={() => alert("Hook this up to your reset flow")}
      />
    );
  }

  return <Dashboard />;
}
