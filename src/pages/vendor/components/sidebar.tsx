import { BadgeCheck, LayoutDashboard, Package2, Settings, WalletCards } from "lucide-react";

export const SideBar = () => {
    return (
        <aside className="font-manrope text-light bg-primary p-3 w-full h-screen border-r border-r-gray-300">
            <section className="mb-6">
                <h1 className="font-bodoni md:text-[24px] text-[18px] leading-[31.2px] text-[#1C1B1B] font-medium">Betatrus Vendor</h1>
                <p className="text-[14px] leading-5.25">Chisom Premium Hair</p>
            </section>
            <section>
                <ul className="*:px-4 *:py-3 *:flex *:gap-3 *:items-center">
                    <li className="text-[16px] leading-6"><LayoutDashboard size={20} /> Dashboard</li>
                    <li className="text-[16px] leading-6"><Package2 size={20} /> Products</li>
                    <li className="text-[16px] leading-6"><WalletCards size={20} /> Sales</li>
                    <li className="text-[16px] leading-6"><BadgeCheck size={20} /> Verification</li>
                    <li className="text-[16px] leading-6"><Settings size={20} /> Settings</li>
                </ul>
            </section>
        </aside>
    );
}