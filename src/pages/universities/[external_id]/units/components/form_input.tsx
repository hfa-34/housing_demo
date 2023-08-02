import { KeyboardEvent, useState, useEffect } from "react";

interface FormInputProps {
    placeholder: string;
    onChange: (newValue?: string) => void;
}

export default function FormInput(props: FormInputProps) {
    const [value, setValue] = useState("");

    const handleInputOnChange = (event: any) => {
        setValue(event.target.value);
        props.onChange(event.target.value);
    }

    return (
        <>
            <input
                className="w-40 p-3 border-2"
                type="text"
                placeholder={props.placeholder}
                onChange={handleInputOnChange} />

        </>
    );
}
