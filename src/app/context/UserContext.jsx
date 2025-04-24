"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const UserContext = createContext();
const getUserAndSync = async (setUser) => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) {
    console.error("Auth error:", authError);
    return;
  }

  if (user) {
    setUser(user);

    const { id, email, user_metadata, created_at } = user;
    const name = user_metadata?.name || "";
    const picture = user_metadata?.avatar_url || "";

    const { error: insertError } = await supabase
      .from("User")
      .insert([{ id, created_at, name, email, picture }], { onConflict: "id" });

    if (insertError) console.error("Insert error:", insertError);
  }
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserAndSync(setUser);
  }, []);

  return (
    <UserContext.Provider value={{ user ,setUser }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
