"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { sb } from "../app/services/supabaseClient";

export const UserContext = createContext();
const getUserAndSync = async () => {
  sb.auth.getUser().then(async ({ data: { user } }) => {
    let { data: User, error } = await sb
      .from("User")
      .select("*")
      .eq("email", user?.email);
    console.log(user);
  });
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Executing the code")
    getUserAndSync();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
