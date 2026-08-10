import { ShieldCheck } from "lucide-react";
import { VendorHeader } from "./components/header";

const StepOne = () => {
    return (
        <div>
            <VendorHeader />
            <main className="flex flex-col items-center pt-15 bg-[#FCF9F8] h-[calc(100vh-72px)]">
                <div className="w-[90%] flex">
                    <section className="font-manrope w-[30%] space-y-3">
                        <h1 className="text-primary text-[12px] font-semibold leading-[14.4px] tracking-[1.2px]">STEP 01 - PROFILE</h1>
                        <h2 className="text-[48px] font-bold leading-[38.4px] font-noto">Join the Elite</h2>
                        <p className="text-[16px] leading-6.5 text-light">Secure your position in our luxury beauty ecosystem. Your business profile is the first step toward escrow-protected growth.</p>
                        <div className="bg-light p-6 border border-gray-200 rounded mt-10">
                            <p className="flex items-center gap-3 text-primary text-[16px] leading-6 tracking-[0.8px]"><ShieldCheck className="w-5 h-6" fill="blue" color="white" /> ESCROW PROTECTED</p>
                            <p className="text-[14px] leading-5.25 text-light">Every transaction on Betatrus is protected by our automated escrow system, ensuring you get paid for every masterpiece.</p>
                        </div>
                    </section>
                </div>
            </main>        
        </div>
    );
}

export default StepOne;