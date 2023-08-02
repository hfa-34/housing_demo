import { MouseEventHandler } from "react";

interface FilterButtonProps {
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
    value: any;
    onClick: (newValue?: any) => void;
}

export default function FilterButton(props: FilterButtonProps) {
    return (
        <button
            disabled={props.disabled}
            onClick={_ => props.onClick(props.value)}
            className={`
            bg-white hover:bg-sky-300
            p-1
            rounded-md
            text-black
            ${props.className}
            `
            }>
            {props.value}
        </button >
    );
}
