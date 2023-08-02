import { z } from "zod";
import { publicProcedure } from "~/server/api/trpc";
import { housingUnitRepository } from "~/server/api/repositories/housing_unit";

const getAll = publicProcedure
    .input(z.object({
        description: z.string().optional(),
        bedrooms: z.number().optional(),
        priceFrom: z.number().optional(),
        priceTo: z.number().optional(),
        distanceToCampusFrom: z.number().optional(),
        distanceToCampusTo: z.number().optional(),
    }))
    .query(async ({ input }) => {
        let items = await housingUnitRepository.getAll(input)

        return items
    })

export const housingUnitProcedures = {
    getAll,
}