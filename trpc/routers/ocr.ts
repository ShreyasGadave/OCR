import { baseProcedure, createTRPCRouter } from "../init";

export const OcrRouter= createTRPCRouter({
    ocrprocess: baseProcedure
    .input(
        z.object({
            
        })
    )
})