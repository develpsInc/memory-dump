import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "./ui/button";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center px-6 md:px-12 lg:px-20 w-full min-h-screen">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-6">
        <h1 className="text-2xl font-semibold">Memory Dump</h1>
        <div className="flex gap-4">
          <Button
            asChild
            variant="default"
            size="lg"
            className="bg-pink-500 hover:bg-pink-400 text-white font-semibold px-4 py-2 text-lg rounded-xl"
          >
            <Link href="/login">Log In</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold px-4 py-2 text-lg rounded-xl"
          >
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center max-w-3xl w-full py-12">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tighter">
          Welcome to Memory Dump
        </h2>
        <p className="text-gray-500 text-lg md:text-xl mb-8">
          Upload and extract insights from memory dumps effortlessly.
        </p>
        <Separator className="my-10 w-full max-w-2xl mx-auto" />
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl pb-16">
        {[
          { title: "Fast Processing", desc: "Quickly upload image files." },
          {
            title: "Accurate Insights",
            desc: "Get detailed breakdowns of your dump files.",
          },
          {
            title: "Secure Analysis",
            desc: "Your files remain private and protected.",
          },
        ].map((feature, index) => (
          <Card
            key={index}
            className="p-6 rounded-xl shadow-md"
          >
            <CardContent>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-gray-500 text-sm py-6">
        &copy; 2025 Memory Dump. All Rights Reserved.
      </footer>
    </div>
  );
}
