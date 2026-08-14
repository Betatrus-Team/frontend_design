import { ArrowUpRight, LockKeyhole, Clock3, Search, SlidersHorizontal, ShieldCheck, TrendingUp } from "lucide-react";
import RevenueChart from "./components/revenue_chart";
import { VendorHeader } from "./components/header";

const Sales = () => {
  return (
    <div>
      <VendorHeader title="Verification" />
      <main className="font-manrope flex justify-center bg-gray-50 pb-22">
        <div className="lg:w-[90%] w-[95%] lg:my-15 md:my-10 mt-7 mb-10">
        
          {/* Page Heading */}
          <section className="mb-10">

            <p className="text-[13px] font-medium tracking-wider text-primary">
              OVERVIEW
            </p>

            <h1 className="mt-2 font-serif text-[32px] text-gray-900">
              Sales Analytics
            </h1>

          </section>


          {/* Summary Cards */}
          <section className="flex flex-col gap-5 md:flex-row">

            {/* Total Sales */}
            <div className="w-full bg-white p-5 md:w-[33.33%]">

              <div className="flex items-start justify-between">

                <TrendingUp
                  size={20}
                  className="text-primary"
                />

                <span className="bg-gray-100 px-2 py-1 text-[12px] text-gray-600">
                  THIS MONTH
                </span>

              </div>

              <p className="mt-5 text-[13px] text-gray-500">
                TOTAL SALES
              </p>

              <h2 className="mt-1 font-serif text-[20px] text-gray-900">
                ₦4,250,000
              </h2>

              <p className="mt-4 text-[14px] text-primary">
                ↑ 12% from last month
              </p>

            </div>


            {/* Escrow Balance */}
            <div className="w-full bg-white p-5 md:w-[33.33%]">

              <div className="flex items-start justify-between">

                <LockKeyhole
                  size={20}
                  className="text-primary"
                />

                <span className="bg-[#5f0909] px-3 py-1 text-[12px] text-white">
                  ESCROW PROTECTED
                </span>

              </div>

              <p className="mt-5 text-[13px] text-gray-500">
                ESCROW BALANCE
              </p>

              <h2 className="mt-1 font-serif text-[20px] text-gray-900">
                ₦850,000
              </h2>

              <p className="mt-4 text-[14px] leading-5 text-gray-400">
                Funds being held securely until delivery confirmation.
              </p>

            </div>


            {/* Pending Payouts */}
            <div className="w-full bg-white p-5 md:w-[33.33%]">

              <Clock3
                size={20}
                className="text-gray-500"
              />

              <p className="mt-5 text-[13px] text-gray-500">
                PENDING PAYOUTS
              </p>

              <h2 className="mt-1 font-serif text-[20px] text-gray-900">
                ₦1,120,500
              </h2>

              <button className="mt-4 text-[14px] text-primary hover:underline">
                View Schedule →
              </button>

            </div>

          </section>


          {/* Revenue + Escrow Security */}
          <section className="mt-10 flex flex-col gap-5 md:flex-row">

            {/* Revenue Chart */}
            <div className="w-full border border-red-100 bg-white p-5 md:w-[66.67%]">

              <h2 className="font-serif text-[16px] text-gray-900">
                Revenue Trajectory
              </h2>

              <div className="mt-6">
                <RevenueChart />
              </div>

            </div>


            {/* Escrow Security */}
            <div className="w-full bg-[#5f0909] p-6 text-white md:w-[33.33%]">

              <h2 className="font-serif text-[16px]">
                Escrow Security
              </h2>

              <p className="mt-4 text-[14px] leading-6 text-white/80">
                Your funds are protected by Betatrus 3rd-party escrow.
                Disbursements occur automatically within 24 hours of successful
                product verification.
              </p>


              {/* Trust Score */}
              <div className="mt-5 border border-white/20 p-4">

                <div className="flex items-center gap-2">

                  <ShieldCheck size={20} />

                  <span className="text-[13px]">
                    TRUST SCORE: 98.2%
                  </span>

                </div>

                <div className="mt-3 h-1 w-full bg-white/30">

                  <div className="h-full w-[98%] bg-white" />

                </div>

              </div>

            </div>

          </section>


          {/* Recent Transactions */}
          <section className="mt-10 w-full bg-white">

            {/* Header */}
            <div className="flex flex-col gap-4 border-b border-gray-100 p-5 md:flex-row md:items-center md:justify-between">

              <h2 className="font-serif text-[18px] text-gray-900">
                Recent Transactions
              </h2>


              {/* Search + Filter */}
              <div className="flex gap-2">

                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2">

                  <Search
                    size={16}
                    className="text-gray-500"
                  />

                  <input
                    type="text"
                    placeholder="Search orders..."
                    className="w-full bg-transparent text-[13px] outline-none md:w-40"
                  />

                </div>


                <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 text-[13px] text-gray-700">

                  <SlidersHorizontal size={15} />

                  Filter

                </button>

              </div>

            </div>


            {/* Table */}
            <div className="w-full overflow-x-auto">

              <table className="w-full min-w-162.5 border-collapse">

                <thead>

                  <tr className="border-b border-gray-100">

                    {/* Hide date on small screens */}
                    <th className="hidden px-5 py-5 text-left text-[12px] font-medium tracking-wider text-gray-500 md:table-cell">
                      DATE
                    </th>

                    {/* Hide order ID on small screens */}
                    <th className="hidden px-5 py-5 text-left text-[12px] font-medium tracking-wider text-gray-500 md:table-cell">
                      ORDER ID
                    </th>

                    <th className="px-5 py-5 text-left text-[12px] font-medium tracking-wider text-gray-500">
                      PRODUCT NAME
                    </th>

                    <th className="px-5 py-5 text-left text-[12px] font-medium tracking-wider text-gray-500">
                      CUSTOMER
                    </th>

                    <th className="px-5 py-5 text-left text-[12px] font-medium tracking-wider text-gray-500">
                      AMOUNT
                    </th>

                    <th className="px-5 py-5 text-left text-[12px] font-medium tracking-wider text-gray-500">
                      STATUS
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {/* Transaction 1 */}
                  <tr className="border-b border-gray-100">

                    <td className="hidden px-5 py-5 text-[13px] text-gray-600 md:table-cell">
                      Oct 24, 2023
                    </td>

                    <td className="hidden px-5 py-5 text-[14px] text-gray-800 md:table-cell">
                      #BT-99231
                    </td>

                    <td className="px-5 py-5 font-serif text-[15px] italic text-gray-800">
                      Silk Night Serum
                    </td>

                    <td className="px-5 py-5 text-[14px] text-gray-700">
                      Amara Okafor
                    </td>

                    <td className="px-5 py-5 font-serif text-[14px] text-gray-800">
                      ₦45,500
                    </td>

                    <td className="px-5 py-5">
                      <span className="whitespace-nowrap rounded-full bg-gray-200 px-3 py-1 text-[12px] text-gray-600">
                        • Held in Escrow
                      </span>
                    </td>

                  </tr>


                  {/* Transaction 2 */}
                  <tr className="border-b border-gray-100">

                    <td className="hidden px-5 py-5 text-[13px] text-gray-600 md:table-cell">
                      Oct 23, 2023
                    </td>

                    <td className="hidden px-5 py-5 text-[14px] text-gray-800 md:table-cell">
                      #BT-99105
                    </td>

                    <td className="px-5 py-5 font-serif text-[15px] italic text-gray-800">
                      Gold Flake Hydrator
                    </td>

                    <td className="px-5 py-5 text-[14px] text-gray-700">
                      Bolanle Adeyemi
                    </td>

                    <td className="px-5 py-5 font-serif text-[14px] text-gray-800">
                      ₦120,000
                    </td>

                    <td className="px-5 py-5">
                      <span className="whitespace-nowrap rounded-full bg-red-50 px-3 py-1 text-[12px] text-primary">
                        • Released
                      </span>
                    </td>

                  </tr>


                  {/* Transaction 3 */}
                  <tr className="border-b border-gray-100">

                    <td className="hidden px-5 py-5 text-[13px] text-gray-600 md:table-cell">
                      Oct 22, 2023
                    </td>

                    <td className="hidden px-5 py-5 text-[14px] text-gray-800 md:table-cell">
                      #BT-98992
                    </td>

                    <td className="px-5 py-5 font-serif text-[15px] italic text-gray-800">
                      Velvet Rose Oil
                    </td>

                    <td className="px-5 py-5 text-[14px] text-gray-700">
                      Chinelo Eze
                    </td>

                    <td className="px-5 py-5 font-serif text-[14px] text-gray-800">
                      ₦28,000
                    </td>

                    <td className="px-5 py-5">
                      <span className="whitespace-nowrap rounded-full bg-red-50 px-3 py-1 text-[12px] text-primary">
                        • Refunded
                      </span>
                    </td>

                  </tr>


                  {/* Transaction 4 */}
                  <tr className="border-b border-gray-100">

                    <td className="hidden px-5 py-5 text-[13px] text-gray-600 md:table-cell">
                      Oct 24, 2023
                    </td>

                    <td className="hidden px-5 py-5 text-[14px] text-gray-800 md:table-cell">
                      #BT-99231
                    </td>

                    <td className="px-5 py-5 font-serif text-[15px] italic text-gray-800">
                      Silk Night Serum
                    </td>

                    <td className="px-5 py-5 text-[14px] text-gray-700">
                      Amara Okafor
                    </td>

                    <td className="px-5 py-5 font-serif text-[14px] text-gray-800">
                      ₦45,500
                    </td>

                    <td className="px-5 py-5">
                      <span className="whitespace-nowrap rounded-full bg-gray-200 px-3 py-1 text-[12px] text-gray-600">
                        • Held in Escrow
                      </span>
                    </td>

                  </tr>


                  {/* Transaction 5 */}
                  <tr>

                    <td className="hidden px-5 py-5 text-[13px] text-gray-600 md:table-cell">
                      Oct 20, 2023
                    </td>

                    <td className="hidden px-5 py-5 text-[14px] text-gray-800 md:table-cell">
                      #BT-98711
                    </td>

                    <td className="px-5 py-5 font-serif text-[15px] italic text-gray-800">
                      Oud Wood Extract
                    </td>

                    <td className="px-5 py-5 text-[14px] text-gray-700">
                      Ifeoma Sol
                    </td>

                    <td className="px-5 py-5 font-serif text-[14px] text-gray-800">
                      ₦250,000
                    </td>

                    <td className="px-5 py-5">
                      <span className="whitespace-nowrap rounded-full bg-red-50 px-3 py-1 text-[12px] text-primary">
                        • Released
                      </span>
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>


            {/* Pagination */}
            <div className="flex flex-col gap-4 border-t border-gray-100 px-5 py-5 md:flex-row md:items-center md:justify-between">

              <p className="text-[13px] text-gray-500">
                Showing 1 to 5 of 142 transactions
              </p>

              <div className="flex gap-5">

                <button className="text-[13px] text-gray-500 hover:text-primary">
                  ‹ Previous
                </button>

                <button className="text-[13px] text-gray-700 hover:text-primary">
                  Next ›
                </button>

              </div>

            </div>

          </section>


          {/* Image Placeholder */}
          <div className="mt-8 hidden h-0 w-0">
            {/* Reserved for future image content */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sales;