interface UniversityCardProps {
    imageUrl: string;
    name: string;
}

export default function UniversityCard(props: UniversityCardProps) {
    return (
        <button className="
        flex
        rounded-md
        overflow-hidden
        relative
        hover:shadow-xl
        transition-all
        ">
            <img
                className="
                w-fit
                h-fit
                hover:brightness-110
                transition-all
                "
                src={props.imageUrl}
            >

            </img>

            <div className="
            pointer-events-none
            bg-slate-50/70
            absolute
            top-0
            left-0
            text-xl
            flex
            justify-center
            px-4
            py-2
            ">
                {props.name}
            </div>

            <div className="
            pointer-events-none
            bg-sky-600
            rounded-full
            text-white
            absolute
            bottom-5
            right-5
            text-xl
            flex
            justify-center
            px-4
            py-2
            ">
                <b>Explore</b>
            </div>
        </button>
    );
}
