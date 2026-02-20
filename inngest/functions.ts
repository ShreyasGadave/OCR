import { inngest } from "./client";

export const processOCR = inngest.createFunction(
  { id: "process-ocr-file" },
  { event: "ocr/process.file" },

async ({ event, step }) => {
  const { fileUrl, userId } = event.data;

  // STEP 1 — Download image as raw binary
  const imageData = await step.run("download-image", async () => {
    const res = await fetch(fileUrl);

    if (!res.ok) {
      throw new Error(`Failed to download image: ${res.statusText}`);
    }

    const arrayBuffer = await res.arrayBuffer();
    const uint8Array = Array.from(new Uint8Array(arrayBuffer));
    const mimeType = res.headers.get("content-type") ?? "image/jpeg";

    return { uint8Array, mimeType };
  });

  // STEP 2 — Reconstruct file and send to OCR API
  const ocrResult = await step.run("call-ocr-api", async () => {
    const blob = new Blob([new Uint8Array(imageData.uint8Array)], {
      type: imageData.mimeType,
    });

    // ✅ imageFile was missing — now properly defined
    const imageFile = new File([blob], "image.jpg", {
      type: imageData.mimeType,
    });

    const formData = new FormData();
    formData.append("image", imageFile, imageFile.name); // ✅ key is "image"

    const res = await fetch(
      "https://jyotiradityachavan-document-ai-qwen-vl-2.hf.space/bill",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`OCR API failed: ${res.statusText} — ${errorText}`);
    }

    const data = await res.json();
    return data;
  });

  // STEP 3 — Save and return OCR result
  await step.run("save-ocr-result", async () => {
    console.log("OCR Result:", ocrResult);

    // await prisma.ocrResult.create({
    //   data: {
    //     userId,
    //     text: JSON.stringify(ocrResult),
    //     fileUrl,
    //   },
    // });
  });

  return { success: true, data: ocrResult };
},
);