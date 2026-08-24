import { Dot, Trash2 } from "lucide-react";
import Footer from "../components/footer";
import Header from "../components/header";
import WigImage from "../assets/images/wig.png";
import { PageTitle } from "../components/title";

const Favourites = () => {
    return (
        <div className="flex flex-col">
            <PageTitle title={"BETATRUS | FAVOURITES"} />
            <Header />
            <main className="flex-1 py-20 px-2 flex justify-center font-manrope text-[#1A1C1A]">
                <div className="md:w-[80%] w-[95%]">
                    <h1 className="font-noto font-bold md:text-[48px] text-[30px] md:leading-18 leading-6 mb-6">Your Favourites</h1>
                    <p className="text-[12px] leading-4 tracking-[1.2px] md:mb-24 mb-15">6 CURATED TREASURES</p>
                    <section className="space-y-12">
                        <div className="w-full md:pb-12 pb-8 border-b border-b-[#d4c3be71]">
                            <div className="w-full flex gap-[5%]">
                                <div className="h-45 overflow-hidden w-35 rounded-xl">
                                    <img src={WigImage} alt="" className="w-full h-full object-cover object-top" />
                                </div>
                                <div className="flex flex-col gap-3 w-[70%]">
                                    <div className="flex md:flex-row flex-col justify-between">
                                        <p className="font-noto md:text-[24px] text-[18px] leading-8 text-[#1a1c1a]">Silky Straight Virgin Wig</p>
                                        <p className="font-noto md:text-[24px] text-[18px] text-[#1a1c1a] leading-7">₦185,000</p>
                                    </div>
                                    <p className="text-[#827470] md:text-[14px] text-[12px] leading-5">Length: 22 inches • Color: Natural Black</p>
                                    <p className="text-[#795600] text-[10px] font-extrabold flex gap-1 items-center-safe"><Dot /> BACK IN STOCK</p>
                                    <div className="mt-5 md:flex hidden justify-between items-center">
                                        <button className="bg-primary py-4 md:px-10 px-5 text-white rounded-full leading-5 tracking-[1.4px] text-[14px] font-bold">ADD TO CART</button>
                                        <div className="flex items-center gap-2 text-[12px] text-primary">
                                            <Trash2 className="text-[#827470]" /> REMOVE
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-between items-center md:hidden">
                                <button className="bg-primary py-4 md:px-10 px-5 text-white rounded-full leading-5 tracking-[1.4px]  text-[14px] font-bold">ADD TO CART</button>
                                <div className="flex items-center gap-2 text-[12px] text-primary">
                                    <Trash2 className="text-[#827470]" /> REMOVE
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:pb-12 pb-8 border-b border-b-[#d4c3be71]">
                            <div className="w-full flex gap-[5%]">
                                <div className="h-45 overflow-hidden w-35 rounded-xl">
                                    <img src={WigImage} alt="" className="w-full h-full object-cover object-top" />
                                </div>
                                <div className="flex flex-col gap-3 w-[70%]">
                                    <div className="flex md:flex-row flex-col justify-between">
                                        <p className="font-noto md:text-[24px] text-[18px] leading-8 text-[#1a1c1a]">Silky Straight Virgin Wig</p>
                                        <p className="font-noto md:text-[24px] text-[18px] text-[#1a1c1a] leading-7">₦185,000</p>
                                    </div>
                                    <p className="text-[#827470] md:text-[14px] text-[12px] leading-5">Length: 22 inches • Color: Natural Black</p>
                                    <p className="text-[#795600] text-[10px] font-extrabold flex gap-1 items-center-safe"><Dot /> BACK IN STOCK</p>
                                    <div className="mt-5 md:flex hidden justify-between items-center">
                                        <button className="bg-primary py-4 md:px-10 px-5 text-white rounded-full leading-5 tracking-[1.4px] text-[14px] font-bold">ADD TO CART</button>
                                        <div className="flex items-center gap-2 text-[12px] text-primary">
                                            <Trash2 className="text-[#827470]" /> REMOVE
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-between items-center md:hidden">
                                <button className="bg-primary py-4 md:px-10 px-5 text-white rounded-full leading-5 tracking-[1.4px] text-[14px] font-bold">ADD TO CART</button>
                                <div className="flex items-center gap-2 text-[12px] text-primary">
                                    <Trash2 className="text-[#827470]" /> REMOVE
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Favourites;