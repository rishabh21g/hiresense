import {UserProvider} from "../context/UserContext";
const page = () => {
  return (
  <UserProvider>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_0px,rgba(7,122,125,0.2),transparent)]">
        <h1 className="text-4xl from-neutral-800 font-extrabold text-center mx-auto mt-14">
        Welcome to Hiresense!
        </h1>
      </div>
    </div>
  </UserProvider>
  );
};

export default page;
