/*
original author : Prince Elorm
Last updated by: Prince Elorm
date : 11/22/2024

description :  login page functionality and ui

*/

"use client";

import { toast } from "@/hooks/use-toast";
import { response } from "express";
import { Eye, EyeClosed, Link2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const showUserPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const [loading, setLoading] = React.useState(false);
  const API_URL_LOGIN = process.env.NEXT_PUBLIC_MEMORY_LOGIN!;
  const router = useRouter();

  // const moveToDashboard = (e: any) => {
  //   window.location.href = "/dashboard";

  //   e.preventDefault();
  // };

  const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (data.email === "" || data.password === "") {
      toast({
        variant: "destructive",
        description: "Please fill all the fields",
      });
      return;
    }
    console.log("user data: ", JSON.stringify(data, null, 2));

    const sendData = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL_LOGIN, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok && response.status === 200) {
          console.log("login successful");
          router.push("/dashboard");
        } else if (response.status === 403) {
          toast({
            variant: "destructive",
            description: "Invalid credentials",
          });
        }
        {
          console.error("Login failed");
        }
      } catch (error) {
        console.error("Error during login: ", error);
      } finally {
        setLoading(false);
      }
    };

    sendData();
  };

  return (
    <div className="flex justify-center px-3 ">
      <div className="flex flex-col">
        <h1 className="mb-8 tracking-tighter text-4xl  text-start">
          Memory Dump Login
        </h1>
        <p className="text-gray-600 md:text-xl text-base mb-3 ">
          Log in to continue
        </p>

        <form onSubmit={loginUser} className="mt-3 w-full">
          <label htmlFor="email" className="text-gray-600  block">
            email
          </label>
          <input
            type="email"
            className="border-2 mt-4 border-pink-400 w-[350px] outline-none p-2 rounded-md focus:border-pink-400 focus:border-[3px] shadow-sm transition-all duration-400 ease-in-out placeholder:text-sm"
            placeholder="mail@example.com"
            name="email"
          />

          <label htmlFor="password" className="text-gray-600 mt-4 block">
            password
          </label>

          <div className="relative ">
            <input
              type={showPassword ? "text" : "password"}
              className="border-2 mt-4 border-pink-400 w-[350px] outline-none p-2 rounded-md focus:border-pink-400 focus:border-[3px] shadow-sm transition-all duration-400 ease-in-out pr-10 mb-2 placeholder:text-sm"
              placeholder="******"
              name="password"
            />
            {showPassword ? (
              <EyeClosed
                onClick={showUserPassword}
                className="absolute right-2 top-1/2 transform -translate-y-1/4 mx-2 cursor-pointer text-pink-400"
              />
            ) : (
              <Eye
                onClick={showUserPassword}
                className="absolute right-2 top-1/2 transform -translate-y-1/3 cursor-pointer text-pink-400 "
              />
            )}
          </div>

          <small className="text-center pt-3">
            logging in means you accept our terms and conditions
          </small>

          <button
            className="block p-3 text-center w-full hover:bg-pink-400 transition-all duration-300 ease-in-out  hover:text-white bg-pink-500 rounded-md text-white font-semibold mt-4 "
            type="submit"
          >
            log in
          </button>
        </form>

        <div className="mt-8 text-center flex justify-center items-center gap-2">
          No account ?
          <div className="inline-flex justify-center items-center text-sm gap-2 bg-pink-500/100 px-2 rounded-full text-white">
            <Link2 className="text-white text-sm w-4 h-4" />
            <Link href="/register">register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
