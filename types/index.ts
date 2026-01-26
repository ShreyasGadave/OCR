export type ImageKitAuth = {
  token: string;
  expire: number;
  signature: string;
};

export type ImageKitUploadResponse = {
  url: string;
  fileId: string;
  name: string;
};