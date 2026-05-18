type ButtonProps = {
    extra : string,
    label : string
}
const Button = ({ extra, label }: ButtonProps) => {
    return (
        <button className={`px-5 py-3 rounded-full text-manrope font-semibold ${extra}`}>
            {label}
        </button>
    );
}

export default Button;