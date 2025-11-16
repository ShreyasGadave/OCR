"use client";

import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";
import { useRef, useState } from "react";
import Toaster, { ToasterRef } from "@/components/ui/toast";

const UploadExample = () => {
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortController = new AbortController();
  const toasterRef = useRef<ToasterRef>(null);

  const authenticator = async () => {
    try {
      const response = await fetch("/api/upload-auth");
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }
      return await response.json();
    } catch (error) {
      console.error("Authentication error:", error);
      throw new Error("Authentication request failed");
    }
  };

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const files = event.dataTransfer.files;
    if (!files || !files.length) return;

    fileInputRef.current!.files = files;
    toasterRef.current?.show({
      title: "File Ready 📄",
      message: `${files[0].name} is ready for upload!`,
      variant: "default",
      position: "bottom-right",
    });
  };

  const handleUpload = async () => {
    const input = fileInputRef.current;
    if (!input?.files?.[0]) {
      toasterRef.current?.show({
        title: "Upload Failed ❌",
        message: "Please select a file to upload",
        variant: "error",
        position: "bottom-right",
        duration: 5000,
      });
      return;
    }

    const file = input.files[0];
    const formData = new FormData();
    formData.append("file", file);

    let authParams;
    try {
      authParams = await authenticator();
    } catch (error) {
      console.error("Authentication failed:", error);
      return;
    }

    const { signature, expire, token, publicKey } = authParams;

    try {
      const uploadResponse = await upload({
        expire,
        token,
        signature,
        publicKey,
        file,
        fileName: file.name,
        onProgress: (event) => {
          setProgress((event.loaded / event.total) * 40);
        },
        abortSignal: abortController.signal,
      });

      console.log("ImageKit Upload:", uploadResponse);
      formData.append("uploadResponse", JSON.stringify(uploadResponse));

      const ocrRes = await fetch("/api/ocr", {
        method: "POST",
        body: formData,
      });

      setProgress(75);
      setTimeout(() => setProgress(100), 500);

      const { extracted } = await ocrRes.json();
      toasterRef.current?.show({
        title: "Upload Successful 🎉",
        message: "Image uploaded & OCR completed successfully!",
        variant: "success",
        position: "bottom-right",
        highlightTitle: true,
        duration: 5000,
      });

      console.log("OCR Result:", extracted);
    } catch (error) {
      toasterRef.current?.show({
        title: "Upload Failed ❌",
        message: "Something went wrong. Please try again.",
        variant: "error",
        position: "bottom-right",
        duration: 5000,
      });
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <div
        onDrop={handleFileDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition ${
          isDragging ? "border-green-500 bg-green-50" : "border-gray-400"
        }`}
        onClick={() => fileInputRef.current?.click()}
      >
        <input ref={fileInputRef} type="file" className="hidden" />
        <p className="text-gray-600">
          {isDragging ? "Drop it like it's hot 🔥" : "Drag & drop a file or click to browse"}
        </p>
      </div>

      <button
        onClick={handleUpload}
        className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow transition"
      >
        Upload File
      </button>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <Toaster ref={toasterRef} />
    </div>
  );
};

export default UploadExample;
