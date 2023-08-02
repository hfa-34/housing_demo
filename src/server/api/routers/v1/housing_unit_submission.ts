import { createTRPCRouter } from "~/server/api/trpc";
import { housingUnitSubmissionProcedures } from "~/server/api/procedures/housing_unit_submission";

export const housingUnitSubmissionRouter = createTRPCRouter({
  create: housingUnitSubmissionProcedures.create,
});
