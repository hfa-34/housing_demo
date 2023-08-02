interface PrimaryButtonProps {
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

export default function PrimaryButton(props: PrimaryButtonProps) {
    return (
        <button
            disabled={props.disabled}
            onClick={props.onClick}
            className={`
            bg-sky-600 hover:bg-sky-500 transition-colors
            p-4 px-12
            rounded-md
            text-white
            ${props.className}
            `}>
            <b>{props.children}</b>
        </button>
    );
}
