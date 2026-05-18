import AuthHeader from "../components/authentication_header";
import AuthInput from "../components/authentication_input";
import Button from "../components/button";
import AuthWriteup from "../components/authentication_writeup";
import { ArrowLeft } from "lucide-react";

const ResetPassword = () => {
    return (
        <div>
            <AuthHeader />
            <main className="w-full justify-center items-center flex flex-col">
                <section className="lg:w-[50%] md:w-[75%] w-[90%] py-10 text-center space-y-5 mb-10">
                    <h2 className="font-serif italic md:text-[48px] text-[25px] leading-12 text-primary">Welcome Back</h2>
                    <p className="font-manrope md:text-[18px] text-[14px] leading-[29.3px] text-[#504441]">Join our community of style connoisseurs. Save your favorites to a wishlist and track your orders with effortless grace.</p>
                </section>
                <section className="lg:w-[60%] md:w-[80%] w-[90%] lg:p-15 md:px-10 py-15 px-5 rounded-2xl shadow-2xl text-[#1A1C1A]">
                    <h3 className="font-serif md:text-[30px] text-[20px] leading-[45.8px] text-center">Reset Your Password</h3>
                    <div className="flex justify-center mt-4 mb-10.5">
                        <p className="font-manrope md:text-[18px] text-[14px] leading-7.5 tracking-[1.2px] text-center w-[80%]">Enter the email address associated with your account and we'll send you a link to reset your password.</p>
                    </div>
                    <form action="post" className="space-y-5">
                        <AuthInput label="Email Address" atrribute="email" placeholder="email@example.com" type="email" extra="h-[71.24px]" />
                        <Button label="Send Reset Link" extra="bg-[#02102D] w-full rounded-none py-[10px] text-manrope text-[16px] leading-6 text-white mt-5" />
                        <p className="font-manrope text-[14px] leading-4 tracking-[1.53px] text-center text-[##02102D] flex justify-center items-center gap-2"><ArrowLeft size={14} /> Back to Login</p>
                    </form>
                </section>
                <AuthWriteup />
            </main>
        </div>
    );
}

export default ResetPassword;