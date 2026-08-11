import { HelpCircle, User } from "lucide-react"

export const VendorHeader = ({title = "Betatrus"} : {title? : string}) => {
    return (
        <header className="flex justify-between h-15 px-5 py-3 border-b border-b-gray-100 items-center">
            <h1 className="font-bodoni md:text-[32px] text-[22px] font-medium leading-[38.4px] tracking-[-0.8px] italic">{title}</h1>
            <div className="flex gap-3 *:w-5 *:h-5">
                <HelpCircle />
                <User />
            </div>
        </header>
    );
}
