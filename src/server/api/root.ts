import { housingUnitRouter } from "~/server/api/routers/v1/housing_unit";
import { universityRouter } from "~/server/api/routers/v1/university";
import { housingUnitSubmissionRouter } from "~/server/api/routers/v1/housing_unit_submission";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
const v1AppRouter = createTRPCRouter({
  housingUnit: housingUnitRouter,
  university: universityRouter,
  housingUnitSubmission: housingUnitSubmissionRouter,
});

export const appRouter = createTRPCRouter({
  v1: v1AppRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
