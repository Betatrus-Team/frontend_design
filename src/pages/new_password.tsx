import { ArrowLeft, Eye, Heart, Info, Sparkles, Truck } from "lucide-react";
import AuthHeader from "../components/authentication_header";
import Button from "../components/button";

const NewPassword = () => {
    return (
        <div>
            <AuthHeader />
            <main className="w-full justify-center items-center flex flex-col">
                <section className="w-[50%] py-10 text-center space-y-5 mb-10">
                    <h2 className="font-serif italic text-[48px] leading-12 text-primary">Welcome Back</h2>
                    <p className="font-manrope text-[18px] leading-[29.3px] text-[#504441]">Join our community of style connoisseurs. Save your favorites to a wishlist and track your orders with effortless grace.</p>
                </section>
                <section className="w-[60%] p-15 rounded-2xl shadow-2xl text-[#1A1C1A]">
                    <h3 className="font-serif text-[38.16px] leading-[45.8px] text-center">Create New Password</h3>
                    <div className="flex justify-center mt-4 mb-10.5">
                        <p className="font-manrope text-[18px] leading-7.5 tracking-[1.2px] text-center w-[80%]">Please enter your new password below. Ensure it is unique to BetaTrus to keep your account secure.</p>
                    </div>
                    <div className="h-17 w-full bg-[#F3F3F3] border-l-5 border-l-[#b0242954] rounded-md p-4 flex gap-3 mb-7.5">
                        <Info className="text-[#B02429]" size={11} />
                        <p className="text-[#5A413F] font-manrope text-[14px] leading-4.5 w-[60%]">Your new password must be at least 8 characters long and include a mix of letters and numbers.</p>
                    </div>
                    <form action="post" className="space-y-7.5">
                        <div className="flex flex-col gap-2.75">
                            <label htmlFor="newPassword" className="text-[#504441] font-manrope text-[17.81px] leading-3.75 font-semibold">NEW PASSWORD</label>
                            <div className="w-full border border-[#E2E2E2] flex">
                                <input type="text" name="newPassword" id="newPassword" placeholder="enter new password" className={`w-[90%] px-[21.62px] py-4.25 text-[20.35px] font-manrope`} />
                                <button className="w-[10%] flex justify-center items-center-safe"><Eye className="text-[#5A413F]" /></button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.75">
                            <label htmlFor="newPassword" className="text-[#504441] font-manrope text-[17.81px] leading-3.75 font-semibold">CONFIRM NEW PASSWORD</label>
                            <div className="w-full border border-[#E2E2E2] flex">
                                <input type="text" name="newPassword" id="newPassword" placeholder="confirm new password" className={`w-[90%] px-[21.62px] py-4.25 text-[20.35px] font-manrope`} />
                                <button className="w-[10%] flex justify-center items-center-safe"><Eye className="text-[#5A413F]" /></button>
                            </div>
                        </div>
                        <Button label="Reset Password" extra="bg-[#DB4444] w-full rounded-none py-[10px] text-manrope text-[16px] leading-6 text-white mt-5" />
                    </form>
                    <p className="font-manrope text-[14px] leading-4 tracking-[1.53px] mt-5 text-center text-[##02102D] flex justify-center items-center gap-2"><ArrowLeft size={14} /> Back to Login</p>
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

export default NewPassword;