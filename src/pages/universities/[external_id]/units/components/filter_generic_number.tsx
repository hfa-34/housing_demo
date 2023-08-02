import { useState, useEffect } from "react";
import FilterButton from "~/pages/components/filter_button";


interface FilterGenericNumberProps {
    placeholder: string;
    value?: number;
    options: number[];
    onChange: Function;
}

export default function FilterGenericNumber(props: FilterGenericNumberProps) {
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        setValue(props.value)
    }, [props]);

    const select = (newValue?: number) => {
        setValue(newValue)
        props.onChange(newValue)
    }

    const deselect = () => {
        setValue(undefined)
        props.onChange()
    }

    const itemList = props.options.map((number) =>
        <FilterButton key={number.toString()} value={number} onClick={newValue => select(newValue)}>{number}</FilterButton>
    );

    return (
        <>
            <h4>{props.placeholder}</h4>
            <div className="grid grid-cols-4 gap-1">
                {value != null ?
                    <FilterButton value={value} onClick={deselect}></FilterButton>
                    :
                    itemList
                }
            </div>
        </>
    );
}
