import { ImageKitAuth, ImageKitUploadResponse } from "@/types";

export const getImageKitAuth = async (): Promise<ImageKitAuth> => {
  const res = await fetch("/api/imagekit-auth");

  if (!res.ok) {
    throw new Error("Failed to get ImageKit auth");
  }

  return res.json();
};

export const uploadToImageKit = async (
  file: File,
  auth: ImageKitAuth
): Promise<ImageKitUploadResponse> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("fileName", file.name);
  formData.append(
    "publicKey",
    process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!
  );
  formData.append("signature", auth.signature);
  formData.append("expire", auth.expire.toString());
  formData.append("token", auth.token);

  const res = await fetch(
    "https://upload.imagekit.io/api/v1/files/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    throw new Error("ImageKit upload failed");
  }

  return res.json();
};