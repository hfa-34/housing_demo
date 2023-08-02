import { z } from "zod";
import { publicProcedure } from "~/server/api/trpc";
import { housingUnitSubmissionRepository } from "~/server/api/repositories/housing_unit_submission";
import { housingUnitRepository } from "~/server/api/repositories/housing_unit";

const create = publicProcedure
    .input(z.object({
        housingUnitExternalId: z.string(),
        name: z.string(),
        email: z.string(),
    }))
    .mutation(async ({ input }) => {
        let housingUnit = await housingUnitRepository.getByExternalId({ externalId: input.housingUnitExternalId })

        if (!housingUnit) {
            return null
        }

        return housingUnitSubmissionRepository.create({
            name: input.name,
            email: input.email,
            housingUnitId: housingUnit.hu_id,
        })
    });

export const housingUnitSubmissionProcedures = {
    create,
}