import { PhoneIcon, VideoIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateOptions = () => {
  return (
    <div className="flex w-full mx-auto items-center justify-between gap-x-10 my-10">
      <Link href={"/dashboard/create-interview"}>
        <div className="bg-amber-200 border shadow-lg w-3/4 p-8 flex h-28 items-center justify-center gap-4 rounded-lg cursor-pointer">
          <VideoIcon size={32} />
          <span className="text-lg font-semibold">Create New Interview</span>
        </div>
      </Link>
      <div className="bg-amber-200 border shadow-lg w-3/4 p-8 h-28 flex items-center justify-center gap-4 rounded-lg cursor-pointer">
        <PhoneIcon size={32} />
        <span className="text-lg font-semibold">
          {" "}
          Create Phone Screening call
        </span>
      </div>
    </div>
  );
};

export default CreateOptions;
