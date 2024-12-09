/*
original author : Amon K. Daniel
Last updated by: Amon K. Daniel
date : 06/12/2024

description :  user UI and functionality like multiple image selection and uploads
*/

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PencilIcon, UploadIcon } from "lucide-react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { useToast } from "@/hooks/use-toast";

export function UploadForm({ className }: React.ComponentProps<"form">) {
  const [images, setImages] = React.useState<File[]>([]);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isUploading, setIsUploading] = React.useState(false);
  const { toast } = useToast();

  // Handle multiple file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages([...images, ...Array.from(event.target.files)]); // Append new files to the existing selection
    }
  };

  // Remove a specific image
  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const handleUpload = (event: React.FormEvent) => {
    event.preventDefault();

    if (images.length > 2) {
      toast({
        variant: "destructive",
        title: "Something happen",
        description:
          "You can't upload more than 2 images, only premium users can do this",
      });

      return;
    }

    // Check for missing fields only on upload attempt
    if (!images.length || !title.trim() || !description.trim()) {
      toast({
        variant: "destructive",
        description: "Please fill all the fields",
      });
      return;
    }

    // Start upload process
    setIsUploading(true);

    // Mock upload functionality
    console.log({ images, title, description });

    // Simulate an async upload process with a timeout (replace with actual upload logic)
    setTimeout(() => {
      setIsUploading(false);
      toast({
        description: "Upload successful",
      });

      // Reset the form
      setImages([]);
      setTitle("");
      setDescription("");
    }, 3000); // Simulating a 3-second upload delay
  };

  return (
    <form
      onSubmit={handleUpload}
      className={cn("grid items-start gap-4", className)}
    >
      {/* Image Upload Section */}
      <div className="grid gap-2">
        <Label htmlFor="image">Images</Label>
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-md cursor-pointer hover:border-pink-400"
        >
          {images.length > 0 ? (
            // Display selected images with a remove feature
            <div className="overflow-y-auto h-32 w-full grid grid-cols-3 gap-2 p-2 relative">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <Image
                    src={URL.createObjectURL(image)} // Create a temporary preview URL
                    alt={`Selected ${index + 1}`}
                    width={100}
                    height={100}
                    className="object-cover w-full h-24 rounded-md"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering file upload dialog
                      handleRemoveImage(index);
                    }}
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full p-1 hover:bg-red-600 transition w-6 h-6"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center text-gray-500">
              <span className="text-2xl font-bold">+</span>
              <p>Select Images</p>
            </div>
          )}
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept="image/*"
            multiple // Allow multiple file selection
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
            className="pl-10 pt-2 border-2 border-pink-400 placeholder:text-sm focus-visible:ring-0"
          />
          <PencilIcon className="absolute top-1/2 left-3 w-5 h-5 text-gray-500 -translate-y-1/2" />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <div className="relative">
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="pl-10 border-2 border-pink-400 focus-visible:ring-0 placeholder:text-sm"
          />
          <DocumentTextIcon className="absolute top-3 left-3 w-5 h-5 text-gray-500" />
        </div>
      </div>

      <Button
        type="submit"
        className="flex items-center justify-center w-full gap-2 bg-pink-500 hover:bg-pink-400 transition-all duration-300 ease-in-out"
        disabled={isUploading}
      >
        {isUploading ? (
          <>
            <div className="w-5 h-5 border-4 border-t-4 border-pink-300 border-solid rounded-full animate-spin duration-[3000ms] opacity-100" />
            Uploading...
          </>
        ) : (
          <>
            <UploadIcon className="w-5 h-5" /> Upload
          </>
        )}
      </Button>
    </form>
  );
}

export default UploadForm;
