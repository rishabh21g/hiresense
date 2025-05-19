import { sb } from "@/app/services/supabaseClient";
import { useUser } from "@/context/UserContext";
import React from "react";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { user } = useUser();
  const logout = async () => {
    try {
      const { err } = await sb.auth.signOut();
      console.log(err);
    } catch (err) {
      console.log(err);
      toast("Error while logging off!");
    }
  };
  return (
    <header className="bg-[#077a7d] text-gray-800 p-3 sm:p-4 shadow-md sticky top-0 z-50 bg-primary dark">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <div className="flex items-center mb-2 sm:mb-0">
          <Image
            src="/logo.svg"
            alt="Hiresense Logo"
            width={32}
            height={32}
            className="mr-2"
          />
          <h1 className="text-2xl font-bold">Hiresense</h1>
        </div>
        <nav className="flex flex-wrap justify-center sm:justify-end items-center">
          <a
            href="#"
            className="px-2 sm:px-3 py-1 sm:py-2 hover:bg-[#055e60] rounded transition-colors text-sm sm:text-base"
          >
            Home
          </a>
          <a
            href="#"
            className="px-2 sm:px-3 py-1 sm:py-2 hover:bg-[#055e60] rounded transition-colors ml-1 sm:ml-2 text-sm sm:text-base"
          >
            Pricing
          </a>
          <a
            href="#"
            className="px-2 sm:px-3 py-1 sm:py-2 hover:bg-[#055e60] rounded transition-colors ml-1 sm:ml-2 text-sm sm:text-base"
          >
            Features
          </a>
          {user?.email && (
            <Link
              href="/dashboard"
              className="px-2 sm:px-3 py-1 sm:py-2 hover:bg-[#055e60] rounded transition-colors ml-1 sm:ml-2 text-sm sm:text-base"
            >
              Dashboard
            </Link>
          )}
          {user && (
            <button
              className="px-2 sm:px-3 py-1 sm:py-2 hover:bg-[#055e60] rounded transition-colors ml-1 sm:ml-2 text-sm sm:text-base flex items-center gap-2"
              onClick={logout}
            >
              Logout <LogOut />
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
