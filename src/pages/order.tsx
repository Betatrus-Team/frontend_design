import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import myWig from "../assets/images/wig.png";
import { LockKeyhole } from "lucide-react";
import Button from "../components/button";

type OrdersStateProp = {
    activeCount : number,
    active : any[],
    dispute : any[],
    concluded : any[]
}
const Orders = () => {
    const [data, setData] = useState<OrdersStateProp>({
        activeCount : 0,
        active : [],
        dispute : [],
        concluded : []
    });

    const [activeState, setActiveState] = useState<"active" | "concluded" | "disputes">("active");

    return (
        <div>
            <Header />
            <main className="lg:px-15 md:px-5 px-2">
                <section className="lg:w-[50%] md:w-[80%] w-[95%] mt-15">
                    <h1 className="tracking-[-0.96px] leading-[52.8px] lg:text-[48px] md:text-[38px] text-[28px] font-noto font-bold mb-4">Active Orders</h1>
                    <p className="md:text-[16px] text-[14px] font-manrope leading-6 text-[#5E5F5D] mb-10">Track and manage your premium beauty investments. All transactions are protected by our secure escrow system until you confirm delivery.</p>
                </section>
                <section>
                    <ul className="font-manrope text-[12px] font-semibold leading-[14.4px] tracking-[1.2px] flex gap-8 cursor-pointer mb-6 border-b border-b-gray-200">
                        <li className={`${activeState === "active" ? "text-primary border-b-2 pb-3" : "text-[#5E5F5D]"}`} onClick={() => setActiveState("active")}>ACTIVE ({data.activeCount})</li>
                        <li className={`${activeState === "concluded" ? "text-primary border-b-2 pb-3" : "text-[#5E5F5D]"}`} onClick={() => setActiveState("concluded")}>CONCLUDED</li>
                        <li className={`${activeState === "disputes" ? "text-primary border-b-2 pb-3" : "text-[#5E5F5D]"}`} onClick={() => setActiveState("disputes")}>DISPUTES</li>
                    </ul>
                    <section className="space-y-6 mb-15">
                        <div className="lg:p-6 md:p-2 p-2 border-b border-b-gray-200 flex lg:gap-6 gap-3">
                            <div className="lg:w-[192px] md:w-[150px] w-[120px] lg:h-[192px] md:h-[150px] h-[120px]">
                                <img src={myWig} className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="font-manrope space-y-2 md:w-[calc((100%-192px)-20%)] md:w-[calc((100%-150px)-20%)]">
                                <h2 className="font-bodoni font-medium lg:text-[24px] md:text-[18px] text-[16px] leading-[31.2px] text-[#1C1B1B]">Bone Straight HD Lace Wig</h2>
                                <div className="md:text-[12px] text-[10px] leading-[14.4px] tracking-[0.6px] text-[#5E5F5D] flex gap-5">
                                    <p>ID: #BT-8829</p>
                                    <p>Ordered: Feb 24, 2026</p>
                                </div>
                                <p className="md:text-[14px] text-[10px] font-semibold text-[#1C1B1B] flex gap-2 items-center leading-4.25"><span className="w-1.75 h-1.75 rounded-full bg-red-800 block" /> Payment Held in Escrow — In Transit</p>
                                <div className="md:mt-10 mt-5 flex items-center md:gap-5 gap-2">
                                    <Button label="TRACK ORDER" extra="bg-primary text-white lg:text-[12px] md:text-[10px] text-[8px] leading-[14.2px] tracking-[1.2px] font-normal" />
                                    <Button label="CONFIRM DELIVERY" extra="border border-gray-300 lg:text-[12px] md:text-[10px] text-[8px] leading-[14.2px] tracking-[1.2px] text-primary font-normal" />
                                    <p className="lg:text-[12px] md:text-[9px] text-[8px] leading-[14.2px] tracking-[1.2px]">Need Help?</p>
                                </div>
                            </div>
                            <div className="w-[20%] md:flex hidden justify-end">
                                <p className="lg:text-[10px] text-[8px] items-center flex gap-2 bg-red-50 h-fit w-fit p-1 text-red-700 font-manrope font-bold leading-3 tracking-[0.8px] "><LockKeyhole className="w-3 h-3" /> ESCROW PROTECTED</p>
                            </div>
                        </div>

                        <div className="lg:p-6 md:p-2 p-2 border-b border-b-gray-200 flex lg:gap-6 gap-3">
                            <div className="lg:w-[192px] md:w-[150px] w-[120px] lg:h-[192px] md:h-[150px] h-[120px]">
                                <img src={myWig} className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="font-manrope space-y-2 md:w-[calc((100%-192px)-20%)] md:w-[calc((100%-150px)-20%)]">
                                <h2 className="font-bodoni font-medium lg:text-[24px] md:text-[18px] text-[16px] leading-[31.2px] text-[#1C1B1B]">Bone Straight HD Lace Wig</h2>
                                <div className="md:text-[12px] text-[10px] leading-[14.4px] tracking-[0.6px] text-[#5E5F5D] flex gap-5">
                                    <p>ID: #BT-8829</p>
                                    <p>Ordered: Feb 24, 2026</p>
                                </div>
                                <p className="md:text-[14px] text-[10px] font-semibold text-[#1C1B1B] flex gap-2 items-center leading-4.25"><span className="w-1.75 h-1.75 rounded-full bg-green-800 block" /> Preparing for Shipment</p>
                                <div className="md:mt-10 mt-5 flex items-center md:gap-5 gap-2">
                                    <Button label="TRACK ORDER" extra="bg-primary text-white lg:text-[12px] md:text-[10px] text-[8px] leading-[14.2px] tracking-[1.2px] font-normal" />
                                    <Button label="CONFIRM DELIVERY" extra="border border-gray-300 lg:text-[12px] md:text-[10px] text-[8px] leading-[14.2px] tracking-[1.2px] text-primary font-normal" />
                                    <p className="lg:text-[12px] md:text-[9px] text-[8px] leading-[14.2px] tracking-[1.2px]">Need Help?</p>
                                </div>
                            </div>
                            <div className="w-[20%] md:flex hidden justify-end">
                                <p className="lg:text-[10px] text-[8px] items-center flex gap-2 bg-red-50 h-fit w-fit p-1 text-red-700 font-manrope font-bold leading-3 tracking-[0.8px]"><LockKeyhole className="w-3 h-3" /> ESCROW PROTECTED</p>
                            </div>
                        </div>

                        <div className="lg:p-6 md:p-2 p-2 border-b border-b-gray-200 flex lg:gap-6 gap-3">
                            <div className="lg:w-[192px] md:w-[150px] w-[120px] lg:h-[192px] md:h-[150px] h-[120px]">
                                <img src={myWig} className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="font-manrope space-y-2 md:w-[calc((100%-192px)-20%)] md:w-[calc((100%-150px)-20%)]">
                                <h2 className="font-bodoni font-medium lg:text-[24px] md:text-[18px] text-[16px] leading-[31.2px] text-[#1C1B1B]">Bone Straight HD Lace Wig</h2>
                                <div className="md:text-[12px] text-[10px] leading-[14.4px] tracking-[0.6px] text-[#5E5F5D] flex gap-5">
                                    <p>ID: #BT-8829</p>
                                    <p>Ordered: Feb 24, 2026</p>
                                </div>
                                <p className="md:text-[14px] text-[10px] font-semibold text-[#1C1B1B] flex gap-2 items-center leading-4.25"><span className="w-1.75 h-1.75 rounded-full bg-red-800 block" /> Payment Verified — Awaiting Merchant Dispatch</p>
                                <div className="md:mt-10 mt-5 flex items-center md:gap-5 gap-2">
                                    <Button label="TRACK ORDER" extra="bg-primary text-white lg:text-[12px] md:text-[10px] text-[8px] leading-[14.2px] tracking-[1.2px] font-normal" />
                                    <Button label="CONFIRM DELIVERY" extra="border border-gray-300 lg:text-[12px] md:text-[10px] text-[8px] leading-[14.2px] tracking-[1.2px] text-primary font-normal" />
                                    <p className="lg:text-[12px] md:text-[9px] text-[8px] leading-[14.2px] tracking-[1.2px]">Need Help?</p>
                                </div>
                            </div>
                            <div className="w-[20%] md:flex hidden justify-end">
                                <p className="lg:text-[10px] text-[8px] items-center flex gap-2 bg-red-50 h-fit w-fit p-1 text-red-700 font-manrope font-bold leading-3 tracking-[0.8px] "><LockKeyhole className="w-3 h-3" /> ESCROW PROTECTED</p>
                            </div>
                        </div>
                        
                    </section>
                    <section className="font-manrope text-[#5E5F5D] flex justify-between md:p-8 p-5 gap-5 bg-gray-50 mb-15">
                        <section className="space-y-2">
                            <h3 className="md:text-[12px] text-[10px] font-semibold leading-[14.4px] tracking-[1.2px] text-primary">ESCROW PROTECTION</h3>
                            <p className="lg:text-[14px] md:text-[12px] text-[10px] leading-4.25">Your funds are held securely by Betatrus and only released to the seller after you confirm delivery of the item.</p>
                        </section>
                        <section className="space-y-2">
                            <h3 className="md:text-[12px] text-[10px] font-semibold leading-[14.4px] tracking-[1.2px] text-black">INSPECTION PERIOD</h3>
                            <p className="lg:text-[14px] md:text-[12px] text-[10px] leading-4.25">You have 48 hours after delivery to inspect your luxury items and raise any disputes before escrow is finalized.</p>
                        </section>
                        <section className="space-y-2">
                            <h3 className="md:text-[12px] text-[10px] font-semibold leading-[14.4px] tracking-[1.2px] text-black">VERIFIED VENDORS</h3>
                            <p className="lg:text-[14px] md:text-[12px] text-[10px] leading-4.25">All merchants on Betatrus go through a rigorous verification process to ensure authenticity and premium service.</p>
                        </section>
                    </section>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Orders;