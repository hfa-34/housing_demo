import React from "react";
import { useRouter } from 'next/router'
import FilterGenericNumber from "./components/filter_generic_number";
import FilterGenericRange from "./components/filter_generic_range";
import FilterInput from "./components/filter_input";
import UnitCard from "./components/unit_card";
import FlatButton from "~/pages/components/flat_button";
import { api } from "~/utils/api";

export default function Index() {
    const router = useRouter()
    let description: string | undefined;
    let bedrooms: number | undefined;
    let priceFrom: number | undefined;
    let priceTo: number | undefined;
    let distanceToCampusFrom: number | undefined;
    let distanceToCampusTo: number | undefined;

    if (typeof router.query.description === 'string' && router.query.description != "") {
        description = router.query.description;
    }
    if (typeof router.query.bedrooms === 'string'
        && Number.isInteger(parseInt(router.query.bedrooms))
        && router.query.bedrooms != ""
    ) {
        bedrooms = parseInt(router.query.bedrooms);
        console.log(bedrooms)
    }
    if (typeof router.query.price_from === 'string'
        && !Number.isNaN(parseInt(router.query.price_from))
        && router.query.price_from != ""
    ) {
        priceFrom = parseInt(router.query.price_from);
    }
    if (typeof router.query.price_to === 'string'
        && !Number.isNaN(parseInt(router.query.price_to))
        && router.query.price_to != ""
    ) {
        priceTo = parseInt(router.query.price_to);
    }
    if (typeof router.query.distance_to_campus_from === 'string'
        && !Number.isNaN(parseInt(router.query.distance_to_campus_from))
        && router.query.distance_to_campus_from != ""
    ) {
        distanceToCampusFrom = parseInt(router.query.distance_to_campus_from);
    }
    if (typeof router.query.distance_to_campus_to === 'string'
        && !Number.isNaN(parseInt(router.query.distance_to_campus_to))
        && router.query.distance_to_campus_to != ""
    ) {
        distanceToCampusTo = parseInt(router.query.distance_to_campus_to);
    }

    const handleFilterDescriptionChange = (val?: string) => {
        router.push({
            pathname: "",
            query: {
                ...router.query,
                description: val,
            }
        })
    }
    const handleFilterBedroomChange = (val?: number) => {
        router.push({
            pathname: "",
            query: {
                ...router.query,
                bedrooms: val
            }
        })
    }
    const handleFilterPrinceChange = (from?: number, to?: number) => {
        router.push({
            pathname: "",
            query: {
                ...router.query,
                price_from: from,
                price_to: to,
            }
        })
    }
    const handleFilterDistanceToCampusChange = (from?: number, to?: number) => {
        router.push({
            pathname: "",
            query: {
                ...router.query,
                distance_to_campus_from: from,
                distance_to_campus_to: to,
            }
        })
    }

    const units = api.v1.housingUnit.getAll.useQuery({
        description: description,
        bedrooms: bedrooms,
        priceFrom: priceFrom,
        priceTo: priceTo,
        distanceToCampusFrom: distanceToCampusFrom,
        distanceToCampusTo: distanceToCampusTo,
    })

    return (
        <>
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-[3rem]">
                    Units
                </h2>
            </div>
            <div className="pl-12 pr-12 w-full">
                <FilterInput placeholder="Search by description" value={description} onChange={handleFilterDescriptionChange}></FilterInput>

            </div >
            <div className="p-12 flex flex-col lg:flex-row w-full">
                <div className="mr-8 p-4 mb-10 lg:mb-0 bg-white/50">
                    <div className="w-60">
                        <b>Filters</b>
                    </div>

                    <br />
                    <FilterGenericNumber placeholder="Number of Bedrooms" options={[1, 2, 3, 4]} value={bedrooms} onChange={handleFilterBedroomChange}></FilterGenericNumber>
                    <br />
                    <FilterGenericRange placeholder="Price" valueFrom={priceFrom} valueTo={priceTo} onChange={handleFilterPrinceChange}></FilterGenericRange>
                    <br />
                    <FilterGenericRange placeholder="Distance" valueFrom={distanceToCampusFrom} valueTo={distanceToCampusTo} onChange={handleFilterDistanceToCampusChange}></FilterGenericRange>

                </div>
                <div className="grow overflow-hidden">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
                        {units.data ?
                            units.data.map((unit) => (
                                <UnitCard
                                    key={unit.external_id}
                                    price={unit.price}
                                    externalId={unit.external_id}
                                    bedrooms={unit.bedrooms}
                                    campusDistanceMeters={unit.campus_distance_meters}
                                    description={unit.description}
                                    photoUrl={unit.photo_url}></UnitCard>
                            ))
                            :
                            <div>
                                "Loading.."
                            </div>}
                    </div>
                </div >
            </div >
        </>
    );
}
