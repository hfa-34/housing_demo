import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const uChicago = await prisma.university.upsert({
        where: { external_id: 'university_of_chicago' },
        update: {},
        create: {
            external_id: 'university_of_chicago',
            name: 'University of Chicago',
            campus_lat: 41.7894248,
            campus_lon: -87.6003707,
            photo_url: 'https://s3.amazonaws.com/external_clips/attachments/1207737/original/open-uri20170827-20207-yq3lx4?1503841297',
            housingUnits: {
                create: [
                    {
                        external_id: "6105_s_drexel_ave",
                        photo_url: "https://pbs.twimg.com/media/CleFc5ZWQAAUUIh?format=jpg&name=large",
                        address: "6105 S Drexel Ave",
                        lat: 41.7830062,
                        lon: -87.6032747,
                        description: "Beautiful and affordable housing near the university of chicago.",
                        campus_distance_meters: 75,
                        bedrooms: 1,
                        price: 3500,
                    },
                    {
                        external_id: "6505_s_ingleside_ave",
                        photo_url: "https://uk.urbanest.com/wp-content/uploads/Urban-Nest-St-Panc-13-e1509719975779.jpg",
                        address: "6505 S Ingleside Ave",
                        lat: 41.7761907,
                        lon: -87.6029821,
                        description: "Relaxing and comfortable two bedrooms unit.",
                        campus_distance_meters: 75,
                        bedrooms: 2,
                        price: 5000,
                    },
                    {
                        external_id: "6105_s_ellis_ave",
                        photo_url: "https://i.pinimg.com/originals/2f/9c/2c/2f9c2cdd06e33c52006e4433f8fd0003.jpg",
                        address: "6507 S Ellis Ave",
                        lat: 41.7765563,
                        lon: -87.6004181,
                        description: "Spacious with three bathroom and a kitchen.",
                        campus_distance_meters: 157,
                        bedrooms: 3,
                        price: 6000,
                    },
                    {
                        external_id: "5548_s_woodlawn_ave",
                        photo_url: "https://public.sturents.com/photos/6614302.jpg",
                        address: "5548 S Woodlawn Ave",
                        lat: 41.793718,
                        lon: -87.5970866,
                        description: "Ideal room in perfect condition.",
                        campus_distance_meters: 300,
                        bedrooms: 1,
                        price: 2000,
                    },
                ],
            },
        },
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
