import Footer from "../components/footer";
import Header from "../components/header";
import WigImage from "../assets/images/wig.png";
import { Heart, ShieldCheck, ShoppingBag, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PageTitle } from "../components/title";

const ShoppingCart = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col">
            <PageTitle title={"BETATRUS | CART"} />
            <Header />
            <main className="flex-1 pt-20 px-6 font-manrope">
                <section className="space-y-4 mb-12">
                    <h1 className="font-noto font-bold lg:text-[48px] md:text-[38px] text-[30px] text-[#1A1C1A] leading-15 tracking-[-1.5px]">Your Shopping Bag</h1>
                    <p className="md:text-[18px] text-[16px] leading-7 text-[#827470]">2 items carefully curated for your beauty ritual.</p>
                </section>
                <section className="flex gap-y-10 md:flex-row flex-col justify-between text-[#1a1c1a] mb-12">
                    <div className="lg:w-[60%] md:w-[55%] w-full space-y-12">
                        <div className="w-full flex gap-[5%] pb-12 border-b border-b-[#d4c3be71]">
                            <div className="h-45 overflow-hidden w-35 rounded-xl">
                                <img src={WigImage} alt="" className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="flex flex-col gap-3 w-[calc(100%-131.2px)]">
                                <div className="flex md:flex-row flex-col justify-between">
                                    <p className="font-noto md:text-[24px] text-[18px] leading-8 text-[#1a1c1a]">Silky Straight Virgin Wig</p>
                                    <p className="font-noto md:text-[20px] text-[16px] text-[#1a1c1a] leading-7">₦185,000</p>
                                </div>
                                <p className="text-[#827470] md:text-[14px] text-[12px] leading-5">Length: 22 inches • Color: Natural Black</p>
                                <p className="text-primary md:text-[14px] text-[12px] flex items-center gap-2 leading-4 font-medium"><Heart size={12} /> MOVE TO WISHLIST</p>
                                <div className="mt-8 flex justify-between">
                                    <div className="flex items-center bg-[#F4F3F1] px-2 py-1 w-fit rounded-full">
                                        <button className="w-8 h-8 flex justify-center items-center">-</button>
                                        <p className="w-[38.77px] h-6 text-center">1</p>
                                        <button className="w-8 h-8 flex justify-center items-center">+</button>
                                    </div>
                                    <div className="text-primary">
                                        <Trash2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex gap-[5%] pb-12 border-b border-b-[#d4c3be71]">
                            <div className="h-45 overflow-hidden w-35 rounded-xl">
                                <img src={WigImage} alt="" className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="flex flex-col gap-3 w-[calc(100%-131.2px)]">
                                <div className="flex md:flex-row flex-col justify-between">
                                    <p className="font-noto md:text-[24px] text-[18px] leading-8 text-[#1a1c1a]">Silky Straight Virgin Wig</p>
                                    <p className="font-noto md:text-[20px] text-[16px] text-[#1a1c1a] leading-7">₦185,000</p>
                                </div>
                                <p className="text-[#827470] md:text-[14px] text-[12px] leading-5">Length: 22 inches • Color: Natural Black</p>
                                <p className="text-primary md:text-[14px] text-[12px] flex items-center gap-2 leading-4 font-medium"><Heart size={12} /> MOVE TO WISHLIST</p>
                                <div className="mt-8 flex justify-between">
                                    <div className="flex items-center bg-[#F4F3F1] px-2 py-1 w-fit rounded-full">
                                        <button className="w-8 h-8 flex justify-center items-center">-</button>
                                        <p className="w-[38.77px] h-6 text-center">1</p>
                                        <button className="w-8 h-8 flex justify-center items-center">+</button>
                                    </div>
                                    <div className="text-primary">
                                        <Trash2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="px-8 py-8 flex flex-col gap-6 bg-[#F4F3F1] lg:w-[35%] md:w-[40%] w-full rounded-xl">
                        <p className="font-noto md:text-[24px] text-[20px] leading-8 pb-4 border-b border-b-[#d4c3be4f]">Order Summary</p>
                        <div className="*:flex *:justify-between *:space-y-4">
                            <div>
                                <p className="md:text-[18px] text-[16px] leading-6 text-[#827470]">Subtotal</p>
                                <p className="md:text-[18px] text-[16px] leading-6">197,000</p>
                            </div>
                            <div>
                                <p className="md:text-[18px] text-[16px] leading-6 text-[#827470]">Shipping</p>
                                <p className="md:text-[16px] text-[14px] leading-6 font-medium text-primary">Complimentary</p>
                            </div>
                            <div>
                                <p className="md:text-[18px] text-[16px] leading-6 text-[#827470]">Taxing (VAT)</p>
                                <p className="md:text-[16px] text-[14px] leading-6">0.00</p>
                            </div>
                            <div className="border-t  border-t-[#d4c3be4f] pt-4">
                                <p className="md:text-[18px] text-[16px] font-noto leading-7">Total</p>
                                <p className="md:text-[30px] text-[20px] font-noto leading-9">₦197,500</p>
                            </div>
                        </div>
                        <button className="bg-primary py-5 text-white rounded-full text-[18px] font-bold">Proceed to Checkout</button>
                        <p className="text-[12px] leading-16 text-[#827470] flex justify-center w-full items-center gap-1"><ShieldCheck size={12} /> Secure encrypted checkout enabled</p>
                    </div>

                </section>

                {/* Complete your ritual */}
                <section className="mb-20">
                    <h2 className="md:text-[30px] text-[20px] font-noto leading-9 text-center mb-16">Complete Your Ritual</h2>
                    <div className="w-full *:lg:w-[23%] *:md:w-[40%] *:w-[75%] gap-5 overflow-x-auto no-scroll *:shrink-0 pb-3 flex">
                        <div className="space-y-3 shadow-xl rounded-xl" onClick={() => navigate("../product")}>
                            <img src={WigImage} alt="" className="w-full h-90 rounded-xl" />
                            <div className="space-y-2 p-2 pb-3">
                                <p className="md:text-[18px] text-[16px] font-noto leading-7">Gel Polish - Rosé</p>
                                <p className="text-[14px] leading-5 text-[#827470]">Long-lasting 15ml</p>
                                <div className="flex justify-between items-center-safe">
                                    <p className="leading-4 text-[16px] font-manrope font-bold">₦4,500</p>
                                    <div className="flex gap-1 items-center">
                                        <div className="border border-[#827470] p-2 w-fit rounded-full">
                                            <Heart size={10} />
                                        </div>
                                        <div className="border bg-primary text-white p-2 w-fit rounded-full">
                                            <ShoppingBag size={10} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3 shadow-xl rounded-xl">
                            <img src={WigImage} alt="" className="w-full h-90 rounded-xl" />
                            <div className="space-y-2 p-2 pb-3">
                                <p className="text-[18px] font-noto leading-7">Gel Polish - Rosé</p>
                                <p className="text-[14px] leading-5 text-[#827470]">Long-lasting 15ml</p>
                                <div className="flex justify-between items-center-safe">
                                    <p className="leading-4 text-[16px] font-manrope font-bold">₦4,500</p>
                                    <div className="flex gap-1 items-center">
                                        <div className="border border-[#827470] p-2 w-fit rounded-full">
                                            <Heart size={10} />
                                        </div>
                                        <div className="border bg-primary text-white p-2 w-fit rounded-full">
                                            <ShoppingBag size={10} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3 shadow-xl rounded-xl">
                            <img src={WigImage} alt="" className="w-full h-90 rounded-xl" />
                            <div className="space-y-2 p-2 pb-3">
                                <p className="text-[18px] font-noto leading-7">Gel Polish - Rosé</p>
                                <p className="text-[14px] leading-5 text-[#827470]">Long-lasting 15ml</p>
                                <div className="flex justify-between items-center-safe">
                                    <p className="leading-4 text-[16px] font-manrope font-bold">₦4,500</p>
                                    <div className="flex gap-1 items-center">
                                        <div className="border border-[#827470] p-2 w-fit rounded-full">
                                            <Heart size={10} />
                                        </div>
                                        <div className="border bg-primary text-white p-2 w-fit rounded-full">
                                            <ShoppingBag size={10} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3 shadow-xl rounded-xl">
                            <img src={WigImage} alt="" className="w-full h-90 rounded-xl" />
                            <div className="space-y-2 p-2 pb-3">
                                <p className="text-[18px] font-noto leading-7">Gel Polish - Rosé</p>
                                <p className="text-[14px] leading-5 text-[#827470]">Long-lasting 15ml</p>
                                <div className="flex justify-between items-center-safe">
                                    <p className="leading-4 text-[16px] font-manrope font-bold">₦4,500</p>
                                    <div className="flex gap-1 items-center">
                                        <div className="border border-[#827470] p-2 w-fit rounded-full">
                                            <Heart size={10} />
                                        </div>
                                        <div className="border bg-primary text-white p-2 w-fit rounded-full">
                                            <ShoppingBag size={10} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3 shadow-xl rounded-xl">
                            <img src={WigImage} alt="" className="w-full h-90 rounded-xl" />
                            <div className="space-y-2 p-2 pb-3">
                                <p className="text-[18px] font-noto leading-7">Gel Polish - Rosé</p>
                                <p className="text-[14px] leading-5 text-[#827470]">Long-lasting 15ml</p>
                                <div className="flex justify-between items-center-safe">
                                    <p className="leading-4 text-[16px] font-manrope font-bold">₦4,500</p>
                                    <div className="flex gap-1 items-center">
                                        <div className="border border-[#827470] p-2 w-fit rounded-full">
                                            <Heart size={10} />
                                        </div>
                                        <div className="border bg-primary text-white p-2 w-fit rounded-full">
                                            <ShoppingBag size={10} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3 shadow-xl rounded-xl">
                            <img src={WigImage} alt="" className="w-full h-90 rounded-xl" />
                            <div className="space-y-2 p-2 pb-3">
                                <p className="text-[18px] font-noto leading-7">Gel Polish - Rosé</p>
                                <p className="text-[14px] leading-5 text-[#827470]">Long-lasting 15ml</p>
                                <div className="flex justify-between items-center-safe">
                                    <p className="leading-4 text-[16px] font-manrope font-bold">₦4,500</p>
                                    <div className="flex gap-1 items-center">
                                        <div className="border border-[#827470] p-2 w-fit rounded-full">
                                            <Heart size={10} />
                                        </div>
                                        <div className="border bg-primary text-white p-2 w-fit rounded-full">
                                            <ShoppingBag size={10} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3 shadow-xl rounded-xl">
                            <img src={WigImage} alt="" className="w-full h-90 rounded-xl" />
                            <div className="space-y-2 p-2 pb-3">
                                <p className="text-[18px] font-noto leading-7">Gel Polish - Rosé</p>
                                <p className="text-[14px] leading-5 text-[#827470]">Long-lasting 15ml</p>
                                <div className="flex justify-between items-center-safe">
                                    <p className="leading-4 text-[16px] font-manrope font-bold">₦4,500</p>
                                    <div className="flex gap-1 items-center">
                                        <div className="border border-[#827470] p-2 w-fit rounded-full">
                                            <Heart size={10} />
                                        </div>
                                        <div className="border bg-primary text-white p-2 w-fit rounded-full">
                                            <ShoppingBag size={10} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default ShoppingCart;