import { Globe, Globe2 } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#F4F3F1]">
            <div className="px-12 py-20 *:md:w-[22%] *:w-full md:gap-y-0 gap-y-12 flex md:flex-row flex-col justify-between">
                <section className="pb-4.25 space-y-5.75">
                    <h2 className="leading-7 text-[20px] font-serif">BETATRUS</h2>
                    <p className="font-manrope text-[#1A1C1A] text-[14px]">Crafting premium beauty experiences through ethically sourced hair and sophisticated design. Curated for the modern atelier.</p>
                </section>
                <section className="space-y-6">
                    <h2 className="font-manrope font-semibold text-primary text-[14px]">EXPLORE</h2>
                    <div className="font-manrope text-[#1A1C1A] text-[14px] list-none space-y-3">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Sustainabilty</li>
                        <li>Contact</li>
                    </div>
                </section>
                <section className="space-y-6">
                    <h2 className="font-manrope font-semibold text-primary text-[14px]">SUPPORT</h2>
                    <div className="font-manrope text-[#1A1C1A] text-[14px] list-none space-y-3">
                        <li>Shipping & Returns</li>
                        <li>FAQ</li>
                        <li>Terms of Service</li>
                    </div>
                </section>
                <section className="space-y-6">
                    <h2 className="font-manrope font-semibold text-primary text-[14px]">LEGAL</h2>
                    <p className="font-manrope text-[#1A1C1A] text-[14px] space-y-3">Privacy Policy</p>
                    <div className="flex gap-4 text-primary">
                        <Globe size={20} />
                        <Globe2 size={20} />
                    </div>
                </section>
            </div>
            <div className="py-8 flex justify-center">
                <p className="text-[12px] font-manrope text-[#1A1C1A] leading-4 tracking-[1.2px]">© 2026 BETATRUS. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
}

export default Footer;