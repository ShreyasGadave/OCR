import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { prisma } from "@/db/client";
import { TRPCError } from "@trpc/server";
import { Prisma } from "@prisma/client";

export const shreyasRouter = createTRPCRouter({
  submitProfile: baseProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
      }),
    )

    
    .mutation(async ({ input }) => {
      try {
        const user = await prisma.user.create({
          data: {
            name: input.name,
            email: input.email,
          },
        });

        return {
          success: true,
          message: `Saved ${input.name} successfully`,
          data: user,
        };
      } catch (error:any) {
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
