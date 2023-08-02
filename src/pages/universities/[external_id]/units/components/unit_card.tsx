import React from "react";
import PrimaryButton from "~/pages/components/primary_button";
import InterestedModal from "./interested_form";

interface UnitCardProps {
    externalId: string;
    photoUrl: string;
    description: string;
    bedrooms: number;
    price: number;
    campusDistanceMeters: number;
}

export default function UnitCard(props: UnitCardProps) {
    const [displayModalInterested, setDisplayModalInterested] = React.useState(false);

    const handleOnInterested = () => {
        setDisplayModalInterested(true)
    }

    const handleOnClose = () => {
        setDisplayModalInterested(false)
    }

    return (
        <>
            <InterestedModal display={displayModalInterested} onClose={handleOnClose} housingUnitExternalId={props.externalId}></InterestedModal>

            <div className="
            bg-white
            rounded-md
            overflow-hidden
            flex flex-col
            ">
                <div className="relative flex grow h-80">
                    <img
                        className="
                        object-cover
                        w-fit
                        h-full
                        "
                        src={props.photoUrl}
                    >

                    </img>

                    <div className="
                    pointer-events-none
                    bg-white/90
                    text-sky-500
                    absolute
                    bottom-0
                    right-0
                    text-2xl
                    flex
                    justify-center
                    px-4
                    py-2
                    ">
                        <b>${props.price}</b>
                    </div>
                </div>

                <div className="p-4 h-40">
                    <ul>
                        <li>Bedrooms: <b>{props.bedrooms}</b></li>
                        <li>Distance to Campus: <b>{props.campusDistanceMeters}m</b></li>
                    </ul>

                    <p className="mt-2 mb-2 text-gray-700">
                        {props.description}
                    </p>

                </div>

                <div className="flex justify-center p-6">
                    <PrimaryButton onClick={handleOnInterested}>
                        <h3>I'm interested</h3>
                    </PrimaryButton>
                </div>

            </div>
        </>

    );
}
