import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY not set" },
        { status: 500 }
      );
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    // Read uploaded file
    const form = await req.formData();
    const file = form.get("file") as File;
    const uploadResponse = form.get("uploadResponse");
    if (!file) {
      return NextResponse.json({ error: "No file received" }, { status: 400 });
    }

    // Convert file → base64
    const arrayBuffer = await file.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");

    // OCR Prompt
    const prompt = `
Extract ALL the text and structured fields from this document in JSON format.

Return JSON only.
  `;

    // Gemini OCR request
    const result = await model.generateContent([
      {
        inlineData: {
          data: base64,
          mimeType: file.type,
        },
      },
      prompt,
    ]);

    let text = result.response.text();
    text = text.replace(/```json|```/g, "").trim();

    let parsedJSON = null;

    try {
      parsedJSON = JSON.parse(text);
      console.log("this is data :", parsedJSON);
    } catch (err) {
      return NextResponse.json(
        { error: "OCR returned invalid JSON", raw: text },
        { status: 400 }
      );
    }

    // Store base64 image if needed
    // const imageUrl = `data:${file.type};base64,${base64}`;

    // Save in DB

    const saved = await prisma.userOCR.create({
      data: {
        imageUrl: JSON.stringify(uploadResponse),
        rawData: JSON.stringify(parsedJSON),
      },
    });

    return NextResponse.json({
      success: true,
      extracted: parsedJSON,
      saved,
    });
  } catch (err: any) {
    console.error("OCR ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
