"use client";

import { useState, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Image as ImageIcon } from "lucide-react";
import { readDoc } from "@/app/action";

const OcrReader = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [ocrResult, setOcrResult] = useState<string>("");
  const [ocrStatus, setOcrStatus] = useState<string>("");

  const handleFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (handleFileInput.current) {
      handleFileInput.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);
      setOcrResult("");
      setOcrStatus("");
    }
  };

  const handleAPI = async () => {
    if (!selectedImage) {
      setOcrStatus("Please upload an image.");
      return;
    }
    setOcrStatus("Processing");
    const docData = await readDoc(selectedImage);
    setOcrResult(docData);
    setOcrStatus("Completed");
  };

  return (
    <div className="flex flex-col items-center pb-4 px-2 w-full">
      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={handleFileInput}
        onChange={handleImageChange}
        className="hidden"
      />
      {selectedImage ? (
        <Image
          src={URL.createObjectURL(selectedImage)}
          alt="Uploaded Content"
          width="250"
          height="200"
          className="rounded-md"
        />
      ) : (
        <Card className="w-64 h-40 flex flex-col items-center justify-center bg-gray-50">
          <ImageIcon size={30} className="text-gray-500" />
          No image uploaded
        </Card>
      )}

      <div className="flex gap-4 py-4">
        <Button
          className="bg-gradient-to-b from-zinc-700 to-zinc-900"
          onClick={handleClick}
        >
          Upload Photo
        </Button>
        <Button
          className="bg-gradient-to-b from-zinc-700 to-zinc-900"
          disabled={!selectedImage}
          onClick={handleAPI}
        >
          Submit
        </Button>
      </div>

      <div className="flex px-4">
        <Card className="flex flex-col w-full max-h-70 overflow-auto">
          <CardHeader>
            <CardTitle>
              <h3 className="font-semibold">Extracted Text</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {ocrStatus === "Processing" ? (
              <div className="w-60 space-y-2">
                <span className="flex bg-gray-300 animate-pulse w-full h-5 rounded-md" />
                <span className="flex bg-gray-300 animate-pulse w-full h-5 rounded-md" />
                <span className="flex bg-gray-300 animate-pulse w-full h-5 rounded-md" />
              </div>
            ) : ocrResult ? (
              <div className="text-sm">
                {Object.entries(ocrResult).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key}:</strong> {value}
                  </p>
                ))}
              </div>
            ) : (
              <p>No text extracted.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OcrReader;
