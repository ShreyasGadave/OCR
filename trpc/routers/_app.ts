import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { shreyasRouter } from "./shreyas";
import { UserRouter } from "./user";
import { AuthRouter } from "./Auth";

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(async (opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),

  shreya: shreyasRouter,
  User:UserRouter,
  auth: AuthRouter

});

// export type definition of API
export type AppRouter = typeof appRouter;
