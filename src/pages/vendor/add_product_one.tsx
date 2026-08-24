import { ImagePlus, Video, CircleCheck } from "lucide-react";
import { PageTitle } from "../../components/title";

const AddProduct = () => {
  return (
    <main className="font-manrope flex justify-center bg-gray-50">
        <PageTitle title={"BETATRUS VENDOR | ADD PRODUCT STEP ONE"} />
        <div className="lg:w-[90%] w-[95%] lg:my-15 md:my-10 mt-7">

            {/* Top Section */}
            <div className="flex flex-col gap-6 border-b border-gray-100 pb-5 md:flex-row md:items-start md:justify-between">

                <div>
                <h1 className="font-serif text-[28px] font-semibold text-gray-900">
                    Create Product Listing
                </h1>

                <p className="mt-1 text-[14px] text-gray-500">
                    Tell the story of your luxury product and prepare it for the global
                    market.
                </p>
                </div>


                <button className="w-full bg-[#1b1b1b] px-8 py-3 text-[13px] text-white hover:bg-black md:w-auto">
                SAVE & CONTINUE
                </button>

            </div>


            {/* Main Content */}
            <div className="flex flex-col gap-10 py-8 md:flex-row">

                {/* Left Section */}
                <section className="w-full md:w-[55%]">

                {/* Steps */}
                <div className="mb-7 flex items-center gap-6">

                    {/* Step 1 */}
                    <div className="flex items-center gap-2">

                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-primary text-[11px] text-primary">
                        1
                    </div>

                    <span className="text-[10px] font-medium text-primary">
                        BASIC INFO & MEDIA
                    </span>

                    </div>


                    {/* Step 2 */}
                    <div className="flex items-center gap-2">

                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-900 text-[11px] text-gray-900">
                        2
                    </div>

                    <span className="text-[10px] font-medium text-gray-900">
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


                {/* Product Story */}
                <div>

                    <h2 className="border-b border-gray-100 pb-4 font-serif text-[22px] text-gray-900">
                    Product Story
                    </h2>


                    {/* Product Title */}
                    <div className="mt-6">

                    <label className="text-[10px] font-medium tracking-wider text-gray-700">
                        PRODUCT TITLE
                    </label>

                    <input
                        type="text"
                        placeholder="e.g., Bone Straight HD Lace Wig"
                        className="mt-2 h-9 w-full border border-red-100 bg-white px-3 text-[14px] text-gray-800 outline-none placeholder:text-gray-400 focus:border-primary"
                    />

                    </div>


                    {/* Category + Brand */}
                    <div className="mt-5 flex flex-col gap-5 md:flex-row">

                    {/* Category */}
                    <div className="w-full md:w-[50%]">

                        <label className="text-[10px] font-medium tracking-wider text-gray-700">
                        CATEGORY
                        </label>

                        <select className="mt-2 h-10 w-full border border-red-100 bg-white px-3 text-[14px] text-gray-800 outline-none placeholder:text-gray-400 focus:border-primary">
                            <option value="wig">Wig</option>
                        </select>

                    </div>


                    {/* Brand */}
                    <div className="w-full md:w-[50%]">

                        <label className="text-[10px] font-medium tracking-wider text-gray-700">
                        BRAND / COLLECTION
                        </label>

                        <input
                        type="text"
                        placeholder="Luxury Essentials"
                        className="mt-2 h-10 w-full border border-red-100 bg-white px-3 text-[14px] text-gray-800 outline-none placeholder:text-gray-400 focus:border-primary"
                        />

                    </div>

                    </div>


                    {/* Product Story */}
                    <div className="mt-5">

                    <label className="text-[10px] font-medium tracking-wider text-gray-700">
                        PRODUCT STORY & DETAILS
                    </label>

                    <textarea
                        rows={6}
                        placeholder="Describe the craftsmanship, origin, and unique feel of this product..."
                        className="mt-2 w-full resize-none border border-red-100 bg-white px-3 py-3 text-[14px] leading-6 text-gray-800 outline-none placeholder:text-gray-400 focus:border-primary"
                    />

                    </div>

                </div>

                </section>


                {/* Right Section - Media */}
                <section className="w-full md:w-[45%]">

                <div className="flex items-end justify-between">

                    <h2 className="font-serif text-[22px] text-gray-900">
                    Media Assets
                    </h2>

                    <span className="text-[9px] font-medium text-gray-600">
                    UP TO 10 PHOTOS & 1 VIDEO
                    </span>

                </div>


                {/* Media Area */}
                <div className="mt-5 flex flex-col gap-5">

                    {/* Images */}
                    <div className="flex flex-col gap-5 md:flex-row">

                    {/* Upload Gallery */}
                    <label className="flex h-36 w-full cursor-pointer flex-col items-center justify-center border-2 border-dashed border-red-100 bg-white md:w-[50%]">

                        <ImagePlus
                        size={32}
                        className="text-gray-900"
                        />

                        <span className="mt-2 text-[13px] text-gray-800">
                        Upload Gallery
                        </span>

                        <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        />

                    </label>


                    {/* Image Placeholders */}
                    <div className="flex w-full flex-col gap-4 md:w-[50%]">

                        <div className="flex gap-4">

                        <div className="flex h-16 w-[50%] items-center justify-center bg-gray-200">
                            <span className="text-[10px] text-gray-500">
                            Image
                            </span>
                        </div>

                        <div className="flex h-16 w-[50%] items-center justify-center bg-gray-200">
                            <span className="text-[10px] text-gray-500">
                            Image
                            </span>
                        </div>

                        </div>


                        <div className="flex gap-4">

                        <div className="flex h-16 w-[50%] items-center justify-center bg-gray-200">
                            <span className="text-[10px] text-gray-500">
                            Image
                            </span>
                        </div>

                        <div className="flex h-16 w-[50%] items-center justify-center bg-gray-200">
                            <span className="text-[10px] text-gray-500">
                            Image
                            </span>
                        </div>

                        </div>

                    </div>

                    </div>


                    {/* Video + Large Image */}
                    <div className="flex flex-col gap-5 md:flex-row">

                    {/* Video */}
                    <label className="flex h-36 w-full cursor-pointer flex-col items-center justify-center bg-gray-200 md:w-[50%]">

                        <Video
                        size={24}
                        className="text-gray-800"
                        />

                        <span className="mt-2 text-[13px] text-gray-800">
                        Add Video
                        </span>

                        <input
                        type="file"
                        accept="video/*"
                        className="hidden"
                        />

                    </label>


                    {/* Main Image Placeholder */}
                    <div className="flex h-36 w-full items-center justify-center bg-gray-300 md:w-[50%]">

                        <span className="text-[13px] text-gray-500">
                        Product Image
                        </span>

                    </div>

                    </div>

                </div>

                </section>

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

export default AddProduct;