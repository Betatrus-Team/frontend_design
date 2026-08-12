import { MoreVertical, Plus, Search, ShieldCheck } from "lucide-react";
import { VendorHeader } from "./components/header";
import wig from "../../assets/images/Image (3).png";

const Products = () => {
    return (
        <div>
            <VendorHeader title="Products" />
            <main className="font-manrope flex justify-center bg-gray-50">
                <div className="lg:w-[90%] w-[95%] lg:my-15 md:my-10 mt-7 mb-10">
                    <section className="flex items-center justify-between gap-5">
                        <div>
                            <h1 className="lg:text-[32px] md:text-[28px] text-[20px] font-noto leading-[38.4px]">Inventory management</h1>
                            <p className="lg:text-[16px] md:text-[14px] text-[12px] leading-6 text-light">Manage your luxury beauty catalog and track stock levels in real-time.</p>
                        </div>
                        <button className="bg-button text-white px-5 py-3 flex items-center-safe gap-2 text-[12px] leading-[14.4px] tracking-[1.2px] font-semibold">
                            <Plus className="w-3.25 h-3.25" />
                            <p className="md:block hidden">ADD NEW PRODUCT</p>
                        </button>
                    </section>
                    <section className="mt-12">
                        <section className="flex md:flex-row flex-col justify-between md:items-center-safe gap-4">
                            <form className="flex items-center-safe gap-5">
                                <div className="flex md:flex-row flex-col md:items-center-safe md:gap-4 gap-2">
                                    <label htmlFor="category" className="text-[10px] leading-3 tracking-[0.8px] bold text-light">CATEGORY</label>
                                    <select name="category" id="category" className="text-[14px] leading-5.25 px-3 py-2 outline-0 text-[#1C1B1B]">
                                        <option value="all" selected>All Items</option>
                                    </select>
                                </div>
                                <div className="w-px h-4 bg-[#1c1b1b49] md:block hidden" />
                                <div className="flex md:flex-row flex-col md:items-center-safe md:gap-4 gap-2">
                                    <label htmlFor="status" className="text-[10px] leading-3 tracking-[0.8px] bold text-light">STATUS</label>
                                    <select name="status" id="status" className="text-[14px] leading-5.25 px-3 py-2 outline-0 text-[#1C1B1B]">
                                        <option value="all" selected>All Statuses</option>
                                    </select>
                                </div>
                            </form>
                            <div className="flex items-center-safe w-[256px] border border-gray-100 rounded-full h-9.25">
                                <button className="w-[20%] flex justify-center items-center-safe h-full"><Search className="w-4.5 h-6 text-[#5A413F]" /></button>
                                <input type="search" name="searchProduct" id="searchProduct" placeholder="search product name" className="w-[80%] h-full text-[14px] text-light outline-0" />
                            </div>
                        </section>
                        <section className="mt-6">
                            <table className="w-full">
                                <thead className="bg-[#F6F3F2] h-10.25 text-[10px] leading-3 tracking-[0.8px] text-light text-left">
                                    <tr className="*:lg:px-5 *:px-3">
                                        <th>PRODUCT</th>
                                        <th>CATEGORY</th>
                                        <th>PRICE (S)</th>
                                        <th>STOCK</th>
                                        <th>STATUS</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white shadow w-full">
                                    <tr className="*:px-5 *:py-5 border-b border-b-gray-200 md:text-[16px] text-[14px] leading-6 w-full">
                                        <td className="flex items-center-safe gap-3">
                                            <div className="lg:w-16 w-14 lg:h-20 h-18">
                                                <img src={wig} className="h-full w-full object-cover object-top" />
                                            </div>
                                            <div>
                                                <b className="font-bodoni lg:text-[24px] md:text-[16px] font-medium lg:leading-[31.2px] leading-5">Obsidian Silk Frontal</b>
                                                <p className="lg:text-[14px] text-[12px] leading-5.25 text-light">SKU: BT-WIG-001</p>
                                            </div>
                                        </td>
                                        <td>Wigs</td>
                                        <td className="font-noto font-bold">₦ 125,000</td>
                                        <td>12 Units</td>
                                        <td><p className="font-bold text-[10px] text-green-600 bg-green-100 rounded-full w-fit h-fit px-3">ACTIVE</p></td>
                                        <td><MoreVertical /></td>
                                    </tr>
                                    <tr className="*:px-5 *:py-5 border-b border-b-gray-200 lg:text-[16px] text-[14px] leading-6 w-full">
                                        <td className="flex items-center-safe gap-3">
                                            <div className="w-16 h-20">
                                                <img src={wig} className="h-full w-full object-cover object-top" />
                                            </div>
                                            <div>
                                                <b className="font-bodoni text-[24px] font-medium leading-[31.2px]">Obsidian Silk Frontal</b>
                                                <p className="text-[14px] leading-5.25 text-light">SKU: BT-WIG-001</p>
                                            </div>
                                        </td>
                                        <td>Wigs</td>
                                        <td className="font-noto font-bold">₦ 125,000</td>
                                        <td>12 Units</td>
                                        <td><p className="font-bold text-[10px] text-red-600 bg-red-100 rounded-full w-fit h-fit px-3">OUT OF STOCK</p></td>
                                        <td><MoreVertical /></td>
                                    </tr>
                                    <tr className="*:px-5 *:py-5 border-b border-b-gray-200 lg:text-[16px] text-[14px] leading-6 w-full">
                                        <td className="flex items-center-safe gap-3">
                                            <div className="w-16 h-20">
                                                <img src={wig} className="h-full w-full object-cover object-top" />
                                            </div>
                                            <div>
                                                <b className="font-bodoni text-[24px] font-medium leading-[31.2px]">Obsidian Silk Frontal</b>
                                                <p className="text-[14px] leading-5.25 text-light">SKU: BT-WIG-001</p>
                                            </div>
                                        </td>
                                        <td>Wigs</td>
                                        <td className="font-noto font-bold">₦ 125,000</td>
                                        <td>12 Units</td>
                                        <td><p className="font-bold text-[10px] text-gray-600 bg-gray-100 rounded-full w-fit h-fit px-3">DRAFT</p></td>
                                        <td><MoreVertical /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex md:flex-row flex-col md:items-center-safe gap-4 justify-between mt-6">
                                <div className="flex gap-4 items-center-safe">
                                    <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.8px] leading-3 text-light"><span className="block w-2 h-2 bg-green-600 rounded-full" /> 24 ACTIVE PRODUCTS</p>
                                    <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.8px] leading-3 text-light"><span className="block w-2 h-2 bg-red-600 rounded-full" /> 2 OUT OF STOCK</p>
                                </div>
                                <div className="flex items-center-safe gap-2 bg-light w-fit h-fit py-2 px-3">
                                    <ShieldCheck fill="red" color="white" className="w-4 h-5" />
                                    <p className="font-semibold text-[12px] leading-[14.4px] tracking-[0.6px]">Escrow Protection Active for all Listings</p>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Products;