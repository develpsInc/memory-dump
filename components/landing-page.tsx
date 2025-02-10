/*
original author : Amon K. Daniel
Last updated by: Amon K. Daniel
date : 02/10/2025

description :  entry point of landing page of the memory dump

*/

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "./ui/button";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center px-4 ">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 mb-10">
        <h1 className="text-2xl font-semibold">Memory Dump</h1>
        <div className="flex gap-4">
          {/* <Link
            href={"/login"}
            className="bg-pink-500 hover:bg-pink-400 text-white font-semibold px-4 py-2 text-lg rounded-xl"
          >
            Log In
          </Link>
          <Link
            href={"/register"}
            className="bg-pink-500 hover:bg-pink-400 text-white rounded-xl font-semibold px-4 py-2 text-lg"
          >
            Sign Up
          </Link> */}

          <Button
            asChild
            variant={"default"}
            size={"lg"}
            className="bg-pink-500 hover:bg-pink-400 text-white font-semibold px-4 py-2 text-lg rounded-xl"
          >
            <Link
              href={"/login"}
              className="bg-pink-500 hover:bg-pink-400 text-white font-semibold px-4 py-2 text-lg rounded-xl"
            >
              Log In
            </Link>
          </Button>
          <Button
            asChild
            variant={"outline"}
            size={"lg"}
            className="bg-pink-500 hover:bg-pink-400 text-white font-semibold px-4 py-2 text-lg rounded-xl"
          >
            <Link
              href={"/register"}
              className="bg-pink-500 hover:bg-pink-400 text-white font-semibold px-4 py-2 text-lg rounded-xl"
            >
              Register
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center ">
        <h2 className="text-5xl font-semibold mb-6 tracking-tighter">
          Welcome to Memory Dump
        </h2>
        <p className="text-gray-400 mb-8">
          Upload and extract insights from memory dumps effortlessly.
        </p>
        <Separator className="my-10 w-3/4 mx-auto" />

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              title: "Fast Processing",
              desc: "Quickly upload image files.",
            },
            {
              title: "Accurate Insights",
              desc: "Get detailed breakdowns of your dump files.",
            },
            {
              title: "Secure Analysis",
              desc: "Your files remain private and protected.",
            },
          ].map((feature, index) => (
            <Card key={index} className="p-6 rounded-xl shadow">
              <CardContent>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm absolute bottom-4">
        &copy; 2025 Memory Dump. All Rights Reserved.
      </footer>
    </div>
  );
}
