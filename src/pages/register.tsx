import AuthHeader from "../components/authentication_header";
import AuthInput from "../components/authentication_input";
import Button from "../components/button";
import AuthWriteup from "../components/authentication_writeup";
import { useNavigate } from "react-router-dom";
import { PageTitle } from "../components/title";

const Register = () => {
    const navigate = useNavigate();
    return (
        <div>
            <PageTitle title={"BETATRUS | SIGN UP"} />
            <AuthHeader />
            <main className="w-full justify-center items-center flex flex-col">
                <section className="lg:w-[50%] md:w-[75%] w-[90%] py-10 text-center space-y-5 mb-10">
                    <h2 className="font-noto italic md:text-[48px] text-[25px] leading-12 text-primary">Welcome to BETATRUS</h2>
                    <p className="font-manrope md:text-[18px] text-[14px] leading-[29.3px] text-[#504441]">Join our community of style connoisseurs. Save your favorites to a wishlist and track your orders with effortless grace.</p>
                </section>
                <section className="lg:w-[60%] md:w-[80%] w-[90%] lg:p-15 md:px-10 py-15 px-5 shadow-2xl text-[#1A1C1A]">
                    <h3 className="font-noto md:text-[30px] text-[20px] mb-5 leading-9 text-center">Create an Account</h3>
                    <form action="post" className="space-y-5">
                        <AuthInput label="Full Name" atrribute="name" placeholder="Your Name" type="text" extra="h-[56px]" />
                        <AuthInput label="Email Address" atrribute="email" placeholder="email@example.com" type="email" extra="h-[56px]" />
                        <AuthInput label="Phone Number" atrribute="phoneNo" placeholder="090 - 3427 - 756" type="tel" extra="h-[56px]" />
                        <div className="flex md:flex-row flex-col w-full *:md:w-1/2 *:w-full gap-4">
                            <AuthInput label="Password" atrribute="password" placeholder="enter your password" type="password" />
                            <AuthInput label="Confirm Password" atrribute="confirmPassword" placeholder="confirm your password" type="password" />
                        </div>
                        <div className="flex gap-3">
                            <input type="checkbox" name="terms" id="terms" />
                            <p className="text-[12px] text-[#504441] leading-5 font-manrope">I agree to the Terms of Service and Privacy Policy.</p>
                        </div>
                        <Button label="Sign Up" extra="bg-primary w-full rounded-none py-[10px] text-manrope text-[16px] leading-6 text-white mt-5" />
                        <p className="font-manrope md:text-[15.26px] text-[12px] leading-[20.4px] tracking-[1.53px] text-center text-[##02102D]">Already have an account? <span className="cursor-pointer" onClick={() => navigate("../sign_in")}>Log In</span></p>
                    </form>
                </section>
                <AuthWriteup />
            </main>
        </div>
    );
}

export default Register;