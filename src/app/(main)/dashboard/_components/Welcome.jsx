"use client";

import { useUser } from "@/context/UserContext";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

function Welcome() {
  const { user } = useUser();
  const name = user?.user_metadata?.name || "User";
  const avatarUrl = user?.user_metadata?.avatar_url;

  return (
    <Card className="my-8 mx-4 sm:mx-0  rounded-lg shadow-2xl h-auto">
      <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-foreground">
            Welcome to <span className="text-primary">Hiresense</span>,{" "}
            <span className="text-primary">{name}</span>!
          </h1>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base max-w-md">
            Ready to start your hiring journey? Let's make it effortless and effective.
          </p>
        </div>

        <Avatar className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-primary shadow-md">
          {avatarUrl ? (
            <AvatarImage src={avatarUrl} alt={`${name}'s Profile Picture`} />
          ) : (
            <AvatarFallback className="text-lg font-bold uppercase text-primary">
              {name[0]}
            </AvatarFallback>
          )}
        </Avatar>
      </CardContent>
    </Card>
  );
}

export default Welcome;
