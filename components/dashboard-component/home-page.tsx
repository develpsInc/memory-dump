import Image from "next/image";
import React from "react";
import { UploadModal } from "../upload-image";

function HomePage() {
  return (
    <div className="mt-10">
      {/* nav bar */}
      <nav className="flex justify-between items-center ">
        <Image src={"globe.svg"} width={25} height={25} alt="user-image" />
        <UploadModal />
      </nav>

      {/* feeds */}
      <div className="mt-8 md:mt-10">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tighter md:text-4xl">
            Feeds
          </h1>
          {/* <small className="text-white bg-pink-500 p-[4px] border-1 border-black rounded-full font-bold text-xs">
            curated for you
          </small> */}

          {/* user dumps */}
          <div className="border border-black" />

          <div className=" border-black mt-8 md:mt-12 rounded-[20px] p-4 border-2">
            <h2 className="text-xl font-extrabold md:text-2xl text-center">
              Elorm&apos;s Memory
            </h2>

            {/* images */}
            <div className="flex items-center justify-center gap-2 ">
              <Image
                src={"file.svg"}
                alt="a file"
                width={200}
                height={200}
                className="rounded-md border-2 border-black p-3 translate-x-3"
              />
              <Image src={"file.svg"} alt="a file" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
