import { createTRPCRouter } from "~/server/api/trpc";
import { universityProcedures } from "~/server/api/procedures/university";

export const universityRouter = createTRPCRouter({
    getAll: universityProcedures.getAll,
});
