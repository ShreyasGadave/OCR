import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { prisma } from "@/db/client";
import { TRPCError } from "@trpc/server";
import { Prisma } from "@prisma/client";
import { inngest } from "@/inngest/client"; // ✅ add this

export const shreyasRouter = createTRPCRouter({
  submitProfile: baseProcedure
    .input(
      z.object({
        userID:z
        file: z.file(), // file URL (Cloudinary/S3/etc)
      })
    )
    .mutation(async ({ input }) => {
      try {
        // ✅ Create user
        const user = await prisma.user.create({
          data: {
            file: input.file
          },
        });

        // ✅ 🔥 Trigger Inngest OCR Function
        await inngest.send({
          name: "ocr/process.file",
          data: {
            file: input.file,
          },
        });

        return {
          success: true,
          message: `Saved successfully`,
          data: user,
        };
      } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "Email already exists. Please use a different email.",
            });
          }
        }

        console.error("Database error:", error);

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create user. Please try again.",
        });
      }
    }),
});