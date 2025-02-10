/*
original author : Prince Elorm
Last updated by: Prince Elorm
date : 11/22/2024

description : entry point or home page of the memory dump

*/

import LandingPage from "@/components/landing-page";

export default function Home() {
  return (
    <div className=" min-h-screen flex  justify-center items-center font-[family-name:var(--font-geist-sans)]">
      <LandingPage />
    </div>
  );
}
