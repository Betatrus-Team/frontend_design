import { ArrowLeft, Award, CreditCard, Grid3X3Icon, Landmark, LockKeyhole, QrCode, RefreshCcwDotIcon, ShieldCheck } from "lucide-react";
import Footer from "../components/footer";
import Header from "../components/header";
import Button from "../components/button";
import myWig from "../assets/images/wig.png";

const Checkout = () => {
    return (
        <div>
            <Header />
            <main className="w-full px-10 py-20 font-manrope">
                <div className="flex lg:flex-row flex-col gap-16 text-[#1a1c1a]">
                    <section className="space-y-12 lg:w-[60%] w-full">
                        <div>
                            <h1 className="text-[48px] leading-12 tracking-[-1.2px] font-noto font-bold">Select Payment Method</h1>
                            <p className="text-[16px] leading-6 text-[#504441]">Choose your preferred way to complete your purchase at our atelier.</p>
                        </div>
                        <div className="w-full space-y-4">
                            <label className="flex px-6 py-6 w-full gap-4 shadow-lg items-center cursor-pointer rounded-2xl">
                                <input type="radio" name="paymentMethod" className="peer hidden" />

                                <div className="w-5 h-5 rounded-full border-2 peer-checked:*:bg-white peer-checked:*:block border-gray-400 flex items-center justify-center peer-checked:border-0 peer-checked:bg-[#0000FF]">
                                <div className="w-[7.5px] h-[7.5px] rounded-full hidden"></div>
                                </div>

                                <div className="flex justify-between items-start w-[calc(100%-38px)]">
                                    <div>
                                        <h3 className="font-semibold text-[18px] leading-7">Card Payment</h3>
                                        <p className="text-[14px] text-[#504441] leading-5">Visa, Mastercard, Verve</p>
                                    </div>
                                    <CreditCard className="text-[#1a1c1ab4]" />
                                </div>
                            </label>      
                            <div className="px-6 py-6 w-full shadow-lg rounded-2xl">
                                <label className="flex items-center gap-4 cursor-pointer">
                                    <input type="radio" name="paymentMethod" className="peer hidden" />

                                    <div className="w-5 h-5 rounded-full border-2 peer-checked:*:bg-white peer-checked:*:block border-gray-400 flex items-center justify-center peer-checked:border-0 peer-checked:bg-[#0000FF]">
                                    <div className="w-[7.5px] h-[7.5px] rounded-full hidden"></div>
                                    </div>

                                    <div className="flex justify-between items-start w-[calc(100%-38px)]">
                                        <div>
                                            <h3 className="font-semibold text-[18px] leading-7">Bank Transfer</h3>
                                            <p className="text-[14px] text-[#504441] leading-5">Instant confirmation via bank app</p>
                                        </div>
                                        <Landmark className="text-[#1a1c1ab4]" />
                                    </div>
                                </label>                            
                                <div className="w-full mt-4 rounded-xl pl-9.5 py-5 bg-[#F4F3F1]">
                                    <p className="text-[14px] leading-5 font-medium text-[#504441]">Trustora Atelier Ltd.</p>
                                    <p className="text-[14px] leading-5 font-medium">GTBank: 0123456789</p>
                                    <p className="text-[14px] leading-5 font-medium">Reference: TR-8829</p>
                                </div>
                            </div>                      
                            <label className="flex px-6 py-6 w-full gap-4 shadow-lg items-center cursor-pointer rounded-2xl">
                                <input type="radio" name="paymentMethod" className="peer hidden" />

                                <div className="w-5 h-5 rounded-full border-2 peer-checked:*:bg-white peer-checked:*:block border-gray-400 flex items-center justify-center peer-checked:border-0 peer-checked:bg-[#0000FF]">
                                <div className="w-[7.5px] h-[7.5px] rounded-full hidden"></div>
                                </div>

                                <div className="flex justify-between items-start w-[calc(100%-38px)]">
                                    <div>
                                        <h3 className="font-semibold text-[18px] leading-7">USSD</h3>
                                        <p className="text-[14px] text-[#504441] leading-5">Select your bank to dial code</p>
                                    </div>
                                    <Grid3X3Icon className="text-[#1a1c1ab4]" />
                                </div>
                            </label>                            
                            <label className="flex px-6 py-6 w-full gap-4 shadow-lg items-center cursor-pointer rounded-2xl">
                                <input type="radio" name="paymentMethod" className="peer hidden" />

                                <div className="w-5 h-5 rounded-full border-2 peer-checked:*:bg-white peer-checked:*:block border-gray-400 flex items-center justify-center peer-checked:border-0 peer-checked:bg-[#0000FF]">
                                <div className="w-[7.5px] h-[7.5px] rounded-full hidden"></div>
                                </div>

                                <div className="flex justify-between items-start w-[calc(100%-38px)]">
                                    <div>
                                        <h3 className="font-semibold text-[18px] leading-7">Pay with QR</h3>
                                        <p className="text-[14px] text-[#504441] leading-5">Scan with your banking app</p>
                                    </div>
                                    <QrCode className="text-[#1a1c1ab4]" />
                                </div>
                            </label>                            
                        </div>
                        <div className="flex items-center-safe gap-6 pb-4">
                            <Button label="Pay ₦422,500" extra="px-12 py-4 bg-[#02102D] text-white" />
                            <p className="flex items-center gap-1 text-[16px] leading-6"><ArrowLeft /> Back to Shipping</p>
                        </div>
                        <div className="text-[12px] font-bold leading-4 tracking-[1.2px] text-[#1a1c1a77] flex gap-8 *:flex *:gap-2 *:items-center">
                            <p><ShieldCheck className="w-[13.33px] h-[17.5px]" /> SECURE SSL</p>
                            <p><LockKeyhole className="w-[13.33px] h-[17.5px]" /> ENCRYPTED</p>
                            <p><RefreshCcwDotIcon className="w-[13.33px] h-[17.5px]" /> PCI-DSS</p>
                        </div>
                    </section>
                    <section className="lg:w-">
                        <div className="bg-[#F4F3F1] space-y-8 p-10 rounded-2xl">
                            <h2 className="font-bold text-6 font-noto leading-8">Order Summary</h2>
                            <div className="flex items-center gap-3 pb-8 border-b border-b-[#d4c3be5d]">
                                <div className="w-23 h-20 object-fit">
                                    <img src={myWig} className="w-full h-full" />
                                </div>
                                <div>
                                    <p className="font-noto text-[18px] leading-[22.5px]">Silk-press Straight Frontal Wig</p>
                                    <p className="font-manrope text-[14px] leading-4 text-[#504441]">24 inches / Natural Black</p>
                                    <p className="font-manrope text-[16px] leading-6 font-bold">₦420,000</p>
                                </div>
                            </div>
                            <div className="space-y-3 pb-8 border-b border-b-[#d4c3be5d]">
                                <div className="flex justify-between">
                                    <p className="text-[16px] font-manrope leading-6">Subtotal</p>
                                    <p className="text-[16px] font-medium font-manrope leading-6">₦420,000</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-[16px] font-manrope leading-6">Shipping</p>
                                    <p className="text-[16px] font-medium font-manrope leading-6">₦2,000</p>
                                </div>
                            </div>
                            <div className="pt-6">
                                <p className="font-manrope text-[14px] text-[#504441] leading-5 font-bold tracking-[1.4px]">TOTAL AMOUNT</p>
                                <div className="flex justify-between">
                                    <p className="font-noto text-[30px] leading-7.5 font-bold">₦422,500</p>
                                    <p className="text-[#504441] text-[12px] leading-4 font-manrope">VAT included</p>
                                </div>
                            </div>
                            <div className="bg-[#50444115] text-[#504441] font-manrope text-[12px] leading-4.75 flex gap-3 p-4 rounded-xl">
                                <Award className="text-primary" />
                                <p>Every purchase at Trustora is backed by our authenticity guarantee and premium delivery service.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Checkout;