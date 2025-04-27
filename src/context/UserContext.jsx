"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { sb } from "@/app/services/supabaseClient";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUserOrCreateUser = async () => {
    try {
      const {
        data: { user },
        error: userError,
      } = await sb.auth.getUser();
      if (userError) throw userError;

      if (user) {
        const { data: existingUsers, error: fetchError } = await sb
          .from("User")
          .select("*")
          .eq("email", user.email);

        if (fetchError) throw fetchError;

        if (existingUsers.length === 0) {
          const { data: newUser, error: insertError } = await sb
            .from("User")
            .insert([
              {
                name: user.user_metadata?.name,
                email: user.user_metadata?.email,
                picture: user.user_metadata?.avatar_url,
              },
            ])
            .select();

          if (insertError) throw insertError;

          console.log(" New user created:", newUser);
        }

        setUser(user);
        console.log(" User set successfully:", user);
      }
    } catch (error) {
      console.error(" Error in getUserOrCreateUser:", error.message);
    }
  };

  useEffect(() => {
    console.log(" Fetching or Creating User...");
    getUserOrCreateUser();
  }, []);

  useEffect(() => {
    if (user) {
      console.log("User updated in Context:", user);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
