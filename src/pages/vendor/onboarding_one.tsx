import { ArrowRight, Camera, ShieldCheck } from "lucide-react";
import { VendorHeader } from "./components/header";
import { useRef, useState } from "react";

const StepOne = () => {
    const imageInput = useRef<HTMLInputElement>(null);
    const [banner, setBanner] = useState<string | null>(null);

    const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setBanner(URL.createObjectURL(file));
        }
    };

    return (
        <div>
            <VendorHeader />
            <main className="flex flex-col items-center pt-15 bg-[#FCF9F8] h-fit">
                <div className="lg:w-[90%] w-[95%] flex md:flex-row flex-col space-y-10 justify-between mb-10">
                    <section className="font-manrope md:w-[30%] w-full space-y-3">
                        <h1 className="text-primary text-[12px] font-semibold leading-[14.4px] tracking-[1.2px]">STEP 01 - PROFILE</h1>
                        <h2 className="lg:text-[48px] md:text-[38px] text-[28px] font-bold leading-[38.4px] font-noto">Join the Elite</h2>
                        <p className="lg:text-[16px] md:text-[14px] leading-6.5 text-light">Secure your position in our luxury beauty ecosystem. Your business profile is the first step toward escrow-protected growth.</p>
                        <div className="bg-light lg:p-6 p-3 border border-gray-200 rounded mt-10">
                            <p className="flex items-center gap-3 text-primary lg:text-[16px] md:text-[12px] leading-6 tracking-[0.8px]"><ShieldCheck className="lg:w-5 w-4 lg:h-6 h-5" fill="blue" color="white" /> ESCROW PROTECTED</p>
                            <p className="text-[14px] leading-5.25 text-light">Every transaction on Betatrus is protected by our automated escrow system, ensuring you get paid for every masterpiece.</p>
                        </div>
                    </section>
                    <section className="md:w-[60%] w-full">
                        <div className="bg-white mb-3 rounded border border-gray-200 lg:p-12 md:p-6 p-3 w-full font-manrope">
                            <h2 className="font-bodoni font-medium md:text-[32px] text-[22px] leading-[38.4px]">Business Profile</h2>
                            <p className="text-[14px] leading-6 text-light">Introduce your brand to our high-intent clientele.</p>
                            <form action="" className="mt-5 flex justify-between flex-wrap gap-y-4 lg:text-[16px] text-[14px]">
                                <div className="flex flex-col text-light w-full gap-1">
                                    <label htmlFor="businessName" className="] leading-6 md:tracking-[1.6px]">BUSINESS NAME</label>
                                    <input type="text" name="" id="" placeholder="e.g. Maison de Luxe Wigs" className="border-b border-b-gray-200 outline-0 px-3 py-3.5" />
                                </div>
                                <div className="flex flex-col text-light lg:w-[49%] w-full gap-1">
                                    <label htmlFor="businessName" className="leading-6 md:tracking-[1.6px]">BEAUTY CATEGORY</label>
                                    <select className="border-b border-b-gray-200 outline-0 px-3 py-3.5">
                                        <option value="" selected disabled>Select Category</option>
                                    </select>
                                </div>
                                <div className="flex flex-col text-light lg:w-[49%] w-full gap-1">
                                    <label htmlFor="businessName" className="leading-6 md:tracking-[1.6px]">YEARS OF EXPERIENCE</label>
                                    <select className="border-b border-b-gray-200 outline-0 px-3 py-3.5">
                                        <option value="" selected disabled>Select Years</option>
                                    </select>
                                </div>
                                <div className="flex flex-col text-light w-full gap-1">
                                    <label htmlFor="businessName" className="leading-6 tracking-[1.6px">BUSINESS BIO</label>
                                    <textarea name="" id="" placeholder="Tell us about your craft, your inspiration, and why customers choose your brand..." className="border border-gray-200 rounded outline-0 px-3 py-3.5 resize-none" rows={5} />
                                </div>
                                <div className="w-full h-48 border border-gray-200 rounded flex items-end bg-cover bg-center" style={{ backgroundImage: banner ? `url(${banner})` : undefined }} onClick={() => imageInput.current?.click()} >
                                    <input type="file" name="banner" id="banner" className="hidden" ref={imageInput} accept="image/*" onChange={handleBannerChange} />
                                    <p className={`${banner ? "hidden" : "flex"} gap-2 items-center md:text-[16px] text-[12px] p-3 cursor-pointer`}><Camera /> BUSINESS PROFILE HEADER PREVIEW</p>
                                </div>

                                <div className="flex mt-12 w-full items-center-safe justify-between">
                                    <button className=" md:text-[16px] text-[12px] leading-6 tracking-[1.6px] text-light">SAVE DRAFT</button>
                                    <button className="lg:px-8 md:px-6 px-4 py-3 bg-[#02102D]  md:text-[16px] text-[12px] text-white flex items-center gap-2 rounded-lg leading-6 font-semibold">NEXT: VERIFICATION <ArrowRight /></button>
                                </div>
                            </form>
                        </div>
                        <p className="md:text-[14px] text-[12px] leading-4.25 text-light text-center">Your data is secured by enterprise-grade encryption. By continuing, you agree to the Vendor Terms of Service.</p>
                    </section>
                </div>
            </main>        
        </div>
    );
}

export default StepOne;