import { BadgeCheck, LayoutDashboard, Package2, Settings, WalletCards, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useToggle } from "../context/toggle_context";

export const SideBar = () => {
    const { toggleMenu } = useToggle();
    return (
        <aside className="font-manrope text-light bg-[#FFF5F5] p-3 w-full h-screen border-r border-r-gray-300">
            <section className="mb-6 flex justify-between items-start">
                <div>
                    <h1 className="font-bodoni md:text-[24px] text-[18px] leading-[31.2px] text-[#1C1B1B] font-medium">Betatrus Vendor</h1>
                    <p className="text-[14px] leading-5.25">Chisom Premium Hair</p>
                </div>
                <button className="text-primary" onClick={() => toggleMenu(false)}>
                    <X />
                </button>
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