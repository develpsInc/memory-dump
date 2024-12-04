/*
original author : Amon K. Daniel
Last updated by: Amon K. Daniel
date : 04/12/2024

description :  user UI and functionality like image selection and uploads

*/

import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { PencilIcon, UploadIcon } from "lucide-react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export function UploadForm({ className }: React.ComponentProps<"form">) {
  const [image, setImage] = React.useState<File | null>(null);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = (event: React.FormEvent) => {
    event.preventDefault();
    if (!image || !title || !description) {
      alert("Please fill in all fields.");
      return;
    }

    // Log the uploaded data to the console (mock functionality)
    console.log({
      image,
      title,
      description,
    });

    alert("Upload Successful!");
  };

  return (
    <form
      onSubmit={handleUpload}
      className={cn("grid items-start gap-4", className)}
    >
      {/* Image Upload Section */}
      <div className="grid gap-2">
        <Label htmlFor="image">Image</Label>
        <label
          htmlFor="file-upload"
          className="flex items-center justify-center w-full h-32 border-2 border-dashed rounded-md cursor-pointer hover:border-blue-500"
        >
          {image ? (
            // If an image is selected, display a preview
            <Image
              src={URL.createObjectURL(image)} // Create a temporary preview URL for the image
              alt="Selected"
              width={35}
              height={35}
              className="object-cover w-full h-full rounded-md"
            />
          ) : (
            // Placeholder UI when no image is selected
            <div className="flex flex-col items-center text-gray-500">
              <span className="text-2xl font-bold">+</span>
              <p>Select an Image</p>
            </div>
          )}
          <input
            id="file-upload" // Hidden file input to allow users to select an image
            type="file"
            className="hidden"
            accept="image/*" // Restrict file types to images only
            onChange={handleFileChange}
          />
        </label>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <div className="relative">
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="pl-10"
          />
          <PencilIcon className="absolute top-1/2 left-3 w-5 h-5 text-gray-500 -translate-y-1/2" />{" "}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>{" "}
        <div className="relative">
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="pl-10"
          />
          <DocumentTextIcon className="absolute top-3 left-3 w-5 h-5 text-gray-500" />{" "}
        </div>
      </div>

      <Button
        type="submit"
        className="flex items-center justify-center w-full gap-2"
      >
        <UploadIcon className="w-5 h-5" /> Upload
      </Button>
    </form>
  );
}

export default UploadForm;
