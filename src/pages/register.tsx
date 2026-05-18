import { Heart, Sparkles, Truck } from "lucide-react";
import AuthHeader from "../components/authentication_header";
import AuthInput from "../components/authentication_input";
import Button from "../components/button";

const Register = () => {
    return (
        <div>
            <AuthHeader />
            <main className="w-full justify-center items-center flex flex-col">
                <section className="w-[50%] py-10 text-center space-y-5 mb-10">
                    <h2 className="font-serif italic text-[48px] leading-12 text-primary">Welcome to BETATRUS</h2>
                    <p className="font-manrope text-[18px] leading-[29.3px] text-[#504441]">Join our community of style connoisseurs. Save your favorites to a wishlist and track your orders with effortless grace.</p>
                </section>
                <section className="w-[60%] p-15 shadow-2xl text-[#1A1C1A]">
                    <h3 className="font-serif text-[30px] leading-9 text-center">Create an Account</h3>
                    <form action="post" className="space-y-5">
                        <AuthInput label="Full Name" atrribute="name" placeholder="Your Name" type="text" extra="h-[56px]" />
                        <AuthInput label="Email Address" atrribute="email" placeholder="email@example.com" type="email" extra="h-[56px]" />
                        <AuthInput label="Phone Number" atrribute="phoneNo" placeholder="090 - 3427 - 756" type="tel" extra="h-[56px]" />
                        <div className="flex w-full *:w-1/2 gap-4">
                            <AuthInput label="Password" atrribute="password" placeholder="enter your password" type="password" />
                            <AuthInput label="Confirm Password" atrribute="confirmPassword" placeholder="confirm your password" type="password" />
                        </div>
                        <div className="flex gap-3">
                            <input type="checkbox" name="terms" id="terms" />
                            <p className="text-[12px] text-[#504441] leading-5 font-manrope">I agree to the Terms of Service and Privacy Policy.</p>
                        </div>
                        <Button label="Sign Up" extra="bg-[#02102D] w-full rounded-none py-[10px] text-manrope text-[16px] leading-6 text-white mt-5" />
                        <p className="font-manrope text-[15.26px] leading-[20.4px] tracking-[1.53px] text-center text-[##02102D]">Already have an account? Log In</p>
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

export default Register;