import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";

export const UserRouter = createTRPCRouter({
  getData: baseProcedure.query(() => {
    return {
      name: "Shreyas Anil Gadave",
      skills: ["React", "Next.js", "Node.js"],
    };
  }),

  submit: baseProcedure
    .input(
      z.object({
        name: z.string(),
        skill: z.number(),
        age: z.number(),
        isActive: z.boolean(),
      })
    )
    .mutation(({ input }) => {
      console.log("Received from client:", input);

      return {
        success: true,
        message: `Saved ${input.name} with skill ${input.skill} ${input.isActive} :${input.age}`,
      };
    }),
});
