import React, { useState } from "react";
import PrimaryButton from "~/pages/components/primary_button";
import CancelButton from "~/pages/components/cancel_button";

interface ModalSuccessProps {
    title: string;
    onDismiss: () => void;
}

export default function ModalSuccess(props: ModalSuccessProps) {
    return (
        <>
            <div className="bg-black/40 fixed w-full h-full z-30 top-0 left-0"></div>
            <div className="fixed w-full h-full z-40 top-0 left-0 flex justify-center">
                <div className="bg-green-200 rounded-md flex flex-col w-fit h-fit self-center">
                    <div className="p-4 bg-slate-200">
                        <b>{props.title}</b>
                    </div>
                    <div className="grow p-4">
                        <b>Success!</b>
                    </div>
                    <div className="flex justify-end p-4">
                        <PrimaryButton onClick={props.onDismiss}>Dismiss</PrimaryButton>
                    </div>
                </div>
            </div>
        </>
    );
}
