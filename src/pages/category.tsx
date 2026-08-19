import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import wig from "../assets/images/Image (2).png"
import { useNavigate, useParams } from "react-router-dom";

const products = [
  {
    name: "Raven Straight",
    price: "115,500",
    description: "Ultra-thin HD lace pre-plucked hairline.",
  },
  {
    name: "Petal Dew Set",
    price: "5,000",
    description: "Minimalist soft pink editorial nails.",
  },
  {
    name: "Platinum Ice",
    price: "55,200",
    description: "Limited Edition 13x6 Full Lace.",
  },
  {
    name: "Janssen Cosmetics",
    price: "7,500",
    description: "Overnight intensive hydration for units.",
  },
  {
    name: "Raven Straight",
    price: "115,500",
    description: "Ultra-thin HD lace pre-plucked hairline.",
  },
  {
    name: "Petal Dew Set",
    price: "5,000",
    description: "Minimalist soft pink editorial nails.",
  },
  {
    name: "Platinum Ice",
    price: "55,200",
    description: "Limited Edition 13x6 Full Lace.",
  },
  {
    name: "Janssen Cosmetics",
    price: "7,500",
    description: "Overnight intensive hydration for units.",
  },
  {
    name: "Raven Straight",
    price: "115,500",
    description: "Ultra-thin HD lace pre-plucked hairline.",
  },
  {
    name: "Petal Dew Set",
    price: "5,000",
    description: "Minimalist soft pink editorial nails.",
  },
  {
    name: "Platinum Ice",
    price: "55,200",
    description: "Limited Edition 13x6 Full Lace.",
  },
  {
    name: "Janssen Cosmetics",
    price: "7,500",
    description: "Overnight intensive hydration for units.",
  },
];

const Category = () => {
    const param = useParams()
    const category = param.category;
    const navigate = useNavigate();
    return (
    <div>
        <Header />
        <main className="min-h-screen bg-white font-manrope flex justify-center mb-10">
        {/* Page Content */}
            <div className="lg:w-[85%] w-[95%]">

                {/* Page Introduction */}
                <section>

                <h1 className="text-[30px] font-bold text-gray-900 md:text-[34px] capitalize">
                    {category.split("_").join(" ")}
                </h1>

                <p className="mt-2 max-w-162.5 md:text-[14.71px] text-[12px] leading-5">
                    Discover our signature line of high-definition body wave wigs and
                    premium hair extensions, designed for the discerning individual
                    who demands both luxury and durability.
                </p>

                </section>


                {/* Product Count */}
                <p className="mt-8 md:text-[13.39px] text-[11px]">
                Showing 24 Body Wave Bundle Wigs
                </p>


                {/* Products */}
                <section className="mt-5">

                <div className="flex flex-wrap gap-x-[2.5%] gap-y-7">

                    {products.map((product, index) => (

                    <article
                        key={index}
                        className="w-full sm:w-[48.75%] md:w-[31.6%] shadow-2xl"
                    >

                        {/* Image Placeholder */}
                        <div className="relative h-62.5 w-full overflow-hidden rounded-lg md:h-[256.63px]">

                            <img src={wig} className="flex h-full w-full items-center justify-center object-cover object-top" />

                        </div>


                        {/* Product Information */}
                        <div className="px-5.5 py-5.5">

                        {/* Name + Price */}
                        <div className="flex items-start justify-between gap-3">

                            <h2 className="font-noto md:text-[16.5px] leading-[25.7px] text-[14px] font-medium italic text-gray-800">
                            {product.name}
                            </h2>

                            <span className="whitespace-nowrap md:text-[14.66px] text-[11px] leading-5.5 font-medium text-gray-800">
                            ₦{product.price}
                            </span>

                        </div>


                        {/* Description */}
                        <p className="mt-2 md:text-[11px] text-[9px] leading-4 text-gray-500">
                            {product.description}
                        </p>


                        {/* Product Actions */}
                        <div className="mt-3 flex items-center justify-between">

                            <div className="flex items-center gap-3">

                            <button
                                aria-label="Add to wishlist"
                                className="text-gray-600 hover:text-primary"
                            >
                                <Heart size={17} />
                            </button>

                            <button
                                aria-label="Add to bag"
                                className="text-gray-600 hover:text-primary"
                            >
                                <ShoppingBag size={16} />
                            </button>

                            </div>


                            <button className="md:text-[11px] leading-[14.7px] font-semibold text-[9px] text-primary hover:underline" onClick={() => navigate("../product")}>
                            Details
                            </button>

                        </div>

                        </div>

                    </article>

                    ))}

                </div>

                </section>


                {/* Pagination */}
                <div className="mt-12 flex items-center justify-center gap-4">

                <button
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:border-primary hover:text-primary"
                    aria-label="Previous page"
                >
                    <ChevronLeft size={15} />
                </button>


                <span className="text-[10px] font-medium text-gray-700">
                    01 / 04
                </span>


                <button
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-primary"
                    aria-label="Next page"
                >
                    <ChevronRight size={15} />
                </button>

                </div>

            </div>
        </main>

        <Footer />
    </div>
    );
};

export default Category;