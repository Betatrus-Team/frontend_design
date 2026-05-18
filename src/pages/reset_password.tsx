import { ArrowLeft, Heart, Sparkles, Truck } from "lucide-react";
import AuthHeader from "../components/authentication_header";
import AuthInput from "../components/authentication_input";
import Button from "../components/button";

const ResetPassword = () => {
    return (
        <div>
            <AuthHeader />
            <main className="w-full justify-center items-center flex flex-col">
                <section className="w-[50%] py-10 text-center space-y-5 mb-10">
                    <h2 className="font-serif italic text-[48px] leading-12 text-primary">Welcome Back</h2>
                    <p className="font-manrope text-[18px] leading-[29.3px] text-[#504441]">Join our community of style connoisseurs. Save your favorites to a wishlist and track your orders with effortless grace.</p>
                </section>
                <section className="w-[60%] p-15 rounded-2xl shadow-2xl text-[#1A1C1A]">
                    <h3 className="font-serif text-[38.16px] leading-[45.8px] text-center">Reset Your Password</h3>
                    <div className="flex justify-center mt-4 mb-10.5">
                        <p className="font-manrope text-[18px] leading-7.5 tracking-[1.2px] text-center w-[80%]">Enter the email address associated with your account and we'll send you a link to reset your password.</p>
                    </div>
                    <form action="post" className="space-y-5">
                        <AuthInput label="Email Address" atrribute="email" placeholder="email@example.com" type="email" extra="h-[71.24px]" />
                        <p className="text-[15.26px] text-[#02102D] leading-5 font-manrope text-end">Forgot Password?</p>
                        <Button label="Send Reset Link" extra="bg-[#02102D] w-full rounded-none py-[10px] text-manrope text-[16px] leading-6 text-white mt-5" />
                        <p className="font-manrope text-[14px] leading-4 tracking-[1.53px] text-center text-[##02102D] flex justify-center items-center gap-2"><ArrowLeft size={14} /> Back to Login</p>
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

export default ResetPassword;