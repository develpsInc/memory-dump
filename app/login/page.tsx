/*
original author : Prince Elorm
Last updated by: Prince Elorm
date : 11/22/2024

description :  entry pont of login page of the memory dump

*/

import LoginPage from "@/components/login-page";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>

        <LoginPage />
      </div>
    </div>
  );
}
