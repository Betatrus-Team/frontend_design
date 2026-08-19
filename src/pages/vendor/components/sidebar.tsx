import { BadgeCheck, LayoutDashboard, Package2, Settings, WalletCards } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

export const SideBar = () => {
    const active = useLocation().pathname.split("/").pop();
    console.log(active);
    return (
        <aside className="font-manrope text-light bg-[#FFF5F5] p-3 w-full h-screen border-r border-r-gray-300">
            <section className="mb-6">
                <h1 className="font-bodoni md:text-[24px] text-[18px] leading-[31.2px] text-[#1C1B1B] font-medium">Betatrus Vendor</h1>
                <p className="text-[14px] leading-5.25">Chisom Premium Hair</p>
            </section>
            <section>
                <ul>
                    <NavLink to="./vendor/" end className={({ isActive }) => `px-4 py-3 text-[16px] leading-6 flex gap-3 items-center ${isActive ? "vendor-active" : "" }`}><LayoutDashboard size={20} /> Dashboard</NavLink>
                    <NavLink to="./vendor/products" className={({ isActive }) => `px-4 py-3 text-[16px] leading-6 flex gap-3 items-center ${isActive ? "vendor-active" : "" }`}><Package2 size={20} /> Products</NavLink>
                    <NavLink to="./vendor/sales"className={({ isActive }) => `px-4 py-3 text-[16px] leading-6 flex gap-3 items-center ${isActive ? "vendor-active" : "" }`}><WalletCards size={20} /> Sales</NavLink>
                    <NavLink to="./vendor/verification"className={({ isActive }) => `px-4 py-3 text-[16px] leading-6 flex gap-3 items-center ${isActive ? "vendor-active" : "" }`}><BadgeCheck size={20} /> Verification</NavLink>
                    <NavLink to="./vendor/settings"className={({ isActive }) => `px-4 py-3 text-[16px] leading-6 flex gap-3 items-center ${isActive ? "vendor-active" : "" }`}><Settings size={20} /> Settings</NavLink>
                </ul>
            </section>
        </aside>
    );
}