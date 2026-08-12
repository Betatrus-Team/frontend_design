import { ArrowLeft, ArrowRight, Camera, CheckCircle2, CloudUpload, File, House, IdCardLanyard, LockKeyhole, ScanFace, ShieldCheck } from "lucide-react";
import { VendorHeader } from "./components/header";
import verifyImage from "../../assets/images/Identity verification example.png";
import bioImage from "../../assets/images/Example Selfie Verification.png";
import { useRef, useState } from "react";
import Footer from "./components/footer";

const StepTwo = () => {
    const cacUpload = useRef<HTMLInputElement>(null);
    const vninUpload = useRef<HTMLInputElement>(null);
    const [doc, setDoc] = useState({
        vnin : null as File | null,
        cac : null as File | null
    });
    return (
        <div>
            <VendorHeader />
            <main className="flex flex-col items-center pt-15 bg-[#FCF9F8] h-fit">
                <div className="lg:w-[90%] w-[95%] font-manrope mb-20">
                    <section className="font-manrope w-full space-y-3 mb-20">
                        <h1 className="text-primary md:text-[12px] text-[10px] font-semibold leading-[14.4px] tracking-[1.2px]">STEP 02 — IDENTITY VERIFICATION</h1>
                        <h2 className="font-noto lg:text-[48px] md:text-[38px] text-[28px] leading-[52.8px] tracking-[-0.96px] font-bold">KYC & Verification</h2>
                        <div className="flex justify-between">
                            <p className="md:text-[18px] text-[14px] leading-[28.8px] w-1/2 text-light">To ensure the integrity of our luxury marketplace and secure escrow protections, please provide the following legal documentation for your boutique.</p>
                            <div className="flex justify-center gap-1 bg-gray-100 h-fit w-fit rounded border border-gray-200 md:p-4 p-2">
                                <ShieldCheck fill="blue" color="white" className="md:w-6 w-4 md:h-7 h-5" />
                                <div>
                                    <p className="md:text-[10px] text-[8px] leading-3 tracking-[0.8px] font-bold">DATA PRIVACY</p>
                                    <p className="md:text-[14px] text-[10px] leading-4.25 text-light">Encrypted & Guaranteed</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex md:flex-row flex-col justify-between">
                        <section className="lg:w-[25%] md:w-[35%] w-full space-y-5">
                            <section className="bg-white border border-gray-100 p-6">
                                <h3 className="font-bodoni lg:text-[24px] text-[18px] leading-[31.2px] font-medium mb-4">Image Guidelines</h3>
                                <ul className="*:flex *:gap-2 *:items-baseline *:lg:text-[16px] *:text-[14px] space-y-4">
                                    <li className="text-light"><CheckCircle2 color="blue" className="w-3.5 h-3.5" /> Ensure documents are well-lit and all text is legible.</li>
                                    <li className="text-light"><CheckCircle2 color="blue" className="w-3.5 h-3.5" /> Capture all four corners of the document.</li>
                                    <li className="text-light"><CheckCircle2 color="blue" className="w-3.5 h-3.5" /> Files must be in JPG, PNG, or PDF format (Max 10MB).</li>
                                </ul>
                            </section>
                            <section className="w-full h-64 relative">
                                <img src={verifyImage} alt="verification image template" className="w-full h-full object-fit" />
                                <div className="w-full h-full absolute top-0 left-0 flex items-end-safe p-3">
                                    <p className="text-button text-[12px] leading-3.5 font-semibold">VERIFIED SECURITY STANDARDS</p>
                                </div>
                            </section>
                        </section>
                        <section className="lg:w-[70%] md:w-[60%] w-full flex flex-col gap-6">
                            <section className="p-6 bg-white border border-gray-200">
                                <h3 className="flex justify-between items-center font-bodoni lg:text-[24px] text-[20px] font-medium leading-[31.2px]">Personal Identification <IdCardLanyard className="text-[#8E706E]" /></h3>
                                <p className="text-[14px] leading-5.25 text-light mb-6">Upload your NIN or vNIN (National Identification Number)</p>
                                <form action="" className="flex justify-between items-end">
                                    <div className="flex flex-col w-[49%] gap-2">
                                        <label htmlFor="IdNumber" className="text-[10px] font-bold leading-3 tracking-[0.8px]">IDENTIFICATION NUMBER</label>
                                        <input type="text" name="" id="" placeholder="Enter 11-digit NIN or vNIN" className="text-light px-2 py-3 bg-[#FCF9F8] border border-[#8e706e9f]" />
                                    </div>
                                    <div className="px-2 py-3 bg-[#FCF9F8] border border-[#8e706e9f] flex flex-col w-[49%] cursor-pointer" onClick={() => vninUpload.current?.click()}>
                                        <input type="file" name="" id="" placeholder="Enter 11-digit NIN or vNIN" className={`${doc.vnin === null ? "hidden" : "block"}`} ref={vninUpload} onChange={(e) => setDoc({...doc, vnin: e.target.files?.[0] ?? null,})} />
                                        <p className={`${doc.vnin === null ? "block" : "hidden"} flex justify-center font-semibold gap-1 text-[12px]`}><File className="w-3 h-4" /> UPLOAD DOCUMENT</p>
                                    </div>
                                </form>
                            </section>
                            <section className="p-6 bg-white border border-gray-200">
                                <h3 className="flex justify-between items-center font-bodoni lg:text-[24px] text-[20px] font-medium leading-[31.2px]">Business Registration <House className="text-[#8E706E]" /></h3>
                                <p className="text-[14px] leading-5.25 text-light mb-6">CAC Registration Certificate (Corporate Affairs Commission)</p>
                                <form action="" className="flex justify-between items-end">
                                    <div className="px-2 py-3 h-20 bg-[#FCF9F8] border border-dashed border-[#8e706e9f] flex flex-col items-center justify-center w-full cursor-pointer" onClick={() => cacUpload.current?.click()}>
                                        <input type="file" name="" id="" placeholder="Enter 11-digit NIN or vNIN" className={`${doc.cac === null ? "hidden" : "block"}`} ref={cacUpload} onChange={(e) => setDoc({...doc,            cac: e.target.files?.[0] ?? null,})} />
                                        <div className={`${doc.cac === null ? "block" : "hidden"}`}>
                                            <CloudUpload />
                                            <p className="text-light text-[12px]">Drag and drop your CAC Certificate here</p>
                                            <p className="font-semibold text-[10px]">OR CLICK TO BROWSE FILES</p>
                                        </div>
                                    </div>
                                </form>
                            </section>
                            <section className="p-6 bg-white border border-gray-200">
                                <h3 className="flex justify-between items-center font-bodoni lg:text-[24px] text-[20px] font-medium leading-[31.2px]">Biometric Liveness <ScanFace className="text-[#8E706E]" /></h3>
                                <p className="text-[14px] leading-5.25 text-light mb-6">A selfie holding your ID card next to your face</p>
                                <section className="flex *:w-[48%] justify-between items-center">
                                    <div className="w-full lg:h-85.25 h-55.25 relative">
                                        <img src={bioImage} alt="" className="h-full w-full" />
                                        <div className=" w-full h-full absolute top-0 left-0 flex flex-col items-center justify-end-safe py-15 text-button gap-2">
                                            <Camera />
                                            <p className="font-semibold text-[14px] leading-[14.4px]">OPEN CAMERA</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="bg-[#b0242918] border-l-4 p-4 h-fit border-primary mb-4">
                                            <p className="text-primary lg:text-[12px] text-[10px] font-semibold leading-3.5 tracking-[0.6px] mb-2">PRO-TIP</p>
                                            <p className="lg:text-[14px] text-[12px] leading-4.25 text-[#5A413F]">Hold the card without covering your name or photo with your fingers. Ensure our face is fully visible within the frame.</p>
                                        </div>
                                        <button className="bg-button text-white w-full py-4 flex items-center justify-center text-[12px] font-semibold leading-[14.4px] tracking-[1.2px]">TAKE SELFIE NOW</button>
                                    </div>
                                </section>
                            </section>
                            <section className="flex justify-between">
                                <p className="lg:text-[12px] text-[10px] font-semibold leading-[14.4px] tracking-[0.6px] flex gap-2 items-center"><ArrowLeft className="lg:w-4 w-3 lg:h-5 h-4" /> BACK TO STEP 1</p>
                                <p className="lg:text-[10px] text-[8px] font-bold leading-3 tracking-[0.8px] flex gap-2 items-center"><LockKeyhole fill="blue" color="white" className="lg:w-4 w-3 lg:h-5 h-4" /> SECURE ENCRYPTION</p>
                                <button className="bg-button rounded-2xl text-white lg:px-8 px-4 py-4 flex lg:gap-2 gap-1 items-center justify-center lg:text-[12px] text-[10px] font-semibold leading-[14.4px] tracking-[1.2px]">SUBMIT FOR VERIFICATION <ArrowRight className="lg:w-4 w-3 lg:h-5 h-4" /></button>
                            </section>
                        </section>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default StepTwo