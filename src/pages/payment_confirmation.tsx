import { Check } from "lucide-react";
import Footer from "../components/footer";
import Header from "../components/header";
import myWig from "../assets/images/wig.png";
import Button from "../components/button";
import { PageTitle } from "../components/title";

const PaymentConfirmation = () => {
    return (
        <div>
            <PageTitle title={"BETATRUS | CONFIRM PAYMENT"} />
            <Header />
            <main className="py-10 w-full flex gap-5 flex-col items-center">
                <section className="lg:w-[60%] md:w-[80%] py-10 flex flex-col items-center">
                    <div className="bg-[#0000ff15] w-fit h-fit p-3 rounded-full">
                        <div className="bg-primary w-fit h-fit p-1 rounded-full">
                            <Check color="white" size={30} />
                        </div>
                    </div>
                    <h1 className="font-noto md:text-[60px] text-[40px] leading-15 text-center mb-2">Thank you for your <br/>purchase.</h1>
                    <p className="font-manrope md:text-[18px] text-[16px] leading-7 mb-5 text-center">Order Confirmed! Your curated selection is being prepared.</p>
                </section>
                <section className="lg:w-[60%] w-[90%] pb-10 flex md:flex-row flex-col items-start gap-6">
                    <section className="bg-[#F4F3F1] rounded-2xl md:w-fit w-full lg:px-10 py-10 px-5">
                        <div className="space-y-2 border-b border-b-[#d4c3be5d] pb-8">
                            <div>
                                <p className="font-manrope text-[12px] leading-4 tracking-[2.4px] text-[#504441]">ORDER NUMBER</p>
                                <p className="font-noto text-[24px] leading-8">#TR-8829</p>
                            </div>
                            <div className="pt-6">
                                <p className="font-manrope text-[12px] leading-4 tracking-[2.4px] text-[#504441]">ESTIMATED DELIVERY</p>
                                <p className="font-manrope text-[18px] leading-7">3-5 business days</p>
                            </div>
                        </div>
                        <div className="pt-6">
                            <p className="font-manrope text-[14px] leading-5.5 text-[#504441]">A confirmation email has been sent to <b>curator@trustora.com</b> </p>
                        </div>
                    </section>
                    <section className="bg-[#F4F3F1] space-y-8 lg:px-10 py-10 px-5 rounded-2xl md:w-fit w-full">
                        <h2 className="text-[12px] font-manrope text-[#504441] leading-4 tracking-[2.4px]">SUMMARY</h2>
                        <div className="flex items-center gap-3 pb-8 border-b border-b-[#d4c3be5d]">
                            <div className="w-24 h-20">
                                <img src={myWig} className="w-full h-full object-contain" />
                            </div>
                            <div className="space-y-1">
                                <p className="font-noto text-[18px] leading-[22.5px]">Silk-press Straight Frontal Wig</p>
                                <p className="font-manrope text-[14px] leading-4 text-[#504441]">22 inches • Natural Black</p>
                                <p className="font-manrope text-[16px] leading-6 font-bold">₦420,000</p>
                            </div>
                        </div>
                        <div className="space-y-3 font-manrope pb-8">
                            <div className="flex justify-between">
                                <p className="text-[16px] leading-6">Subtotal</p>
                                <p className="text-[14px] font-medium leading-6">₦420,000</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-[16px] leading-6">Shipping</p>
                                <p className="text-[14px] font-medium leading-6">₦2,000</p>
                            </div>
                            <div className="font-noto flex justify-between items-center">
                                <p className="md:text-[18px] text-[16px] leading-7">TOTAL</p>
                                <p className="md:text-[18px] font-bold text-[16px] leading-7.5">₦422,500</p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="flex flex-col items-center gap-6 pb-10">
                    <Button label="CONTINUE SHOPPING" extra="md:px-10 px-5 bg-primary py-5 text-white rounded-full text-[14px] font-bold" />
                    <p className="text-[14px] leading-5 font-manrope tracking-[1.4px]">TRACK MY ORDER</p>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default PaymentConfirmation;