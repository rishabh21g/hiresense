"use client";
import { BsGoogle } from "react-icons/bs";
import { sb } from "../services/supabaseClient";

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
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_0px,rgba(7,122,125,0.2),transparent)]">
        <div className="relative w-full h-screen flex items-center justify-center m-auto">
          <button
            className="py-2 px-6 rounded-full bg-[#077A7D] hover:bg-white hover:text-[#077A7D] focus:text-[#077A7D] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200 shadow-lg flex items-center justify-center gap-x-2 text-sm"
            onClick={signInWithGoogle}
          >
            Sign in with Google <BsGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
