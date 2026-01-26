"use client";

import React, { useState } from "react";
import { getImageKitAuth, uploadToImageKit } from "@/lib/imagekit";
import { extractTextFromImage } from  "@/lib/gemini"
import { toBase64 } from "@/utils/toBase64";

const FileDropzone: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [ocrText, setOcrText] = useState("");

  const uploadAndOCR = async () => {
    if (!file) return;
    setLoading(true);
    
    try {
      const auth = await getImageKitAuth();
      const uploadData = await uploadToImageKit(file, auth);
      setImageUrl(uploadData.url);

      const base64 = await toBase64(file);
      const text = await extractTextFromImage(base64, file.type);
      setOcrText(text);

      await fetch("/api/save-ocr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageUrl: uploadData.url,
          text,
        }),
      });
    } catch (err) {
      console.error(err);
      alert("Upload or OCR failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ border: "2px dashed #ccc", padding: 20 }}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />

      <button onClick={uploadAndOCR} disabled={loading}>
        {loading ? "Processing..." : "Upload & OCR"}
      </button>

      {imageUrl && <img src={imageUrl} width={200} />}
      {ocrText && <pre>{ocrText}</pre>}
    </div>
  );
};

export default FileDropzone;