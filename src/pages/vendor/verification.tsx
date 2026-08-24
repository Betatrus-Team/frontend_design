import { AlertTriangle, BriefcaseBusinessIcon, Building2, CheckCircle2, Clock3, FileWarning, Landmark, Lock, LockKeyhole, ShieldCheck, Zap } from "lucide-react";
import { VendorHeader } from "./components/header"
import { PageTitle } from "../../components/title";

const Verification = () => {
    return (
        <div>
            <PageTitle title={"BETATRUS VENDOR | VERIFICATION"} />
            <VendorHeader title="Verification" />
            <main className="font-manrope flex justify-center bg-gray-50 pb-22">
                <div className="lg:w-[90%] w-[95%] lg:my-15 md:my-10 mt-7 mb-10">
                    {/* Page Heading */}
                    <section className="mb-8">
                        <h1 className="text-[32px] font-noto font-semibold text-gray-900">
                        Verification Status
                        </h1>

                        <p className="mt-2 max-w-2xl text-[16px] leading-6 text-gray-500">
                        Complete your profile to unlock premium marketplace features and
                        the prestigious Betatrus Verified badge.
                        </p>
                    </section>


                    {/* Verification Content */}
                    <div className="flex w-full flex-col gap-6 lg:flex-row">

                        {/* Documentation Progress */}
                        <div className="w-full rounded-lg bg-white p-6 lg:w-[65%]">

                        <p className="mb-5 text-[12px] font-medium tracking-wider text-gray-500">
                            DOCUMENTATION PROGRESS
                        </p>


                        {/* Identity Verification */}
                        <div className="mb-4 flex w-full flex-col gap-4 rounded-lg bg-light p-4 sm:flex-row sm:items-center sm:justify-between">

                            <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white">
                                <BriefcaseBusinessIcon
                                size={21}
                                className="text-primary"
                                />
                            </div>

                            <div>
                                <h3 className="text-[16px] font-semibold text-gray-900">
                                Identity Verification
                                </h3>

                                <p className="mt-0.5 text-[14px] text-gray-500">
                                Government issued ID or Passport
                                </p>
                            </div>
                            </div>

                            <div className="flex w-fit items-center gap-1 rounded-lg bg-green-50 px-3 py-1.5 text-[14px] text-green-600">
                            <CheckCircle2 size={16} />
                            VERIFIED
                            </div>

                        </div>


                        {/* Business Registration */}
                        <div className="mb-4 flex w-full flex-col gap-4 rounded-lg border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between">

                            <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-light">
                                <Building2
                                size={21}
                                className="text-gray-600"
                                />
                            </div>

                            <div>
                                <h3 className="text-[16px] font-semibold text-gray-900">
                                Business Registration
                                </h3>

                                <p className="mt-0.5 text-[14px] text-gray-500">
                                Articles of Incorporation
                                </p>
                            </div>
                            </div>

                            <div className="flex flex-col items-start sm:items-end">
                                <div className="flex w-fit items-center gap-1 rounded-lg bg-red-50 px-3 py-1.5 text-[14px] text-primary">
                                    <AlertTriangle size={15} />
                                    ACTION REQUIRED
                                </div>

                                <button className="mt-2 text-[14px] text-primary underline">
                                    RE-UPLOAD
                                </button>
                            </div>

                        </div>


                        {/* Bank Setup */}
                        <div className="flex w-full flex-col gap-4 rounded-lg bg-light p-4 sm:flex-row sm:items-center sm:justify-between">

                            <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white">
                                <Landmark
                                size={21}
                                className="text-gray-600"
                                />
                            </div>

                            <div>
                                <h3 className="text-[16px] font-semibold text-gray-900">
                                Bank Setup
                                </h3>

                                <p className="mt-0.5 text-[14px] text-gray-500">
                                Escrow account integration
                                </p>
                            </div>
                            </div>

                            <div className="flex w-fit items-center gap-1 rounded-lg bg-gray-200 px-3 py-1.5 text-[14px] text-gray-500">
                            <Clock3 size={15} />
                            PENDING
                            </div>

                        </div>

                        </div>


                        {/* Verified Badge */}
                        <div className="w-full rounded-lg bg-white p-7 lg:w-[35%]">

                        <div className="mb-5 flex justify-center">
                            <div className="flex h-28 w-28 items-center justify-center rounded-xl border-4 border-primary">
                            <ShieldCheck
                                size={55}
                                className="text-primary"
                            />
                            </div>
                        </div>

                        <h2 className="text-center font-serif text-[26px] text-gray-900">
                            Betatrus Verified
                        </h2>

                        <p className="mt-2 text-center text-[16px] leading-6 text-gray-500">
                            The gold standard for luxury beauty vendors.
                        </p>


                        {/* Benefits */}
                        <div className="mt-7 flex flex-col gap-4">

                            <div className="flex items-center gap-3">
                            <ShieldCheck size={19} className="text-primary" />

                            <span className="text-[15px] text-gray-700">
                                Enhanced Buyer Trust
                            </span>
                            </div>

                            <div className="flex items-center gap-3">
                            <Zap size={19} className="text-primary" />

                            <span className="text-[15px] text-gray-700">
                                Priority Search Listing
                            </span>
                            </div>

                            <div className="flex items-center gap-3">
                            <LockKeyhole size={19} className="text-primary" />

                            <span className="text-[15px] text-gray-700">
                                Instant Escrow Release
                            </span>
                            </div>

                        </div>

                        </div>

                    </div>


                    {/* Alerts */}
                    <div className="mt-6 flex w-full flex-col gap-6 lg:flex-row">

                        {/* Missing Document */}
                        <div className="w-full rounded-r-lg border-l-4 border-primary bg-red-50 p-6 lg:w-[65%]">

                        <div className="flex items-start gap-4">

                            <FileWarning
                            size={22}
                            className="mt-0.5 shrink-0 text-primary"
                            />

                            <div>
                            <h3 className="text-[16px] font-semibold text-gray-900">
                                Missing Document: Tax Residency Certificate
                            </h3>

                            <p className="mt-2 text-[15px] leading-6 text-gray-600">
                                Your document expired on Oct 12, 2023. Please upload a
                                current version to maintain your high-trust vendor score.
                            </p>

                            <button className="mt-4 rounded bg-primary px-6 py-2.5 text-[15px] text-white transition-opacity hover:opacity-90">
                                Upload Now
                            </button>
                            </div>

                        </div>

                        </div>


                        {/* Escrow Protected */}
                        <div className="w-full rounded-lg bg-primary p-6 lg:w-[35%]">

                        <div className="flex items-center gap-2 text-white">
                            <ShieldCheck size={18} />

                            <span className="text-[15px] font-medium">
                            ESCROW PROTECTED
                            </span>
                        </div>

                        <p className="mt-3 text-[14px] leading-6 text-white/80">
                            All transactions are held in secure escrow until customer
                            confirmation.
                        </p>

                        </div>

                    </div>


                    {/* Verification Requirements */}
                    <section className="mt-20">

                        <h2 className="mb-8 font-serif text-[26px] text-gray-900">
                        Verification Requirements
                        </h2>


                        <div className="flex w-full flex-col gap-10 md:flex-row">

                        {/* Legal Entity */}
                        <div className="w-full md:w-[33.33%]">
                            <h3 className="mb-3 text-[15px] font-semibold text-gray-900">
                            LEGAL ENTITY
                            </h3>

                            <p className="text-[15px] leading-6 text-gray-500">
                            Verify that your business is a registered legal entity in
                            its jurisdiction of operation.
                            </p>
                        </div>


                        {/* Compliance */}
                        <div className="w-full md:w-[33.33%]">
                            <h3 className="mb-3 text-[15px] font-semibold text-gray-900">
                            COMPLIANCE
                            </h3>

                            <p className="text-[15px] leading-6 text-gray-500">
                            All vendors must comply with local beauty and cosmetic
                            safety regulations and certifications.
                            </p>
                        </div>


                        {/* Secure Banking */}
                        <div className="w-full md:w-[33.33%]">
                            <h3 className="mb-3 text-[15px] font-semibold text-gray-900">
                            SECURE BANKING
                            </h3>

                            <p className="text-[15px] leading-6 text-gray-500">
                            Requires a verified commercial bank account for high-value
                            transactional security.
                            </p>
                        </div>

                        </div>

                    </section>
                </div>
            </main>
            <footer className="flex sm:flex-row flex-col gap-3 md:items-center md:justify-between text-[16px] leading-6 py-8 sm:px-16 px-5 text-light">
                <p>© 2026 CHISOM PREMIUM HAIR</p>
                <p>PRIVACY POLICY</p>
                <p>TERMS OF SERVICE</p>
                <p className="flex items-center-safe"><Lock className="w-5 h-3.5" /> SSL SECURED ESCROW PAYMENTS</p>
            </footer>
        </div>
    );
}

export default Verification;