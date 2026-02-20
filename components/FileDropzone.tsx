"use client";

import React, { useState } from "react";
import { getImageKitAuth, uploadToImageKit } from "@/lib/imagekit";
import { trpc } from "@/trpc/client"; // ✅ adjust path to your trpc client

const FileDropzone: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const submitProfile = trpc.shreya.submitProfile.useMutation({
    onSuccess: (data) => {
      console.log("Profile saved:", data);
    },
    onError: (err) => {
      console.error("tRPC error:", err);
      alert(err.message);
    },
  });

  const uploadAndSubmit = async () => {
    if (!file) return;
    setLoading(true);

    try {
      // STEP 1 — Upload to ImageKit
      const auth = await getImageKitAuth();
      const uploadData = await uploadToImageKit(file, auth);
      setImageUrl(uploadData.url);

      // STEP 2 — Send fileUrl + user info to tRPC
      await submitProfile.mutateAsync({
        userId: '697885df0968862c9b410900', // 🔁 replace with real user email
        fileUrl: uploadData.url,
      });
    } catch (err) {
      console.error(err);
      alert("Upload or save failed");
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

      <button onClick={uploadAndSubmit} disabled={loading || submitProfile.isPending}>
        {loading || submitProfile.isPending ? "Processing..." : "Upload & Save"}
      </button>

      {imageUrl && <img src={imageUrl} width={200} />}
    </div>
  );
};

export default FileDropzone;