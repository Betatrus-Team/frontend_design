import AuthHeader from "../components/authentication_header";
import AuthInput from "../components/authentication_input";
import Button from "../components/button";
import AuthWriteup from "../components/authentication_writeup";

const SignIn = () => {
    return (
        <div>
            <AuthHeader />
            <main className="w-full justify-center items-center flex flex-col">
                <section className="lg:w-[50%] md:w-[75%] w-[90%] py-10 text-center space-y-5 mb-10">
                    <h2 className="font-noto italic md:text-[48px] text-[25px] leading-12 text-primary">Welcome Back</h2>
                    <p className="font-manrope md:text-[18px] text-[14px] leading-[29.3px] text-[#504441]">Join our community of style connoisseurs. Save your favorites to a wishlist and track your orders with effortless grace.</p>
                </section>
                <section className="lg:w-[60%] md:w-[80%] w-[90%] lg:p-15 md:px-10 py-15 px-5 rounded-2xl shadow-2xl text-[#1A1C1A]">
                    <h3 className="font-noto md:text-[30px] text-[20px] leading-[45.8px] text-center">Sign In</h3>
                    <form action="post" className="space-y-5">
                        <AuthInput label="Email Address" atrribute="email" placeholder="email@example.com" type="email" extra="h-[71.24px]" />
                        <AuthInput label="Password" atrribute="password" placeholder="enter your password" type="password" extra="h-[71.24px]" />
                        <p className="text-[15.26px] text-primary leading-5 font-manrope text-end">Forgot Password?</p>
                        <Button label="Sign In" extra="bg-primary w-full rounded-none py-[10px] text-manrope text-[16px] leading-6 text-white mt-5" />
                        <p className="font-manrope md:text-[15.26px] text-[12px] leading-[20.4px] tracking-[1.53px] text-center text-[##02102D]">Don’t have an account? Sign up</p>
                    </form>
                </section>
                <AuthWriteup />
            </main>
        </div>
    );
}

export default SignIn;