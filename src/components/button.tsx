type ButtonProps = {
    extra : string,
    label : string,
    onclick? : () => void
}
const Button = ({ extra, label, onclick }: ButtonProps) => {
    return (
        <button className={`px-5 py-3 rounded-full text-manrope font-semibold ${extra}`} onClick={onclick}>
            {label}
        </button>
    );
}

export default Button;