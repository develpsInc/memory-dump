/*
original author : Prince Elorm
Last updated by: 
*/

import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen flex  justify-center items-center font-[family-name:var(--font-geist-sans)]">
      <div className=" w-[300px] ">
        <Link
          href={"/login"}
          className="p-3  bg-pink-500 rounded-md text-white font-semibold hover:bg-pink-4"
        >
          <button className="w-full">Get Started</button>
        </Link>
      </div>
    </div>
  );
}
