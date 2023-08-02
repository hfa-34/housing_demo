import { KeyboardEvent, useState, useEffect } from "react";

interface FilterGenericRangeProps {
    placeholder: string;
    valueFrom?: number;
    valueTo?: number;
    onChange: (from?: number, to?: number) => void;
}

export default function FilterGenericRange(props: FilterGenericRangeProps) {
    const [valueFrom, setValueFrom] = useState(props.valueFrom);
    const [valueTo, setValueTo] = useState(props.valueTo);

    useEffect(() => {
        setValueFrom(props.valueFrom)
        setValueTo(props.valueTo)
    }, [props]);

    const handleInputValueFromChange = (event: any) => {
        setValueFrom(event.target.value);
    }

    const handleInputValueToChange = (event: any) => {
        setValueTo(event.target.value);
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.onChange(valueFrom, valueTo);
        }
    }

    return (
        <>
            <h4>{props.placeholder}</h4>
            <div className="grid grid-cols-2 gap-1">
                <input className="p-2" type="text" placeholder="From" value={valueFrom} onChange={handleInputValueFromChange} onKeyDown={handleKeyDown} />
                <input className="p-2" type="text" placeholder="To" value={valueTo} onChange={handleInputValueToChange} onKeyDown={handleKeyDown} />
            </div>
        </>
    );
}
