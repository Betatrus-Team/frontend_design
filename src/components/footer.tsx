const Footer = () => {
    return (
        <footer className="bg-[#F4F3F1]">
            <div className="lg:px-12 md:px-8 px-12 pt-10 *:md:w-[22%] *:w-full md:gap-y-0 gap-y-12 flex md:flex-row flex-col justify-between mb-20">
                <section className="pb-4.25 space-y-5.75">
                    <h2 className="leading-7 text-[20px]">BETATRUS</h2>
                    <p className="font-manrope text-[#1A1C1A] text-[14px]">Defining the standard for the modern hair atelier through craftsmanship and editorial excellence.</p>
                </section>
                <section className="space-y-6">
                    <h2 className="font-manrope font-bold leading-4 text-primary text-[12px] tracking-[1.2px]">SHOP SELECTION</h2>
                    <div className="font-manrope text-[#1A1C1A] leading-5 tracking-[0.35px] text-[14px] list-none space-y-3">
                        <li>Shop Selection</li>
                        <li>Curly</li>
                        <li>Frontal</li>
                    </div>
                </section>
                <section className="space-y-6">
                    <h2 className="font-manrope font-semibold text-primary text-[14px] tracking-[1.2px]">THE ATELIER</h2>
                    <div className="font-manrope text-[#1A1C1A] text-[14px] leading-5 tracking-[0.35px] list-none space-y-3">
                        <li>About Us</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                    </div>
                </section>
                <section className="space-y-6">
                    <h2 className="font-manrope font-semibold text-primary text-[14px] tracking-[1.2px]">NEWSLETTER</h2>
                    <div className="flex flex-col items-start gap-5">
                        <input type="email" name="email" id="email" placeholder="Email Address" className="border border-[#D4C3BE] px-4 py-2.5 w-full" />
                        <button>Subscribe</button>
                    </div>
                </section>
            </div>
            <div className="px-12 py-8 flex md:flex-row flex-col justify-between items-center gap-y-5 md:text-[16px] text-[14px] border-t border-t-[#D4C3BE]">
                <p className="font-manrope text-[#1A1C1A] leading-4 tracking-[1.2px]">© 2026 BETATRUS. Crafted for the Modern Atelier.</p>
                <div className="flex gap-5">
                    <p>Instagram</p>
                    <p>Pintrest</p>
                    <p>Twitter</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;