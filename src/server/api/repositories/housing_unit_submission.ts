import { prisma } from "~/server/db";

interface createInput {
    housingUnitId: string
    name: string
    email: string
}

async function create(input: createInput) {
    return await prisma.housingUnitSubmission.create({
        data: {
            name: input.name,
            email: input.email,
            husu_hu_id: input.housingUnitId
        }
    })
}

export const housingUnitSubmissionRepository = {
    create,
}