"use client";
import { BsGoogle } from "react-icons/bs";
import Image from "next/image"; // Import Next.js Image component
import { sb } from "../services/supabaseClient";
import Link from "next/link";

const Auth = () => {
  const signInWithGoogle = async () => {
    const { data: user, error: err } = await sb.auth.signInWithOAuth({
      provider: "google",
    });
    if (err) {
      console.log("Something went wrong: " + err);
    } else {
      console.log(user);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Fixed Background (same as homepage) */}
      <div className="fixed inset-0 -z-20 h-full w-full bg-transparent bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_0px,rgba(7,122,121,0.3),transparent)] -z-10" />
      </div>

      <div className="bg-transparent p-8 sm:p-10 md:p-12 rounded-xl shadow-2xl w-full max-w-md text-center border-4 border-[#077a7d] items-center justify-center flex flex-col ">
        <div className="flex justify-center items-center mb-6 ">
          <Image
            src="/logo.svg" // Assuming your logo is in public/logo.svg
            alt="Hiresense Logo"
            width={48} // Adjust size as needed
            height={48}
            className="mr-3"
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-[#077a7d]">
            Hiresense
          </h1>
        </div>
        <p className="text-gray-600 mb-8 text-lg">
          Sign in to unlock your potential.
        </p>
        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-x-3 py-3 px-6 rounded-lg bg-[#077A7D] text-white font-semibold text-lg hover:bg-[#055e60] focus:outline-none focus:ring-2 focus:ring-[#077A7D] focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md hover:shadow-lg"
        >
          <BsGoogle size={20} /> Sign in with Google
        </button>
        <p className="mt-8 text-sm text-gray-500">
          By signing in, you agree to our{" "}
          <Link href="/terms" className="text-[#077a7d] hover:underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </div>
  );
};




export default Auth;
