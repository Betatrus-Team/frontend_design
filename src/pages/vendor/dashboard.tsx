import { Bell, LockKeyhole, Plus, ShieldCheck, TrendingUp, WalletCards } from "lucide-react";
import { VendorHeader } from "./components/header"
import { PageTitle } from "../../components/title";

const VendorDashboard = () => {
    return (
        <div>
            <PageTitle title={"BETATRUS VENDOR | DASHBOARD"} />
            <VendorHeader title="Dashboard" />
            <main className="font-manrope flex justify-center bg-gray-50 pb-22">
                <div className="lg:w-[90%] w-[95%] lg:my-15 md:my-10 mt-7 mb-10">
                    
                    {/* Page Heading */}
                    <section className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                        <div>
                        <p className="text-[12px] font-medium tracking-wider text-primary">
                            WELCOME BACK
                        </p>

                        <h1 className="mt-1 font-serif text-[48px] leading-tight text-gray-900">
                            Overview
                        </h1>
                        </div>


                        {/* Page Actions */}
                        <div className="flex gap-3">

                        <button className="border border-gray-200 bg-white px-6 py-3 text-[13px] text-gray-800 hover:bg-gray-50">
                            DOWNLOAD REPORT
                        </button>

                        <button className="bg-primary px-6 py-3 text-[13px] text-white hover:opacity-90">
                            REQUEST PAYOUT
                        </button>

                        </div>

                    </section>


                    {/* Dashboard Content */}
                    <div className="flex w-full flex-col gap-6 lg:flex-row">

                        {/* Main Content */}
                        <div className="w-full lg:w-[75%]">


                            {/* Statistics */}
                            <div className="flex flex-col gap-4 md:flex-row">

                                {/* Total Sales */}
                                <div className="w-full border border-gray-200 bg-white p-4 md:w-[25%]">

                                    <p className="text-[12px] font-medium text-gray-500">
                                        TOTAL SALES
                                    </p>

                                    <h2 className="mt-5 font-serif text-[26px] text-gray-900">
                                        ₦4,820,000
                                    </h2>

                                    <p className="mt-1 text-[13px] text-primary flex items-center gap-2">
                                        <TrendingUp size={20} /> +12% this month
                                    </p>

                                </div>


                                {/* Active Orders */}
                                <div className="w-full border border-gray-200 bg-white p-4 md:w-[25%]">

                                <p className="text-[12px] font-medium text-gray-500">
                                    ACTIVE ORDERS
                                </p>

                                <h2 className="mt-5 font-serif text-[26px] text-gray-900">
                                    24
                                </h2>

                                <p className="mt-1 text-[13px] text-gray-500">
                                    8 ready for pickup
                                </p>

                                </div>


                                {/* Escrow Balance */}
                                <div className="w-full border border-gray-200 bg-white p-4 md:w-[25%]">

                                <p className="text-[12px] font-medium text-gray-500">
                                    ESCROW BALANCE
                                </p>

                                <h2 className="mt-5 font-serif text-[26px] text-gray-900">
                                    ₦840,500
                                </h2>

                                <div className="mt-1 flex w-fit items-center gap-1 bg-red-50 px-2 py-1 text-primary">
                                    <LockKeyhole size={11} />

                                    <span className="text-[10px]">
                                    SECURE
                                    </span>
                                </div>

                                </div>


                                {/* Shop Rating */}
                                <div className="w-full border border-gray-200 bg-white p-4 md:w-[25%]">

                                <p className="text-[12px] font-medium text-gray-500">
                                    SHOP RATING
                                </p>

                                <h2 className="mt-5 font-serif text-[26px] text-gray-900">
                                    4.9
                                </h2>

                                <p className="mt-1 text-[13px] text-gray-500">
                                    Based on 128 reviews
                                </p>

                                </div>

                            </div>


                            {/* Recent Sales */}
                            <section className="mt-6 w-full overflow-hidden border border-gray-200 bg-white">

                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">

                                <h2 className="font-serif text-[22px] text-gray-900">
                                Recent Sales
                                </h2>

                                <button className="text-[13px] text-primary hover:underline">
                                View All
                                </button>

                            </div>


                            {/* Table */}
                            <div className="w-full overflow-x-auto">

                                <table className="w-full min-w-150 border-collapse">

                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50">

                                    <th className="px-5 py-4 text-left text-[12px] font-medium text-gray-500">
                                        CUSTOMER
                                    </th>

                                    <th className="px-5 py-4 text-left text-[12px] font-medium text-gray-500">
                                        PRODUCT
                                    </th>

                                    <th className="px-5 py-4 text-left text-[12px] font-medium text-gray-500">
                                        AMOUNT
                                    </th>

                                    <th className="px-5 py-4 text-left text-[12px] font-medium text-gray-500">
                                        STATUS
                                    </th>

                                    {/* Hide date on smaller screens */}
                                    <th className="hidden px-5 py-4 text-left text-[12px] font-medium text-gray-500 md:table-cell">
                                        DATE
                                    </th>

                                    </tr>
                                </thead>


                                <tbody>

                                    {/* Sale 1 */}
                                    <tr className="border-b border-gray-100">

                                    <td className="px-5 py-5 text-[14px] text-gray-700">
                                        Adewale K.
                                    </td>

                                    <td className="px-5 py-5 font-serif text-[15px] text-gray-800">
                                        Silk Finish Foundation
                                    </td>

                                    <td className="px-5 py-5 font-serif text-[14px] text-gray-800">
                                        ₦45,000
                                    </td>

                                    <td className="px-5 py-5">
                                        <span className="rounded-full bg-green-50 px-3 py-1 text-[12px] text-green-600">
                                        • Completed
                                        </span>
                                    </td>

                                    <td className="hidden px-5 py-5 text-[14px] text-gray-600 md:table-cell">
                                        Oct 12, 2023
                                    </td>

                                    </tr>


                                    {/* Sale 2 */}
                                    <tr className="border-b border-gray-100">

                                    <td className="px-5 py-5 text-[14px] text-gray-700">
                                        Chinelo O.
                                    </td>

                                    <td className="px-5 py-5 font-serif text-[15px] text-gray-800">
                                        Organic Shea Butter Set
                                    </td>

                                    <td className="px-5 py-5 font-serif text-[14px] text-gray-800">
                                        ₦12,500
                                    </td>

                                    <td className="px-5 py-5">
                                        <span className="rounded-full bg-yellow-50 px-3 py-1 text-[12px] text-yellow-600">
                                        • Escrow Pending
                                        </span>
                                    </td>

                                    <td className="hidden px-5 py-5 text-[14px] text-gray-600 md:table-cell">
                                        Oct 14, 2023
                                    </td>

                                    </tr>


                                    {/* Sale 3 */}
                                    <tr className="border-b border-gray-100">

                                    <td className="px-5 py-5 text-[14px] text-gray-700">
                                        Fatima R.
                                    </td>

                                    <td className="px-5 py-5 font-serif text-[15px] text-gray-800">
                                        Lash Extension Pro Kit
                                    </td>

                                    <td className="px-5 py-5 font-serif text-[14px] text-gray-800">
                                        ₦85,500
                                    </td>

                                    <td className="px-5 py-5">
                                        <span className="rounded-full bg-blue-50 px-3 py-1 text-[12px] text-blue-600">
                                        • Shipped
                                        </span>
                                    </td>

                                    <td className="hidden px-5 py-5 text-[14px] text-gray-600 md:table-cell">
                                        Oct 15, 2024
                                    </td>

                                    </tr>


                                    {/* Sale 4 */}
                                    <tr className="border-b border-gray-100">

                                    <td className="px-5 py-5 text-[14px] text-gray-700">
                                        Adewale K.
                                    </td>

                                    <td className="px-5 py-5 font-serif text-[15px] text-gray-800">
                                        Silk Finish Foundation
                                    </td>

                                    <td className="px-5 py-5 font-serif text-[14px] text-gray-800">
                                        ₦45,000
                                    </td>

                                    <td className="px-5 py-5">
                                        <span className="rounded-full bg-green-50 px-3 py-1 text-[12px] text-green-600">
                                        • Completed
                                        </span>
                                    </td>

                                    <td className="hidden px-5 py-5 text-[14px] text-gray-600 md:table-cell">
                                        Oct 12, 2025
                                    </td>

                                    </tr>


                                    {/* Sale 5 */}
                                    <tr>

                                    <td className="px-5 py-5 text-[14px] text-gray-700">
                                        Chinelo O.
                                    </td>

                                    <td className="px-5 py-5 font-serif text-[15px] text-gray-800">
                                        Organic Shea Butter Set
                                    </td>

                                    <td className="px-5 py-5 font-serif text-[14px] text-gray-800">
                                        ₦12,500
                                    </td>

                                    <td className="px-5 py-5">
                                        <span className="rounded-full bg-yellow-50 px-3 py-1 text-[12px] text-yellow-600">
                                        • Escrow Pending
                                        </span>
                                    </td>

                                    <td className="hidden px-5 py-5 text-[14px] text-gray-600 md:table-cell">
                                        Oct 14, 2023
                                    </td>

                                    </tr>

                                </tbody>

                                </table>

                            </div>

                            </section>

                        </div>


                        {/* Right Sidebar */}
                        <aside className="flex w-full flex-col gap-6 lg:w-[25%]">


                        {/* Quick Actions */}
                        <div className="bg-[#1b1b1b] p-6 text-white">

                            <h2 className="font-serif text-[26px] italic">
                            Quick Actions
                            </h2>


                            <div className="mt-6 flex flex-col gap-2">

                            <button className="flex items-center justify-between bg-[#333333] px-5 py-4 text-left text-[13px] hover:bg-[#444444]">

                                <span>
                                ADD NEW PRODUCT
                                </span>

                                <Plus size={22} />

                            </button>


                            <button className="flex items-center justify-between bg-[#333333] px-5 py-4 text-left text-[13px] hover:bg-[#444444]">

                                <span>
                                PENDING ORDERS
                                </span>

                                <Bell size={20} />

                            </button>


                            <button className="flex items-center justify-between bg-primary px-5 py-4 text-left text-[13px] hover:opacity-90">

                                <span>
                                REQUEST PAYOUT
                                </span>

                                <WalletCards size={20} />

                            </button>

                            </div>

                        </div>


                        {/* Verification Status */}
                        <div className="border border-gray-200 bg-white p-6">

                            <div className="flex items-center gap-2">
                            <ShieldCheck
                                size={22}
                                className="text-primary"
                            />

                            <h2 className="text-[14px] font-medium text-gray-900">
                                VERIFICATION STATUS
                            </h2>
                            </div>


                            {/* Progress */}
                            <div className="mt-5 h-2 w-full bg-gray-200">
                            <div className="h-full w-[85%] bg-primary" />
                            </div>


                            <p className="mt-5 text-[15px] leading-6 text-gray-500">
                            Your shop is 85% verified. Complete your biometric profile to
                            unlock higher payout limits.
                            </p>


                            <button className="mt-4 text-[13px] text-primary underline">
                            COMPLETE PROFILE
                            </button>

                        </div>


                        {/* Marketplace Tips */}
                        <div className="relative flex h-64 w-full items-end overflow-hidden bg-gray-800">

                            {/* Image Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[14px] text-gray-400">
                                Marketplace Tips Image
                            </span>
                            </div>


                            {/* Image Overlay */}
                            <div className="relative z-10 w-full bg-black/40 p-5 text-white">

                            <p className="font-serif text-[18px]">
                                MARKETPLACE TIPS
                            </p>

                            <p className="mt-1 font-serif text-[16px] italic">
                                Maximizing Your Reach
                            </p>

                            </div>

                        </div>

                        </aside>

                    </div>
                </div>
            </main>
            {/* Footer */}
            <footer className="flex flex-col gap-5 border-t border-gray-200 py-6 md:flex-row md:items-center md:justify-between">

                <p className="text-[13px] text-gray-500">
                © 2023 Betatrus Escrow & Marketplace. All rights reserved.
                </p>

                <div className="flex flex-wrap gap-6">

                <button className="text-[10px] font-medium tracking-wider text-gray-500 hover:text-primary">
                    PRIVACY POLICY
                </button>

                <button className="text-[10px] font-medium tracking-wider text-gray-500 hover:text-primary">
                    TERMS OF SERVICE
                </button>

                <button className="text-[10px] font-medium tracking-wider text-gray-500 hover:text-primary">
                    ESCROW PROTOCOL
                </button>

                </div>

            </footer>
        </div>
    );
}

export default VendorDashboard;