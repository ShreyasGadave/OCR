import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init"; 
import { prisma } from "@/db/client";

export const shreyasRouter = createTRPCRouter({
  submitProfile: baseProcedure
    .input(
      z.object({
        name: z.string(),
        email:z.string(),
      }),
    )
    .mutation( async ({ input }) => {
      console.log("Received from client:", input);
      const user = await prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
        },
      });
      return {
        success: true,
        message: `Saved ${input.name} with skill ${input.name}`,
      };
    }),
});
