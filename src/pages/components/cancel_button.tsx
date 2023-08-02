interface CancelProps {
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

export default function Cancel(props: CancelProps) {
    return (
        <button
            disabled={props.disabled}
            onClick={props.onClick}
            className={`
            bg-slate-200 hover:bg-slate-100 transition-colors
            p-4 px-12
            rounded-md
            ${props.className}
            `}>
            <span>{props.children}</span>
        </button>
    );
}
