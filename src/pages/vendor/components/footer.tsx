const Footer = () => {
    return (
        <footer className="bg-[#F4F3F1]">
            <div className="lg:px-12 md:px-8 px-12 pt-10 *:md:w-[22%] *:w-full md:gap-y-0 gap-y-12 flex md:flex-row flex-col justify-between mb-12">
                <section className="font-manrope pb-4.25 space-y-5.75">
                    <h2 className="leading-3.5 tracking-[0.6px] font-semibold text-[12px]">ESCROW PROTECTION</h2>
                    <p className="text-[#1A1C1A] leading-5.25 text-light text-[14px]">Your data is only used for verification and is protected by industry-leading escrow protocols.</p>
                </section>
                <section className="space-y-6">
                    <h2 className="leading-3.5 tracking-[0.6px] font-semibold text-[12px]">DIRECT SUPPORT</h2>
                    <p className="text-[#1A1C1A] leading-5.25 text-light text-[14px]">
                        Need help with your documents? Our dedicated vendor support team is available 24/7 via the help center.
                    </p>
                </section>
                <section className="space-y-6">
                    <h2 className="leading-3.5 tracking-[0.6px] font-semibold text-[12px]">VERIFIED VENDOR BADGE</h2>
                    <p className="text-[#1A1C1A] leading-5.25 text-light text-[14px]">
                        Upon approval, you will receive the "Betatrus Verified" badge, increasing buyer trust by up to 85%.
                    </p>
                </section>
            </div>
            <div className="px-12 py-8 flex md:flex-row flex-col justify-between items-center gap-y-5 text-[10px] leading-4 tracking-[0.8px] border-t border-t-[#D4C3BE] font-manrope">
                <p>© 2026 BETATRUS GLOBAL. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-5">
                    <p>TERMS</p>
                    <p>PRIVACY</p>
                    <p>COOKIES</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;