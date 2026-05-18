import { Heart, Sparkles, Truck } from "lucide-react";
import AuthHeader from "../components/authentication_header";
import Button from "../components/button";

const VerifyAccount = () => {
    return (
        <div>
            <AuthHeader />
            <main className="w-full justify-center items-center flex flex-col">
                <section className="w-[50%] py-10 text-center space-y-5 mb-10">
                    <h2 className="font-serif italic text-[48px] leading-12 text-primary">Welcome to BETATRUS</h2>
                    <p className="font-manrope text-[18px] leading-[29.3px] text-[#504441]">Join our community of style connoisseurs. Save your favorites to a wishlist and track your orders with effortless grace.</p>
                </section>
                <section className="w-[50%] p-15 rounded-2xl text-[#1A1C1A]">
                    <h3 className="font-serif text-[38.16px] leading-[45.8px] text-center">Verify Your Account</h3>
                    <div className="flex justify-center mt-4 mb-10.5">
                        <p className="font-manrope text-[14px] leading-4 tracking-[1.2px] text-center w-[80%]">A six digit one-time code has being sent to your mail aust********18@gmail.com. Kindly enter it to verify your account</p>
                    </div>
                    <form action="post" className="space-y-5 flex flex-col items-center">
                        <div className="w-[80%] *:w-1/6 space-x-5 flex">
                            <input type='text' name="verify" className={`w-full bg-[#F4F3F1] px-[21.62px] py-[20.35px] text-[20.35px] font-manrope rounded-lg`} />
                            <input type='text' name="verify" className={`w-full bg-[#F4F3F1] px-[21.62px] py-[20.35px] text-[20.35px] font-manrope rounded-lg`} />
                            <input type='text' name="verify" className={`w-full bg-[#F4F3F1] px-[21.62px] py-[20.35px] text-[20.35px] font-manrope rounded-lg`} />
                            <input type='text' name="verify" className={`w-full bg-[#F4F3F1] px-[21.62px] py-[20.35px] text-[20.35px] font-manrope rounded-lg`} />
                            <input type='text' name="verify" className={`w-full bg-[#F4F3F1] px-[21.62px] py-[20.35px] text-[20.35px] font-manrope rounded-lg`} />
                            <input type='text' name="verify" className={`w-full bg-[#F4F3F1] px-[21.62px] py-[20.35px] text-[20.35px] font-manrope rounded-lg`} />
                        </div>
                        <Button label="Verify" extra="bg-[#02102D] w-full rounded-none py-[10px] text-manrope text-[16px] leading-6 text-white mt-5" />
                        <p className="font-manrope text-[15.26px] leading-[20.4px] tracking-[1.53px] text-center text-[##02102D]">Didn’t receive the code? Resend</p>
                    </form>
                </section>
                <section className="w-[80%] my-25 p-10 flex *:w-[32%] text-[#504441] justify-between">
                    <div className="flex flex-col justify-center items-center gap-2 p-2">
                        <Heart size={24} />
                        <h3 className="font-serif text-[20px] leading-7 italic">Curated Wishlist</h3>
                        <p className="text-center font-manrope text-[14px] leading-5">Save your favorite editorial pieces and revisit them whenever inspiration strikes.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 p-2">
                        <Truck size={24} />
                        <h3 className="font-serif text-[20px] leading-7 italic">Seamless Tracking</h3>
                        <p className="text-center font-manrope text-[14px] leading-5">From the warehouse to your doorstep, follow every step of your order's voyage.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 p-2">
                        <Sparkles size={24} />
                        <h3 className="font-serif text-[20px] leading-7 italic">Exclusive Previews</h3>
                        <p className="text-center font-manrope text-[14px] leading-5">Be the first to explore our seasonal collections and limited-edition hair care releases.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default VerifyAccount;