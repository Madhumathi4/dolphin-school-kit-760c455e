import { useState, useEffect, useCallback } from "react";

export interface User {
  name: string;
  email: string;
}

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    const userData = localStorage.getItem("adminUser");
    if (auth === "true" && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = useCallback((email: string, password: string, remember: boolean) => {
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const found = users.find((u: any) => u.email === email && u.password === password);
    if (found) {
      setIsAuthenticated(true);
      setUser({ name: found.name, email: found.email });
      if (remember) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("adminUser", JSON.stringify({ name: found.name, email: found.email }));
      } else {
        sessionStorage.setItem("isAuthenticated", "true");
      }
      return true;
    }
    // Default admin
    if (email === "admin@dolphin.in" && password === "admin123") {
      const u = { name: "Admin", email };
      setIsAuthenticated(true);
      setUser(u);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("adminUser", JSON.stringify(u));
      return true;
    }
    return false;
  }, []);

  const signup = useCallback((name: string, email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    if (users.find((u: any) => u.email === email)) return false;
    users.push({ name, email, password });
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    return true;
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("adminUser");
    sessionStorage.removeItem("isAuthenticated");
  }, []);

  return { isAuthenticated, user, login, signup, logout };
}
