type AuthInputProps = {
    label : string,
    atrribute : string,
    type : string,
    placeholder : string,
    extra? : string
}

const AuthInput = ({ label, atrribute, type, placeholder, extra } : AuthInputProps) => {
    return (
        <div className="flex flex-col gap-2.75">
            <label htmlFor={atrribute} className="text-[#504441] font-manrope text-[17.81px] leading-[24.4px]">{label}</label>
            <input type={type} name={atrribute} id={atrribute} placeholder={placeholder} className={`w-full bg-[#F4F3F1] px-[21.62px] py-[20.35px] text-[20.35px] font-manrope ${extra}`} />
        </div>
    );
}

export default AuthInput;