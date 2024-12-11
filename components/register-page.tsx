/*
original author : Prince Elorm
Last updated by: Prince Elorm
date : 11/22/2024

description :  register page functionality and ui

*/

"use client";

import { Eye, EyeClosed, Loader2, LogInIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

function RegisterPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const API_URL_REGISTER = process.env.NEXT_PUBLIC_MEMORY_SIGN_UP!;
  const router = useRouter();
  const showUserPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const registerUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      firstname: formData.get("first_name"),
      lastname: formData.get("last_name"),
    };

    if (
      data.email === "" ||
      data.firstname === "" ||
      data.password === "" ||
      data.lastname === ""
    ) {
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
        const response = await fetch(API_URL_REGISTER, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok && response.status === 200) {
          console.log("Registration successful");
        } else {
          console.error("Registration failed");
        }
      } catch (error) {
        console.error("Error during registration: ", error);
      } finally {
        setLoading(false);
        router.push("/login");
      }
    };

    sendData();
  };

  return (
    <div className="flex justify-center px-3 ">
      <div className="flex flex-col">
        <h1 className="mb-8 tracking-tighter text-4xl  text-start">
          Memory Dump Register
        </h1>
        <p className="text-gray-600 md:text-xl text-base mb-3 ">
          Register to continue
        </p>

        <form onSubmit={registerUser} className="mt-3 w-full">
          <label htmlFor="username" className="text-gray-600  block">
            first name
          </label>
          <input
            type="text"
            className="border-2 mt-4 border-pink-400 w-[350px] outline-none p-2 rounded-md focus:border-pink-400 focus:border-[3px] shadow-sm transition-all duration-100 ease-in-out placeholder:text-sm"
            placeholder="john"
            name="first_name"
          />
          <label htmlFor="username" className="text-gray-600 mt-3 block">
            last name
          </label>
          <input
            type="text"
            className="border-2 mt-4 border-pink-400 w-[350px] outline-none p-2 rounded-md focus:border-pink-400 focus:border-[3px] shadow-sm transition-all duration-100 ease-in-out placeholder:text-sm"
            placeholder="doe"
            name="last_name"
          />
          <label htmlFor="email" className="text-gray-600 mt-3  block">
            email
          </label>
          <input
            type="email"
            className="border-2 mt-4 border-pink-400 w-[350px] outline-none p-2 rounded-md focus:border-pink-400 focus:border-[3px] shadow-sm transition-all duration-100 ease-in-out placeholder:text-sm"
            placeholder="mail@example.com"
            name="email"
          />

          <label htmlFor="password" className="text-gray-600 mt-4 block">
            password
          </label>

          <div className="relative ">
            <input
              type={showPassword ? "text" : "password"}
              className="border-2 mt-4 border-pink-400 w-[350px] outline-none p-2 rounded-md focus:border-pink-400 focus:border-[3px] shadow-sm transition-all duration-100 ease-in-out pr-10 mb-2 placeholder:text-sm"
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

          <small className="text-center pt-3 font-[family-name:var(--font-geist-sans)]">
            logging in means you accept our terms and conditions
          </small>

          <button
            className="flex items-center justify-center p-3 text-center w-full hover:bg-pink-400 transition-all duration-300 ease-in-out  hover:text-white bg-pink-500 rounded-md text-white  font-semibold mt-4 "
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="text-white animate-spin w-4 h-4" />
            ) : (
              "Register"
            )}
          </button>
        </form>

        <div className="mt-8 text-center flex justify-center items-center gap-2">
          account ?
          <div className="inline-flex justify-center items-center text-sm gap-1 bg-pink-500/100 px-2  rounded-full text-white">
            <LogInIcon className="text-white w-4 h-4" />
            <Link href="/login">login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
