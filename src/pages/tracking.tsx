import { ArrowRight, Check, Truck, Package, Cog, Store, type LucideIcon, Headset } from "lucide-react";
import myWig from "../assets/images/wig.png";
import Header from "../components/header";
import Button from "../components/button";

type ProcessesProp = {
    title : string,
    subtitle : string,
    status : "completed" | "active" | "pending",
    icon : LucideIcon
}

const Tracking = () => {
    const processes: ProcessesProp[] = [
        {
            title: "Order Placed",
            subtitle: "Nov 20, 11:15 AM . Payment confirmed",
            status: "completed",
            icon: Package
        },
        {
            title: "Processing",
            subtitle: "Nov 21, 11:15 AM . Quality check passed",
            status: "completed",
            icon: Cog
        },
        {
            title: "Out for Delivery",
            subtitle: "Nov 22, 11:15 AM . Courier is nearby",
            status: "active",
            icon: Truck
        },
        {
            title: "Delivered",
            subtitle: "Estimated for Nov 24, Lagos, NG",
            status: "pending",
            icon: Store
        }
    ]

    // to control the progress bar
    const activeIndex = processes.findIndex(process =>
        process.status === "active"
    );
    const progress = (activeIndex / (processes.length - 1)) * 93;
    
    return (
        <div>
            <Header />
            <main className="flex flex-col items-center gap-20">
                <section className="lg:w-[50%] md:w-[80%] w-[95%] flex flex-col items-center gap-6 mt-15">
                    <h1 className="font-noto text-[60px] md:w-[60%] w-[90%] leading-15 text-center">Your order is on <br /><span className="text-primary italic">its way to you.</span></h1>
                    <p className="font-manrope text-[16px] text-center text-secondary">Enter your Order ID to see real-time updates on your luxury hair delivery.</p>
                    <div className="flex px-8 py-4 w-[90%] justify-between gap-2 bg-accent rounded-t-2xl">
                        <input type="text" name="" id="" placeholder="Order ID (e.g., TR-8829-XL)" className="font-manrope w-[80%] outline-0" />
                        <button className="md:px-5 px-3 bg-[#02102D] flex items-center gap-2 py-3 text-white rounded-full text-[14px] font-bold">Track <ArrowRight size={15} /></button>
                    </div>
                </section>
                <section className="w-[97%] flex md:flex-row flex-col md:items-stretch md:gap-0 gap-10 items-center justify-between h-fit mb-30">
                    <section className="p-10 lg:w-[58%] md:w-[55%] w-[95%] shadow rounded-2xl">
                        <div className="mb-16">
                            <p className="font-manrope text-[10px] text-primary">ORDER #TR-8829-XL</p>
                            <div className="flex justify-between">
                                <p className="font-noto lg:text-[24px] md:text-[20px] text-[18px] leading-8">Expected Delivery: Nov 24</p>
                                <p className="bg-[#0000ff2d] px-4 py-1.5 rounded-full font-manrope font-semibold text-[#02102D] leading-4 text-[12px] flex items-center">In Transit</p>
                            </div>
                        </div>
                        <div className="relative pl-5">
                           <div className="absolute h-[93%] left-9 w-0.5 bg-gray-300" />
                           <div className="absolute left-9 w-0.5 bg-primary" style={{height : `${progress}%`}} />
                            {
                                processes.map((process, index) => {
                                    const Icon = process.icon;
                                    return (
                                        <div key={index} className="flex relative gap-5 not-last:mb-10">
                                            <div className={`z-10 p-2 rounded-full w-fit h-fit flex items-center ${process.status === "completed" ? "bg-primary text-white" : process.status === "active" ? "bg-primary ring-4 ring-blue-100 text-white" : "bg-accent text-secondary"}`}>
                                                {process.status === "completed" ? <Check className="lg:w-5 w-4 lg:h-5 h-4" /> : <Icon className="w-5 h-5" />}
                                            </div>
                                            <div>
                                                <b className={`lg:text-[18px] text-[16px] font-manrope leading-7 font-bold ${process.status === "completed" ? "text-black" : process.status === "active" ? "text-primary" : "text-gray-500"}`}>{process.title}</b>
                                                <p className={`text-[14px] font-manrope leading-5 ${process.status === "pending" ? "text-gray-500" : "text-black"}`}>{process.subtitle}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                    <section className="lg:w-[38%] md:w-[41%] w-[95%] space-y-8">
                        <section className="bg-[#F4F3F1] space-y-8 lg:px-10 py-10 px-5 w-full rounded-2xl">
                            <h2 className="text-[20px] font-noto text-black leading-7 tracking-[2.4px]">Order Summary</h2>
                            <div className="flex items-center gap-3 pb-8 border-b border-b-[#d4c3be5d]">
                                <div className="w-24 h-20">
                                    <img src={myWig} className="w-full h-full object-contain" />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-manrope text-[16px] leading-6 font-bold">Silk-press Straight Frontal Wig</p>
                                    <p className="font-manrope text-[12px] leading-4 tracking-[-0.6px] text-[#504441] uppercase">22 inches • Natural Black</p>
                                    <p className="font-manrope text-[16px] text-primary leading-6 font-bold">₦420,000</p>
                                </div>
                            </div>
                            <div className="space-y-3 font-manrope text-secondary pb-8">
                                <div className="flex justify-between">
                                    <p className="text-[16px] leading-6">Subtotal</p>
                                    <p className="text-[14px] font-medium leading-6">₦420,000</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-[16px] leading-6">Shipping</p>
                                    <p className="text-[14px] font-medium leading-6">₦2,000</p>
                                </div>
                                <div className="md:text-[18px] text-[16px] font-bold flex justify-between items-center">
                                    <p className="leading-7 text-black">TOTAL</p>
                                    <p className="text-[16px] leading-7.5 text-primary">₦422,500</p>
                                </div>
                            </div>
                        </section>
                        <section className="bg-[#D9E2FF] w-full space-y-8 lg:px-10 py-10 px-5 rounded-2xl md:w-fit flex gap-6">
                            <div className="bg-white w-fit h-fit p-3 rounded-full">
                                <Headset className="w-5 h-4.75 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-manrope text-[18px] font-bold leading-7 mb-2">Need assistance?</h3>
                                <p className="text-[14px] font-manrope leading-5">Our beauty specialists are available 24/7 for any questions regarding your shipment.</p>
                                <div className="flex lg:flex-row md:flex-col gap-3 mt-5">
                                    <Button label="Contact Us" extra="bg-button text-white font-normal" />
                                    <Button label="Help Center" extra="border border-button text-button font-normal" />
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default Tracking;