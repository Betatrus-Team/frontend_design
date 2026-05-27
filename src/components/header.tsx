import { Heart, Menu, Search, ShoppingBag, UserIcon } from "lucide-react"
import { useState } from "react";

const Header = () => {
    const [menu, toggleMenu] = useState<boolean>(false);
    const [loggedIn, login] = useState<boolean | null>(null);
    return (
        <div className="font-serif text-[#1A1C1A]">
            <header className="flex justify-between items-center-safe h-20 md:px-15 px-5 shadow-xl">
                <section className="lg:hidden" onClick={() => toggleMenu(!menu)}>
                    <Menu />
                </section>
                <section>
                    <p className="text-[1.5rem] leading-8 tracking-[4.8px]">BETATRUS</p>
                </section>
                <nav className="gap-8 text-[1.1rem] list-none *:text-[#1A1C1A] font-light leading-6 tracking-[0.4px] lg:flex hidden">
                    <li>Home</li>
                    <li>Wigs</li>
                    <li>Hair Care</li>
                    <li>Eyelashes</li>
                    <li>Nails</li>
                </nav>
                <section className="flex gap-5 list-none">
                    <li><Search size={20} /></li>
                    <li className="md:block hidden"><Heart size={20} /></li>
                    <li className="md:block hidden"><ShoppingBag size={20} /></li>
                    <li className={`${loggedIn ? "md:block hidden" : "hidden"}`}><UserIcon size={20} /></li>
                    <li className={`${!loggedIn ? "md:block hidden" : "hidden"}`} onClick={() => login(true)}>Login/Sign Up</li>
                </section>
            </header>
            <section className={` ${menu ? "block" : "hidden"} `}>
                <nav className="gap-8 text-[1.1rem] list-none *:text-[#1A1C1A] font-light leading-6 tracking-[0.4px] lg:hidden block fixed top-21 z-1000 left-0 bg-white px-10 py-5 rounded-2xl space-y-6">
                    <p className="font-serif text-[18px] leading-8 tracking-[4.8px]">BETATRUS</p>
                    <li>Home</li>
                    <li>Wigs</li>
                    <li>Hair Care</li>
                    <li>Eyelashes</li>
                    <li>Nails</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Login/Sign up</li>
                </nav>
            </section>
            <div className={`w-full h-[calc(100vh-80px)] bg-black opacity-35 top-20 z-999 fixed left-0 ${menu ? "block" : "hidden"}`} onClick={() => toggleMenu(!menu)} />
        </div>
    );
}

export default Header;