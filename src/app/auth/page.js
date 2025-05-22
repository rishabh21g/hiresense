"use client";

import { BsGoogle } from "react-icons/bs";
import Image from "next/image";
import { sb } from "../services/supabaseClient";
import Link from "next/link";

export default function Auth() {
  const signInWithGoogle = async () => {
    const { error } = await sb.auth.signInWithOAuth({ provider: "google" });
    if (error) console.log("Something went wrong: " + error.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative bg-background">
      {/* Same Radial Glow as Hero */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_800px_at_50%_0px,rgba(7,122,121,0.3),transparent)]" />

      <div className="w-full max-w-sm p-8 rounded-2xl bg-white/70 dark:bg-black/30 backdrop-blur border border-primary/20 shadow-md text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Image src="/logo.svg" alt="Hiresense Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold text-primary">Hiresense</h1>
        </div>

        <p className="text-muted-foreground mb-6 text-base">
          Sign in to get started.
        </p>

        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all text-sm font-medium shadow"
        >
          <BsGoogle size={18} />
          Sign in with Google
        </button>

        <p className="mt-6 text-xs text-muted-foreground">
          By signing in, you agree to our{" "}
          <Link href="/terms" className="text-primary underline-offset-2 hover:underline">
            Terms of Service
          </Link>.
        </p>
      </div>
    </div>
  );
}
