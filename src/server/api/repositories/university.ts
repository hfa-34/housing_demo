import { prisma } from "~/server/db";

async function getAll() {
    return await prisma.university.findMany()
}

export const universityRepository = {
    getAll,
}