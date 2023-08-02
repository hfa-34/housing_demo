import { createTRPCRouter } from "~/server/api/trpc";
import { housingUnitProcedures } from "~/server/api/procedures/housing_unit";

export const housingUnitRouter = createTRPCRouter({
  getAll: housingUnitProcedures.getAll,
});
