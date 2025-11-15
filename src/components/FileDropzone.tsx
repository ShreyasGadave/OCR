"use client"; // This component must be a client component

import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";
import { useRef, useState } from "react";

// UploadExample component demonstrates file uploading using ImageKit's Next.js SDK.
const UploadExample = () => {
  // State to keep track of the current upload progress (percentage)
  const [progress, setProgress] = useState(0);

  // Create a ref for the file input element to access its files easily
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Create an AbortController instance to provide an option to cancel the upload if needed.
  const abortController = new AbortController();

  /**
   * Authenticates and retrieves the necessary upload credentials from the server.
   *
   * This function calls the authentication API endpoint to receive upload parameters like signature,
   * expire time, token, and publicKey.
   *
   * @returns {Promise<{signature: string, expire: string, token: string, publicKey: string}>} The authentication parameters.
   * @throws {Error} Throws an error if the authentication request fails.
   */
  const authenticator = async () => {
    try {
      // Perform the request to the upload authentication endpoint.
      const response = await fetch("/api/upload-auth");
      if (!response.ok) {
        // If the server response is not successful, extract the error text for debugging.
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      // Parse and destructure the response JSON for upload credentials.
      const data = await response.json();
      const { signature, expire, token, publicKey } = data;
      return { signature, expire, token, publicKey };
    } catch (error) {
      // Log the original error for debugging before rethrowing a new error.
      console.error("Authentication error:", error);
      throw new Error("Authentication request failed");
    }
  };

  /**
   * Handles the file upload process.
   *
   * This function:
   * - Validates file selection.
   * - Retrieves upload authentication credentials.
   * - Initiates the file upload via the ImageKit SDK.
   * - Updates the upload progress.
   * - Catches and processes errors accordingly.
   */
  const handleUpload = async () => {
    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      alert("Please select a file to upload");
      return;
    }

    const file = fileInput.files[0];

    // 1️⃣ RUN OCR FIRST
    const formData = new FormData();
    formData.append("file", file);

    const ocrRes = await fetch("/api/ocr", {
      method: "POST",
      body: formData,
    });

    const { ocr } = await ocrRes.json();
    console.log("OCR Result:", ocr);

    // 2️⃣ THEN upload to ImageKit
    let authParams;
    try {
      authParams = await authenticator();
    } catch (err) {
      console.error("Failed to authenticate:", err);
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
          setProgress((event.loaded / event.total) * 100);
        },
        abortSignal: abortController.signal,
      });

      console.log("ImageKit Upload:", uploadResponse);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* File input element using React ref */}
      <input type="file" ref={fileInputRef} />
      {/* Button to trigger the upload process */}
      <button type="button" onClick={handleUpload}>
        Upload file
      </button>
      <br />
      {/* Display the current upload progress */}
      Upload progress: <progress value={progress} max={100}></progress>
    </>
  );
};

export default UploadExample;
