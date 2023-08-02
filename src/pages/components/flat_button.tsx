interface FlatButtonProps {
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

export default function FlatButton(props: FlatButtonProps) {
    return (
        <button
            disabled={props.disabled}
            onClick={props.onClick}
            className={`transition-colors
            p-4 px-12
            rounded-md
            text-sky-800
            hover:text-sky-600
            ${props.className}
            `}>
            <b>{props.children}</b>
        </button>
    );
}
