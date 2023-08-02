import { KeyboardEvent, useState, useEffect } from "react";

interface FilterInputProps {
    placeholder: string;
    value?: string;
    onChange: (newValue?: string) => void;
}

export default function FilterInput(props: FilterInputProps) {
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        setValue(props.value)
    }, [props]);

    const handleInputOnChange = (event: any) => {
        setValue(event.target.value);
    }

    const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.onChange(value);
        }
    }

    return (
        <>
            <input
                className="rounded-full w-full md:w-96 p-3"
                type="text"
                placeholder={props.placeholder}
                value={value}
                onChange={handleInputOnChange}
                onKeyDown={handleInputKeyDown} />

        </>
    );
}
