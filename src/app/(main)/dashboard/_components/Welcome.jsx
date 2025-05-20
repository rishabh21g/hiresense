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
    <Card className="my-8 mx-4 sm:mx-0 border border-primary shadow-sm">
      <CardContent className="p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Welcome to Hiresense,{" "}
            <span className="text-primary">{name}</span>!
          </h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Ready to start your hiring journey?
          </p>
        </div>

        {avatarUrl && (
          <Avatar className="w-12 h-12 sm:w-14 sm:h-14 border border-primary">
            <AvatarImage src={avatarUrl} alt="Profile Picture" />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
        )}
      </CardContent>
    </Card>
  );
}

export default Welcome;
