import { sb } from "@/app/services/supabaseClient";
import { useUser } from "@/context/UserContext";
import React from "react";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { user } = useUser();

  const logout = async () => {
    try {
      const { error } = await sb.auth.signOut();
      if (error) {
        console.log(error);
        toast.error("Error while logging off!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Unexpected error while logging off!");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-sm max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto px-4 py-3 flex gap-7 md:flex-row flex-col text-xs justify-between items-center">
        {/* Stylized H Brand */}
        <div className="flex items-center justify-center gap-2 mb-2 sm:mb-0">
          <Button
            className="w-12 h-12 rounded-2xl text-2xl font-bold text-gray-200 shadow-sm bg-teal-700 hover:bg-teal-800"
            variant="ghost"
          >
            H
          </Button>
          <h1 className="text-xl font-semibold text-foreground tracking-tight">
            Hiresense
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-3 flex-wrap justify-center sm:justify-end">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          {user?.email && (
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Dashboard
            </Link>
          )}
          {user && (
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              Logout <LogOut className="w-4 h-4" />
            </Button>
          )}
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
