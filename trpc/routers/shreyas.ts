import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { prisma } from "@/db/client";
import { TRPCError } from "@trpc/server";
import { Prisma } from "@prisma/client";
import { inngest } from "@/inngest/client";

export const shreyasRouter = createTRPCRouter({
  submitProfile: baseProcedure
    .input(
      z.object({
        userId: z.string(),
        fileUrl: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        console.log("This is userId :", input.userId);
        console.log("This is File URL : ", input.fileUrl);

        // ✅ Trigger Inngest OCR
        await inngest.send({
          name: "ocr/process.file",
          data: {
            fileUrl: input.fileUrl,
            userId: input.userId,
          },
        });

        return {
          success: true,
          message: `Saved successfully`,
        };
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "This record already exists.",
            });
          }
        }

        console.error("Database error:", error);

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong. Please try again.",
        });
      }
    }),
});