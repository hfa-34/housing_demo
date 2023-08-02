import React from "react";
import Modal from "~/pages/components/modal";
import FormInput from "./form_input";
import { api } from "~/utils/api";
import ModalSuccess from "~/pages/components/modal_success";


interface InterestedModalProps {
    housingUnitExternalId: string;
    display: boolean;
    onClose: () => void;
}

export default function InterestedModal(props: InterestedModalProps) {
    const createMutation = api.v1.housingUnitSubmission.create.useMutation()

    const [isLoading, setIsLoading] = React.useState(false);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [emailValidationError, setEmailValidationError] = React.useState(false);

    const [displaySuccessModal, setDisplaySuccessModal] = React.useState(false);

    const handleNameChange = (val?: string) => {
        console.log(val)
        setName(val!);
    }

    const handleEmailChange = (val?: string) => {
        if (!validateEmail(val!)) {
            setEmailValidationError(true);
            return
        }

        setEmailValidationError(false);
        setEmail(val!);
    }

    const onSubmit = () => {
        if (name == "" || !validateEmail(email)) {
            return;
        }

        setIsLoading(true);

        createMutation.mutate({
            name: name,
            email: email,
            housingUnitExternalId: props.housingUnitExternalId,
        })

        setIsLoading(false);

        if (createMutation.error == null) {
            setDisplaySuccessModal(true);
        }
    }

    function validateEmail(val: string): boolean {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(val).toLowerCase());
    }

    return (
        <>
            {displaySuccessModal &&
                <ModalSuccess title="Submission Sent!" onDismiss={() => { setDisplaySuccessModal(false), props.onClose() }}></ModalSuccess>
            }
            {props.display &&
                <Modal
                    isLoading={isLoading}
                    onSubmit={onSubmit}
                    onCancel={() => { props.onClose() }}
                    title="I'm Interested"
                    submitText="Submit!">
                    <FormInput placeholder="Name" onChange={handleNameChange}></FormInput>
                    <br />
                    <br />
                    <FormInput placeholder="Email" onChange={handleEmailChange}></FormInput>
                    {emailValidationError &&
                        <p className="text-red-500">Please enter a valid email</p>
                    }
                </Modal>
            }
        </>
    );
}
