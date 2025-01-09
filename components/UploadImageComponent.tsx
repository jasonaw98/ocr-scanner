"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Button } from "./ui/button";

interface ImageObject {
  imagePreview: string;
  imageFile: File;
}

const UploadImageComponent = () => {
  const [imageObject, setImageObject] = useState<ImageObject | null>(null);

  const handleFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (handleFileInput.current) {
      handleFileInput.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImageObject({
        imagePreview: URL.createObjectURL(file),
        imageFile: file,
      });
    }
  };

  return (
    <div className="flex flex-col items-center h-full gap-8 pt-8">
      <h1 className="text-xl font-bold">Scan Documents</h1>
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        capture="environment"
        ref={handleFileInput}
        onChange={handleImageChange}
      />
      {imageObject && (
        <Image
          src={imageObject.imagePreview}
          alt=""
          width="200"
          height="200"
          className="rounded-md"
        />
      )}
      <Button onClick={handleClick}>Upload Photo</Button>
    </div>
  );
};

export default UploadImageComponent;
