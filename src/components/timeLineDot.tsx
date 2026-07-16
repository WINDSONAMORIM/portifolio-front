interface ItemListProps {
    active: boolean;
    onClick: () => void;
}

export const TimeLineDot = ({ active, onClick }: ItemListProps) => {
    return (
        <button
            onClick={onClick}
            className="group relative flex h-6 w-6 items-center justify-center"
        >
            <span
                className={`
                    absolute h-8 w-8 rounded-full
                    bg-blue-500/30 blur-md
                    transition-all duration-300
                    group-hover:scale-150
                    ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                `}
            />

            <span
                className={`
                    relative flex h-6 w-6 items-center justify-center rounded-full
                    border-2 transition-all duration-300
                    ${
                        active
                            ? "border-blue-400 bg-blue-500 scale-110"
                            : "border-slate-500 bg-slate-800 group-hover:border-blue-400 group-hover:scale-110"
                    }
                `}
            >
                <span
                    className={`
                        h-2.5 w-2.5 rounded-full transition-all duration-300
                        ${
                            active
                                ? "bg-white"
                                : "bg-slate-400 group-hover:bg-blue-300"
                        }
                    `}
                />
            </span>
        </button>
    );
};