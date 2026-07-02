import { BadgeCheckIcon, Banknote, CheckCircle2, CreditCard, Grid3X3, Landmark, LockKeyhole, ShieldCheck, } from "lucide-react";
import Footer from "../components/footer";
import Header from "../components/header";
import wigImage from "../assets/images/wig.png";

const ShippingAddress = () => {
    return (
        <div>
            <div>
                <Header />
                <main className="px-5 pt-5 font-semibold font-manrope bg-[#FCF9F8]">
                    <section className="flex md:flex-row flex-col justify-between mb-12">
                        <div className="lg:w-[63%] md:w-[55%] w-full">
                            <section className="flex justify-between py-6 lg:px-6 px-2 bg-[#F6F3F2] border border-[#1c1b1b17] mb-12">
                                <p className="flex items-center leading-3.5 tracking-[0.6] text-[12px] gap-1"><ShieldCheck color="white" fill="blue" size={25} /> Escrow Protected</p>
                                <p className="flex items-center leading-3.5 tracking-[0.6] text-[12px] gap-1"><LockKeyhole color="white" fill="blue" size={25} /> Secure Encryption</p>
                                <p className="flex items-center leading-3.5 tracking-[0.6] text-[12px] gap-1"><Banknote color="white" fill="blue" size={25} /> Money-Back Guarantee</p>
                            </section>
                            <section className="mb-12">
                                <div className="flex items-center gap-2 mb-6">
                                    <p className="w-8 h-8 flex justify-center items-center rounded-xl bg-primary text-white">1</p>
                                    <p className="font-noto md:text-[24px] text-[20px] font-normal leading-7.5 tracking-[-0.6px]">SHIPPING ADDRESS</p>
                                </div>
                                <div className="lg:px-12 px-6 py-12 border border-[#1c1b1b15] bg-white">
                                    <form action="" className="flex flex-wrap gap-[2%] gap-y-7">
                                        <div className="w-full flex flex-col">
                                            <label htmlFor="fullName" className="text-[10px] font-bold">FULL NAME</label>
                                            <input type="text" name="fullName" id="fullName" placeholder="Chidi Okoro" className="border-b py-3 border-b-[#E5E2E1] placeholder:font-normal outline-0" />
                                        </div>
                                        <div className="w-[49%] flex flex-col">
                                            <label htmlFor="fullName" className="text-[10px] font-bold">PHONE NUMBER</label>
                                            <input type="text" name="fullName" id="fullName" placeholder="08028347475" className="border-b py-3 border-b-[#E5E2E1] placeholder:font-normal outline-0" />
                                        </div>
                                        <div className="w-[49%] flex flex-col">
                                            <label htmlFor="fullName" className="text-[10px] font-bold">EMAIL</label>
                                            <input type="text" name="fullName" id="fullName" placeholder="Chidi@example.com" className="border-b py-3 border-b-[#E5E2E1] placeholder:font-normal outline-0" />
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <label htmlFor="fullName" className="text-[10px] font-bold">STREET ADDRESS</label>
                                            <input type="text" name="fullName" id="fullName" placeholder="12 Victoria Island" className="border-b py-3 border-b-[#E5E2E1] placeholder:font-normal outline-0" />
                                        </div>
                                        <div className="w-[49%] flex flex-col">
                                            <label htmlFor="fullName" className="text-[10px] font-bold">CITY</label>
                                            <input type="text" name="fullName" id="fullName" placeholder="Lagos" className="border-b py-3 border-b-[#E5E2E1] placeholder:font-normal outline-0" />
                                        </div>
                                        <div className="w-[49%] flex flex-col">
                                            <label htmlFor="fullName" className="text-[10px] font-bold">STATE</label>
                                            <input type="text" name="fullName" id="fullName" placeholder="Lagos State" className="border-b py-3 border-b-[#E5E2E1] placeholder:font-normal outline-0" />
                                        </div>
                                    </form>
                                </div>
                            </section>
                            <section className="w-full">
                                <div className="flex items-center gap-2 mb-6">
                                    <p className="w-8 h-8 flex justify-center items-center rounded-xl bg-primary text-white">2</p>
                                    <p className="font-noto md:text-[24px] text-[20px] font-normal leading-7.5 tracking-[-0.6px]">ESCROW PAYMENT METHOD</p>
                                </div>
                                <div className="px-6 py-6 bg-[#b0242911] border border-[#b0242933]">
                                    <p className="font-bold leading-6.5 text-[#1c1b1b] md:text-[16px] text-[14px] flex gap-2"><ShieldCheck fill="blue" color="white" /> Secure Escrow Payment: Your ₦250,000 will be held safely by Betatrus until you confirm your order is perfect.</p>
                                </div>
                                <div className="w-full flex lg:flex-row flex-col gap-y-5 justify-between my-6">
                                    <section className="lg:w-[30%] w-full border-2 border-primary rounded-2xl px-6 py-6 space-y-2 flex flex-col justify-center relative">
                                        <div className="absolute top-2 right-3">
                                            <CheckCircle2 fill="blue" color="white" size={30} />
                                        </div>
                                        <CreditCard className="text-[#5A413F]" />
                                        <p className="leading-3.5 text-[12px] tracking-[0.6px] text-[#1c1b1b] font-semibold">PAY WITH CARD</p>
                                        <p className="text-[14px] leading-5 text-[#5A413F]">Visa, Mastercard, Verve</p>
                                    </section>
                                    <section className="lg:w-[30%] w-full border border-[#1c1b1b23] rounded-2xl px-6 py-6 space-y-2 flex flex-col justify-center">
                                        <Landmark className="text-[#5A413F]" />
                                        <p className="leading-3.5 text-[12px] tracking-[0.6px] text-[#1c1b1b] font-semibold">BANK TRANSFER</p>
                                        <p className="text-[14px] leading-5 text-[#5A413F]">Direct bank deposit</p>
                                    </section>
                                    <section className="lg:w-[30%] w-full border border-[#1c1b1b23] rounded-2xl px-6 py-6 space-y-2 flex flex-col justify-center">
                                        <Grid3X3 className="text-[#5A413F]" />
                                        <p className="leading-3.5 text-[12px] tracking-[0.6px] text-[#1c1b1b] font-semibold">USSD</p>
                                        <p className="text-[14px] leading-5 text-[#5A413F]">Mobile dial code</p>
                                    </section>
                                </div>
                                <div className="w-full lg:px-12 px-6 py-12 border border-[#1c1b1b1f]">
                                    <form action="" className="flex flex-wrap justify-between gap-y-6 w-full *:shrink-0">
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor="cardNumber" className="text-[10px] leading-3 font-bold tracking-[0.8px] text-[#5A413F]">CARD NUMBER</label>
                                            <input type="text" name="carNumber" id="cardNumber" placeholder="**** **** **** 4242" className="w-full bg-white py-3.25 px-4 border font-normal border-[#1c1b1b1c] text-[#6B7280]" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-[49%]">
                                            <label htmlFor="expiryDate" className="text-[10px] leading-3 font-bold tracking-[0.8px] text-[#5A413F]">EXPIRY DATE</label>
                                            <input type="text" name="expiryDate" id="expiryDate" placeholder="MM/YY" className="w-full bg-white py-3.25 px-4 border font-normal border-[#1c1b1b1c] text-[#6B7280]" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-[49%]">
                                            <label htmlFor="cvv" className="text-[10px] leading-3 font-bold tracking-[0.8px] text-[#5A413F]">CVV</label>
                                            <input type="text" name="cvv" id="cvv" placeholder="123" className="w-full font-normal bg-white py-3.25 px-4 border border-[#1c1b1b1c] text-[#6B7280]" />
                                        </div>
                                        <button className="bg-[#02102D] w-full text-white rounded-0 py-4 font-semibold text-[12px] tracking-[1.2px] leading-[14.4px]">CONFIRM 250,000 ESCROW PAYMENT</button>
                                    </form>
                                </div>
                            </section>
                        </div>
                        <div className="lg:w-[35%] md:w-[43%] w-full">
                            <section className="w-full py-12 lg:px-12 px-5 mb-6 border border-[#1c1b1b21] bg-white h-fit">
                                <h2 className="text-[#1C1B1B] font-inter text-[24px] font-medium leading-[31.2px] tracking-[-0.6px]">ORDER SUMMARY</h2>
                                <section className="space-y-6 mb-6 py-6">
                                    <div className="flex gap-4">
                                        <img src={wigImage} alt="" className="w-20 h-20" />
                                        <div className="w-[calc(100%-80px)]">
                                            <p className="text-[16px] font-bold leading-5 text-[#1C1B1B]">HD Lace Frontal Wig - 24"</p>
                                            <p className="text-[16px] font-normal leading-6 text-[#5A413F]">Natural Black / 180% Density</p>
                                            <p className="text-[16px] font-bold leading-6 text-[#1C1B1B]">₦185,000</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <img src={wigImage} alt="" className="w-20 h-20" />
                                        <div className="w-[calc(100%-80px)]">
                                            <p className="text-[16px] font-bold leading-5 text-[#1C1B1B]">HD Lace Frontal Wig - 24"</p>
                                            <p className="text-[16px] font-normal leading-6 text-[#5A413F]">Natural Black / 180% Density</p>
                                            <p className="text-[16px] font-bold leading-6 text-[#1C1B1B]">₦185,000</p>
                                        </div>
                                    </div>
                                </section>
                                <section className="pt-6 border-t border-t-[#1c1b1b11] *:flex *:justify-between text-[#5A413F]">
                                    <div className="pb-2">
                                        <p className="text-[16px] font-normal leading-6">Subtotal</p>
                                        <p className="text-[16px] font-normal leading-6">250,000</p>
                                    </div>
                                    <div className="pb-2">
                                        <p className="text-[16px] font-normal leading-6">Shipping (Express)</p>
                                        <p className="text-[16px] font-bold text-primary leading-6">FREE</p>
                                    </div>
                                    <div className="pb-2 border-b border-b-[#1c1b1b11]">
                                        <p className="text-[16px] font-normal leading-6">Escrow Service Fee</p>
                                        <p className="text-[16px] font-bold text-primary leading-6">COVERED</p>
                                    </div>
                                    <div className="pt-4">
                                        <p className="text-[12px] font-semibold leading-[14.4px] tracking-[0.6px] text-[#1C1B1B]">TOTAL AMOUNT</p>
                                        <p className="text-[24px] font-medium leading-[31.2px] text-primary font-inter">₦250,000</p>
                                    </div>
                                </section>
                            </section>
                            <section className="flex gap-2 items-start px-6 py-6 w-full h-fit bg-[#e5e2e125] border border-[#1c1b1b10]">
                                <BadgeCheckIcon size={30} className="text-[#C7C6C4]" />
                                <div>
                                    <p className="font-semibold text-[12px] leading-[14.4px] tracking-[0.6px] text-[#1C1B1B]">BETATRUS VERIFIED</p>
                                    <p className="font-normal text-[14px] leading-5.25 text-[#5A413F]">These vendors have passed our 12-point quality and authenticity check.</p>
                                </div>
                            </section>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default ShippingAddress;