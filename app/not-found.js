import { FileX2, MoveLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <div className="text-center">
        <FileX2 size={50} className="text-army-green -rotate-3 m-auto" />
        <h2 className=" font-notoserif font-bold text-2xl text-black">
          404 Not Found
        </h2>
        <p className=" font-notosans font-normal text-black mb-5">
          Hmm?... Could not find requested resource.
        </p>
        <Link
          className="flex justify-center items-center gap-2 text-black/50 hover:text-army-green hover:underline"
          href="/"
        >
          <MoveLeft size={20} className="" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
