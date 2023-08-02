import React, { useState } from "react";
import PrimaryButton from "~/pages/components/primary_button";
import CancelButton from "~/pages/components/cancel_button";

interface ModalProps {
    title: string;
    submitText: string;
    children?: React.ReactNode;
    isLoading: boolean;
    onSubmit: () => void;
    onCancel: () => void;
}

export default function Modal(props: ModalProps) {
    return (
        <>
            <div className="bg-black/40 fixed w-full h-full z-10 top-0 left-0"></div>
            <div className="fixed w-full h-full z-20 top-0 left-0 flex justify-center">
                <div className="bg-white rounded-md flex flex-col w-fit h-fit self-center">
                    <div className="p-4 bg-slate-200">
                        <b>{props.title}</b>
                    </div>
                    <div className="grow p-4">
                        {props.children}
                    </div>
                    <div className="flex justify-end p-4">
                        <CancelButton onClick={props.onCancel} className="mr-2" disabled={props.isLoading}>Cancel</CancelButton>
                        <PrimaryButton onClick={props.onSubmit} disabled={props.isLoading}>{props.submitText}</PrimaryButton>
                    </div>
                </div>
            </div>
        </>
    );
}
