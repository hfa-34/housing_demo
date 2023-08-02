import { publicProcedure } from "~/server/api/trpc";
import { universityRepository } from "~/server/api/repositories/university";

const getAll = publicProcedure
    .query(({ ctx }) => {
        return universityRepository.getAll()
    });

export const universityProcedures = {
    getAll,
}