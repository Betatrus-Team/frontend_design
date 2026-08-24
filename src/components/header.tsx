import { Heart, Menu, Search, ShoppingBag, UserIcon } from "lucide-react";
import { useState } from "react";
import logo from "../assets/images/BETATRUS 1.1 1.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [menu, toggleMenu] = useState<boolean>(false);
    const [loggedIn, _login] = useState<boolean | null>(null);
    return (
        <div className="font-serif text-[#1A1C1A]">
            <header className="flex justify-between items-center-safe h-20 lg:px-15 md:px-10 px-5 shadow-xl">
                <section className="lg:hidden" onClick={() => toggleMenu(!menu)}>
                    <Menu />
                </section>
                <section>
                    <img src={logo} alt="Betatrus Logo" />
                </section>
                <nav className="gap-8 text-[1.1rem] list-none *:text-[#1A1C1A] font-light leading-6 tracking-[0.4px] lg:flex hidden">
                    <NavLink to="../"><li>Home</li></NavLink>
                    <NavLink to="../categories/wigs"><li>Wigs</li></NavLink>
                    <NavLink to="../categories/hair_care"><li>Hair Care</li></NavLink>
                    <NavLink to="../categories/eyelashes"><li>Eyelashes</li></NavLink>
                    <NavLink to="../categories/nails"><li>Nails</li></NavLink>
                </nav>
                <section className="flex md:gap-5 list-none">
                    <li><Search size={20} /></li>
                    <NavLink to="../favourites"><li className="md:block hidden"><Heart size={20} /></li></NavLink>
                    <NavLink to="../cart"><li className="md:block hidden"><ShoppingBag size={20} /></li></NavLink>
                    <NavLink to="../"><li className={`${loggedIn ? "md:block hidden" : "hidden"}`}><UserIcon size={20} /></li></NavLink>
                    <NavLink to="../sign_in"><li className={`${!loggedIn ? "md:block hidden" : "hidden"}`}>Login/Sign Up</li></NavLink>
                </section>
            </header>
            <section className={` ${menu ? "block" : "hidden"} `}>
                <nav className="flex flex-col gap-1 text-[1.1rem] list-none *:text-[#1A1C1A] font-light leading-6 tracking-[0.4px] lg:hidden fixed top-21 z-1000 left-0 bg-white px-10 py-5 rounded-2xl space-y-6">
                    <NavLink to="../"><li>Home</li></NavLink>
                    <NavLink to="../categories/wigs"><li>Wigs</li></NavLink>
                    <NavLink to="../categories/hair_care"><li>Hair Care</li></NavLink>
                    <NavLink to="../categories/eyelashes"><li>Eyelashes</li></NavLink>
                    <NavLink to="../categories/nails"><li>Nails</li></NavLink>
                    <NavLink to="../cart" className="md:hidden"><li>Cart</li></NavLink>
                    <NavLink to="../favourites" className="md:hidden"><li>Wishlist</li></NavLink>
                    <NavLink to="../sign_in" className="md:hidden"><li>Login/Sign up</li></NavLink>
                </nav>
            </section>
            <div className={`w-full h-[calc(100vh-80px)] bg-black opacity-35 top-20 z-999 fixed left-0 ${menu ? "block" : "hidden"}`} onClick={() => toggleMenu(!menu)} />
        </div>
    );
}

export default Header;