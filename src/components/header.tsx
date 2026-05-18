import { Heart, Menu, Search, ShoppingBag, UserIcon } from "lucide-react"

const Header = () => {
    return (
        <header className="flex font-serif justify-between items-center-safe text-[#1A1C1A] h-20 text-general md:px-15 px-5">
            <section className="lg:hidden">
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
                <li className="md:block hidden"><UserIcon size={20} /></li>
            </section>
        </header>
    );
}

export default Header;