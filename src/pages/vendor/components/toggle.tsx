type ToggleComponentProp = {
    comparison : boolean,
    onclick : () => void
}

export const Toggle = ({ comparison, onclick } : ToggleComponentProp) => {
    return (
        <div className={`w-11 h-6 rounded-full flex items-center-safe px-px ${comparison ? "bg-primary" : "bg-gray-400"}`} onClick={onclick}>
            <div className={`bg-white h-5 w-5 rounded-full transform transition-transform ${comparison ? "translate-x-full" : "translate-x-0"}`} />
        </div>
    )
}