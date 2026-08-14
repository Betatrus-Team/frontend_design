import {
  LockKeyhole,
  Trash2,
  Plus,
  CircleCheck,
} from "lucide-react";

const ProductVariants = () => {
  return (
    <main className="font-manrope flex justify-center bg-gray-50">
        <div className="lg:w-[90%] w-[95%] lg:my-15 md:my-10 mt-7">

            {/* Top Section */}
            <div className="flex flex-col gap-5 border-b border-gray-100 pb-5 md:flex-row md:items-center md:justify-between">

                <div>
                <h1 className="font-serif text-[28px] font-semibold text-gray-900">
                    Product Variants
                </h1>

                <p className="mt-1 text-[14px] text-gray-500">
                    Define options like length, density, and color for your artisan
                    collection.
                </p>
                </div>


                <div className="flex items-center gap-6">

                <button className="text-[12px] font-medium text-gray-700 hover:text-primary">
                    BACK TO DETAILS
                </button>

                <button className="bg-[#1b1b1b] px-8 py-3 text-[13px] text-white hover:bg-black">
                    SAVE & CONTINUE
                </button>

                </div>

            </div>


            {/* Steps */}
            <div className="flex items-center gap-6 border-b border-gray-100 py-5">

                {/* Step 1 */}
                <div className="flex items-center gap-2">

                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-900 text-[11px] text-gray-900">
                    1
                </div>

                <span className="text-[10px] font-medium text-gray-900">
                    BASIC INFO & MEDIA
                </span>

                </div>


                {/* Step 2 */}
                <div className="flex items-center gap-2">

                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-primary text-[11px] text-primary">
                    2
                </div>

                <span className="text-[10px] font-medium text-primary">
                    VARIANTS & PRICING
                </span>

                </div>


                {/* Step 3 */}
                <div className="flex items-center gap-2">

                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-900 text-[11px] text-gray-900">
                    3
                </div>

                <span className="text-[10px] font-medium text-gray-900">
                    FINALIZE
                </span>

                </div>

            </div>


            {/* Main Content */}
            <div className="flex flex-col gap-10 py-8 md:flex-row">

                {/* Variants Section */}
                <section className="w-full md:w-[55%]">

                {/* Variants Table */}
                <div className="overflow-x-auto border border-gray-200 bg-white">

                    {/* Table Header */}
                    <div className="flex min-w-150 border-b border-gray-200 bg-gray-50 px-4 py-4">

                    <div className="w-[25%] text-[12px] font-medium text-gray-600">
                        OPTION
                        <br />
                        GROUP
                    </div>

                    <div className="w-[50%] text-[12px] font-medium text-gray-600">
                        VALUES
                    </div>

                    <div className="w-[20%] text-[12px] font-medium text-gray-600">
                        STOCK
                        <br />
                        LEVEL
                    </div>

                    <div className="w-[5%]" />

                    </div>


                    {/* Length */}
                    <div className="flex min-w-150 items-center border-b border-gray-100 px-4 py-5">

                    <div className="w-[25%] text-[13px] text-gray-700">
                        Length
                    </div>


                    <div className="flex w-[50%] flex-wrap gap-2">

                        <span className="bg-gray-100 px-3 py-1 text-[11px] text-gray-700">
                        12"
                        </span>

                        <span className="bg-gray-100 px-3 py-1 text-[11px] text-gray-700">
                        18"
                        </span>

                        <span className="bg-gray-100 px-3 py-1 text-[11px] text-gray-700">
                        24"
                        </span>

                        <span className="bg-gray-100 px-3 py-1 text-[11px] text-gray-700">
                        30"
                        </span>

                    </div>


                    <div className="w-[20%]">

                        <input
                        type="number"
                        defaultValue={45}
                        className="h-7 w-16 border border-gray-200 bg-gray-50 px-2 text-[12px] outline-none focus:border-primary"
                        />

                    </div>


                    <div className="flex w-[5%] justify-end">

                        <button className="text-gray-600 hover:text-primary">
                        <Trash2 size={18} />
                        </button>

                    </div>

                    </div>


                    {/* Color / Texture */}
                    <div className="flex min-w-150 items-center border-b border-gray-100 px-4 py-5">

                    <div className="w-[25%] text-[13px] text-gray-700">
                        Color /
                        <br />
                        Texture
                    </div>


                    <div className="flex w-[50%] flex-wrap gap-2">

                        <span className="bg-gray-100 px-3 py-1 text-[11px] text-gray-700">
                        Jet Black
                        </span>

                        <span className="bg-gray-100 px-3 py-1 text-[11px] text-gray-700">
                        Honey Blonde
                        </span>

                        <span className="bg-gray-100 px-3 py-1 text-[11px] text-gray-700">
                        Auburn Glow
                        </span>

                    </div>


                    <div className="w-[20%]">

                        <input
                        type="number"
                        defaultValue={12}
                        className="h-7 w-16 border border-gray-200 bg-gray-50 px-2 text-[12px] outline-none focus:border-primary"
                        />

                    </div>


                    <div className="flex w-[5%] justify-end">

                        <button className="text-gray-600 hover:text-primary">
                        <Trash2 size={18} />
                        </button>

                    </div>

                    </div>


                    {/* Density */}
                    <div className="flex min-w-150 items-center px-4 py-5">

                    <div className="w-[25%] text-[13px] text-gray-700">
                        Density
                    </div>


                    <div className="flex w-[50%] flex-wrap gap-2">

                        <span className="bg-gray-100 px-3 py-1 text-[11px] text-gray-700">
                        150%
                        </span>

                        <span className="bg-gray-100 px-3 py-1 text-[11px] text-gray-700">
                        180%
                        </span>

                        <span className="bg-gray-100 px-3 py-1 text-[11px] text-gray-700">
                        200%
                        </span>

                    </div>


                    <div className="w-[20%]">

                        <input
                        type="number"
                        defaultValue={8}
                        className="h-7 w-16 border border-gray-200 bg-gray-50 px-2 text-[12px] outline-none focus:border-primary"
                        />

                    </div>


                    <div className="flex w-[5%] justify-end">

                        <button className="text-gray-600 hover:text-primary">
                        <Trash2 size={18} />
                        </button>

                    </div>

                    </div>

                </div>


                {/* Add Variant */}
                <button className="mt-4 flex items-center gap-2 border border-gray-300 bg-white px-4 py-3 text-[12px] text-gray-700 hover:border-primary hover:text-primary">

                    <Plus size={16} />

                    ADD VARIANT GROUP

                </button>

                </section>


                {/* Pricing Section */}
                <section className="w-full md:w-[45%]">

                <div className="border border-gray-100 bg-white p-6">

                    {/* Pricing Header */}
                    <div className="flex items-center justify-between">

                    <h2 className="font-serif text-[24px] text-gray-900">
                        Pricing
                    </h2>


                    <span className="flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-[9px] font-medium text-primary">

                        <LockKeyhole size={11} />

                        ESCROW PROTECTED

                    </span>

                    </div>


                    {/* Base Price */}
                    <div className="mt-7">

                    <label className="text-[10px] font-medium tracking-wider text-gray-700">
                        BASE PRICE (₦)
                    </label>

                    <div className="mt-2 flex h-10 items-center border border-red-100 bg-white px-3">

                        <span className="text-[16px] text-gray-800">
                        ₦
                        </span>

                        <input
                        type="number"
                        placeholder="0.00"
                        className="w-full bg-transparent px-2 text-[14px] text-gray-700 outline-none placeholder:text-gray-500"
                        />

                    </div>

                    </div>


                    {/* Discounted Price */}
                    <div className="mt-5">

                    <label className="text-[10px] font-medium tracking-wider text-gray-700">
                        DISCOUNTED PRICE (OPTIONAL)
                    </label>

                    <div className="mt-2 flex h-10 items-center border border-red-100 bg-white px-3">

                        <span className="text-[16px] text-gray-800">
                        ₦
                        </span>

                        <input
                        type="number"
                        placeholder="0.00"
                        className="w-full bg-transparent px-2 text-[14px] text-gray-700 outline-none placeholder:text-gray-500"
                        />

                    </div>

                    </div>


                    {/* Initial Stock */}
                    <div className="mt-5">

                    <label className="text-[10px] font-medium tracking-wider text-gray-700">
                        INITIAL STOCK LEVEL
                    </label>

                    <input
                        type="number"
                        defaultValue={10}
                        className="mt-2 h-10 w-full border border-red-100 bg-white px-3 text-[14px] text-gray-700 outline-none focus:border-primary"
                    />

                    </div>

                </div>

                </section>

            </div>


            {/* Image Placeholder */}
            <div className="hidden">
                {/* Reserved for future product/variant image */}
            </div>


            {/* Bottom Bar */}
            <div className="flex flex-col gap-4 border-t border-gray-100 py-4 md:flex-row md:items-center md:justify-between">

                {/* Autosave */}
                <div className="flex items-center gap-2">

                <CircleCheck
                    size={12}
                    className="fill-primary text-primary"
                />

                <span className="text-[9px] font-medium tracking-wider text-gray-600">
                    AUTOSAVING DRAFT...
                </span>

                <span className="text-[9px] text-gray-500">
                    LAST SAVED AT 14:32
                </span>

                </div>


                {/* Bottom Actions */}
                <div className="flex gap-6">

                <button className="text-[10px] font-medium text-gray-700 hover:text-primary">
                    PREVIEW LISTING
                </button>

                <button className="text-[10px] font-medium text-gray-700 hover:text-primary">
                    DISCARD CHANGES
                </button>

                </div>

            </div>
        </div>
    </main>
  );
};

export default ProductVariants;