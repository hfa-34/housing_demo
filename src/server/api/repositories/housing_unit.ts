import { prisma } from "~/server/db";

interface getAllInput {
    description?: string
    bedrooms?: number
    priceFrom?: number
    priceTo?: number
    distanceToCampusFrom?: number
    distanceToCampusTo?: number
}

interface getByExternalIdInput {
    externalId: string
}

async function getAll(input: getAllInput) {
    return await prisma.housingUnit.findMany({
        where: {
            ...(input.description ? { description: { contains: input.description } } : {}),
            ...(input.bedrooms ? { bedrooms: input.bedrooms } : {}),
            ...(input.priceFrom && input.priceTo ? { price: { gte: input.priceFrom, lte: input.priceTo } } : {
                ...(input.priceFrom ? { price: { gte: input.priceFrom } } : {}),
                ...(input.priceTo ? { price: { lte: input.priceTo } } : {}),
            }),
            ...(input.distanceToCampusFrom && input.distanceToCampusTo ? { campus_distance_meters: { gte: input.distanceToCampusFrom, lte: input.distanceToCampusTo } } : {
                ...(input.distanceToCampusFrom ? { campus_distance_meters: { gte: input.distanceToCampusFrom } } : {}),
                ...(input.distanceToCampusTo ? { campus_distance_meters: { lte: input.distanceToCampusTo } } : {}),
            }),
        },
    })
}

async function getByExternalId(input: getByExternalIdInput) {
    return await prisma.housingUnit.findFirst({
        where: {
            external_id: input.externalId
        },
    })
}

export const housingUnitRepository = {
    getAll,
    getByExternalId,
}