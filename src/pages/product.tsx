import Header from "../components/header";
import wigImage from "../assets/images/wig.png"
import { Heart, Star } from "lucide-react";
import Button from "../components/button";
import Footer from "../components/footer";

const ProductDescription = () => {
    return (
        <div>
            <Header />
            <main className="font-manrope py-10 lg:px-10 md:px-3 px-2 text-[#504441]">
                <ul className="breadcrumnb flex items-center gap-2 text-[16px] text-[#504441] mb-12 leading-6">
                    <li>Home</li>
                    <li className="text-[12px]">&gt;</li>
                    <li>Bestseller</li>
                    <li className="text-[12px]">&gt;</li>
                    <li className="text-black md:text-[16px] text-[13px]">Silk-Press Straight Frontal Wig</li>
                </ul>
                <section className="flex md:flex-row flex-col justify-between mb-12 gap-y-5">
                    <div  className="md:w-[55%] w-full">
                        <div className="w-full md:h-200 h-100 overflow-hidden rounded-xl mb-6">
                            <img src={wigImage} alt="" className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="*:md:w-[23%] *:w-[35%] w-full *:shrink-0 md:h-38 h-35 gap-[2%] flex md:overflow-x-hidden overflow-x-auto">
                            <div className="rounded-xl overflow-hidden border-2 h-full border-black">
                                <img src={wigImage} alt="" className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="rounded-xl overflow-hidden border border-[#d4c3beab]">
                                <img src={wigImage} alt="" className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="rounded-xl overflow-hidden border border-[#d4c3beab]">
                                <img src={wigImage} alt="" className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="rounded-xl overflow-hidden border border-[#d4c3beab]">
                                <img src={wigImage} alt="" className="w-full h-full object-cover object-top" />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[40%] w-full">
                        <h2 className="font-noto lg:text-[48px] md:text-[38px] text-[30px] font-bold leading-12 mb-3 text-black">Silk-Press Straight Frontal Wig</h2>
                        <div className="flex items-center-safe gap-5 mb-10">
                            <p className="md:text-[24px] text-[20px] font-medium text-primary">$495.00</p>
                            <div className="h-4 bg-[#504441] w-px" />
                            <div className="text-primary flex *:w-6 *:h-4.75">
                                <Star fill="red" />
                                <Star fill="red" />
                                <Star fill="red" />
                                <Star fill="red" />
                                <Star fill="red" />
                            </div>
                            <p className="text-[16px] leading-5 lg:block md:hidden ">(24 Reviews)</p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p className="font-medium text-[16px]">LENGTH</p>
                            <p className="text-[14px] underline text-primary leading-3.5">Size Guide</p>
                        </div>
                        <div className="flex gap-4 mb-8">
                            <Button label={`12"`} extra="border-2 w-[74px] h-[44px] flex items-center justify-center border-blue-800" />
                            <Button label={`16"`} extra="border w-[74px] h-[44px] flex items-center justify-center border-[#D4C3BE]" />
                            <Button label={`20"`} extra="border w-[74px] h-[44px] flex items-center justify-center border-[#D4C3BE]" />
                            <Button label={`24"`} extra="border w-[74px] h-[44px] flex items-center justify-center border-[#D4C3BE]" />
                        </div>
                        <div className="mb-4">
                            <p className="font-medium text-[16px]">COLOR</p>
                        </div>
                        <div className="flex gap-4 mb-8">
                            <Button label="" extra="w-[40px] h-[40px] bg-black" />
                            <Button label="" extra="w-[40px] h-[40px] bg-[#3E2723]" />
                            <Button label="" extra="w-[40px] h-[40px] bg-[#D4AF37]" />
                        </div>
                        <div className="mb-4">
                            <p className="font-medium text-[16px]">QUANTITY</p>
                        </div>
                        <div className="mb-10 w-32 h-12 p-4 flex items-center justify-between rounded-full bg-[#EFEEEB]">
                            <button className="text-[18px]">-</button>
                            <p className="text-[20px]">5</p>
                            <button className="text-[18px]">+</button>
                        </div>
                        <div className="space-y-4 mb-4">
                            <Button label="Add to Cart" extra="bg-primary h-[64px] w-full flex justify-center-safe items-center-safe text-white" />
                            <Button label="Buy Now" extra="bg-primary h-[64px] w-full flex justify-center-safe items-center-safe text-white" />
                        </div>
                        <button className="py-4 flex justify-center-safe gap-2 mb-10 items-center-safe text-primary w-full">
                            <Heart />
                            <p className="font-medium">Add to Wishlist</p>
                            <span className="text-[14px]">(Requires login)</span>
                        </button>
                        <div className="border-t border-t-[#d4c3be63] pt-10">
                            <h3 className="text-[20px] font-noto italic mb-10 text-black">Description</h3>
                            <p className="md:text-[18px] text-[16px] leading-6.5 text-black">
                                Our signature Silk-Press Straight Frontal Wig features 100% ethically sourced virgin hair, double-drawn for consistent density from root to tip. The 13x6 HD lace frontal ensures a seamless, melt-into-skin finish that allows for multi-directional parting and effortless versatility.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="border-t border-t-[#1c1b1b18] pt-6 pb-12 md:mb-12 mb-6">
                    <ul className="flex gap-12 *:pb-3 *:md:text-[16px] *:text-[12px] mb-6">
                        <li className="border-b-2 border-b-[#0000FF]">PRODUCT SPECS</li>
                        <li>SHIPPING & RETURNS</li>
                        <li>VERIFIED REVIEWS (12)</li>
                    </ul>
                    <div className="flex md:flex-row flex-col gap-[4%] gap-y-7 text-black mb-12">
                        <section className="md:w-[48%] w-full">
                            <h2 className="font-medium md:text-[24px] text-[20px] leading-7.5 mb-6 font-bodoni">Material & Construction</h2>
                            <div className="w-full">
                                <table className="w-full *:flex *:justify-between md:text-[16px] text-[14px] space-y-4 leading-6 font-medium">
                                    <tr className="border-b border-b-[#1c1b1b18] pb-2">
                                        <td>Hair Type</td>
                                        <td>100% Unprocessed Cambodian Human Hair</td>
                                    </tr>
                                    <tr className="border-b border-b-[#1c1b1b18] pb-2">
                                        <td>Lace Material</td>
                                        <td>Ultra-Thin High Definition (HD) Swiss Lace</td>
                                    </tr>
                                    <tr className="border-b border-b-[#1c1b1b18] pb-2">
                                        <td>Density</td>
                                        <td>180% Density (Full Volume)</td>
                                    </tr>
                                    <tr className="border-b border-b-[#1c1b1b18] pb-2">
                                        <td>Cap Size</td>
                                        <td>Medium (Adjustable Straps)</td>
                                    </tr>
                                </table>
                            </div>
                        </section>
                        <section className="md:w-[48%] w-full">
                            <h2 className="font-medium md:text-[24px] text-[20px] leading-7.5 mb-6 font-bodoni">Styling & Care</h2>
                            <p className="md:text-[16px] text-[14px] leading-6 font-medium">
                                This luxury frontal can be dyed up to 613 platinum blonde without losing its silkiness. The HD lace is pre-plucked with natural baby hairs to ensure an invisible transition. We recommend professional installation for the most natural look. Use sulfate-free shampoos and cool water for longevity.
                            </p>
                        </section>
                    </div>
                </section>
                <section>
                    <div className="flex justify-between mb-6">
                        <h2 className="md:text-[32px] text-[20px] font-medium leading-9.5 font-bodoni">Verified Purchases</h2>
                        <p className="text-[16px] text-primary underline">Write a Review</p>
                    </div>
                    <div className="flex md:flex-row flex-col *:md:w-[48%] w-full gap-[4%]">
                        <section className="p-8 bg-[#F0EDED] border space-y-4 border-[#1c1b1b18] text-black">
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <section className="bg-[#b024291a] text-[#B02429] w-10 h-10 flex justify-center-safe items-center-safe rounded-xl">A</section>
                                    <section>
                                        <p className="leading-6">Adesua W.</p>
                                        <p className="bg-[#b024291a] text-[#B02429] rounded-full py-1 px-2 text-[12px]">Verified Purchase</p>
                                    </section>
                                </div>
                                <div className="flex text-[#B02429] *:w-3 *:h-3.25">
                                    <Star fill="red" />
                                    <Star fill="red" />
                                    <Star fill="red" />
                                    <Star fill="red" />
                                    <Star fill="red" />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <p>
                                    "The HD lace is actually invisible! I've bought many 'HD' wigs but this is the real deal. Shipping to Abuja was super fast too. Very impressed with the escrow system, made me feel safe buying a high-value item."
                                </p>
                                <div className="flex">
                                    <img src={wigImage} alt="" className="w-16 h-16 rounded-sm" />
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default ProductDescription;