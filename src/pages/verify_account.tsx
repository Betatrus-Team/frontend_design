import AuthHeader from "../components/authentication_header";
import Button from "../components/button";
import AuthWriteup from "../components/authentication_writeup";

const VerifyAccount = () => {
    return (
        <div>
            <AuthHeader />
            <main className="w-full justify-center items-center flex flex-col">
                <section className="lg:w-[50%] md:w-[75%] w-[90%] md:py-10 py-2 text-center space-y-5 mb-10">
                    <h2 className="font-noto italic md:text-[48px] text-[25px] leading-12 text-primary">Welcome to BETATRUS</h2>
                    <p className="font-manrope md:text-[18px] text-[14px] leading-[29.3px] text-[#504441]">Join our community of style connoisseurs. Save your favorites to a wishlist and track your orders with effortless grace.</p>
                </section>
                <section className="lg:w-[60%] md:w-[80%] w-[90%] lg:p-15 md:px-10 py-15 rounded-2xl text-[#1A1C1A]">
                    <h3 className="font-noto md:text-[30px] text-[20px] md:leading-[45.8px] leading-5 text-center">Verify Your Account</h3>
                    <div className="flex justify-center mt-4 mb-10.5">
                        <p className="font-manrope md:text-[14px] leading-4 tracking-[1.2px] text-center md:w-[80%] w-full">A six digit one-time code has being sent to your mail aust********18@gmail.com. Kindly enter it to verify your account</p>
                    </div>
                    <form action="post" className="space-y-5 flex flex-col items-center">
                        <div className="md:w-[80%] w-full *:w-1/6 space-x-5 md:flex hidden">
                            <input type='text' name="verify" className={`w-full bg-[#F4F3F1] px-[21.62px] py-[20.35px] text-[20.35px] font-manrope rounded-lg`} />
                            <input type='text' name="verify" className={`w-full bg-[#F4F3F1] px-[21.62px] py-[20.35px] text-[20.35px] font-manrope rounded-lg`} />
                            <input type='text' name="verify" className={`w-full bg-[#F4F3F1] px-[21.62px] py-[20.35px] text-[20.35px] font-manrope rounded-lg`} />
                            <input type='text' name="verify" className={`w-full bg-[#F4F3F1] px-[21.62px] py-[20.35px] text-[20.35px] font-manrope rounded-lg`} />
                            <input type='text' name="verify" className={`w-full bg-[#F4F3F1] px-[21.62px] py-[20.35px] text-[20.35px] font-manrope rounded-lg`} />
                            <input type='text' name="verify" className={`w-full bg-[#F4F3F1] px-[21.62px] py-[20.35px] text-[20.35px] font-manrope rounded-lg`} />
                        </div>
                        <div className="flex justify-center md:hidden">
                            <input type='text' name="verify" placeholder="******" className={`w-[90%] bg-[#F4F3F1] px-[21.62px] py-[20.35px] text-[30px] font-bold tracking-[25px] text-center font-manrope rounded-lg`} />
                        </div>
                        <Button label="Verify" extra="bg-[#02102D] w-full rounded-none py-[10px] text-manrope text-[16px] leading-6 text-white mt-5" />
                        <p className="font-manrope text-[15.26px] leading-[20.4px] tracking-[1.53px] text-center text-[##02102D]">Didn’t receive the code? Resend</p>
                    </form>
                </section>
                <AuthWriteup />
            </main>
        </div>
    );
}

export default VerifyAccount;