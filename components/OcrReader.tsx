"use client";

import { useState, useRef } from "react";
import { createWorker } from "tesseract.js";
import { Button } from "./ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Image as ImageIcon } from "lucide-react";

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

  const readImageText = async () => {
    if (!selectedImage) {
      setOcrStatus("Please upload an image.");
      return;
    }

    setOcrStatus("Processing");
    const worker = await createWorker("eng", 1, {
      logger: (m) => console.log(m), // Add logger here
    });

    try {
      const {
        data: { text },
      } = await worker.recognize(selectedImage);

      setOcrResult(text);
      setOcrStatus("Completed");
    } catch (error) {
      console.error(error);
      setOcrStatus("Error occurred during processing.");
    } finally {
      await worker.terminate();
    }
  };

  return (
    <div className="flex flex-col items-center">
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
          width="300"
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
          onClick={readImageText}
        >
          Submit
        </Button>
      </div>

      <div className="">
        <Card className="max-w-sm max-h-60 overflow-auto">
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
            ) : (
              <p
                dangerouslySetInnerHTML={{
                  // clear html tags and or unwanted characters
                  __html: ocrResult
                    .replace(/\n/g, "<br />")
                    .replace(/[=,—,-,+]/g, " "),
                }}
                className="word-wrap break-words text-sm"
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OcrReader;
