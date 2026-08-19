import Header from "../components/header";
import Hero from "../assets/images/hero.jpg"
import Button from "../components/button";
import Hair1 from "../assets/images/Image (2).png";
import Hair2 from "../assets/images/Image (3).png";
import categoryImg1 from "../assets/images/Container (3).png";
import { Heart, ShoppingBag } from "lucide-react";
import Footer from "../components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from "react-router-dom";

type Category1Prop = {
    image : string,
    label : string,
    onclick : () => void
}

type BestSellersProp = {
    image : string,
    label : string,
    description : string,
    price : string,
    onclick : () => void
}

const Category1 = ({ image, label, onclick } : Category1Prop) => {
    return (
        <div className="space-y-4 w-full" onClick={onclick}>
            <div className="w-full lg:h-89 h-102.25 overflow-hidden">
                <img src={image} alt="" className="object-cover object-top w-full h-full" />
            </div>
            <p className="text-manrope text-[24px]">{label}</p>
        </div>
    )
}

const Bestsellers = ({ image, label, description, price, onclick } : BestSellersProp) => {
    return (
        <section className="rounded-2xl h-126.5 shadow-md overflow-hidden bg-white lg:w-[23%] md:w-[48%] w-full" onClick={onclick}>
            <img src={image} alt="" className="h-87.5 w-full object-cover object-top" />
            <div className="p-6">
                <h3 className="font-noto italic text-[20px]">{label}</h3>
                <p className="font-manrope text-[14px] mb-5 text-[#504441]">{description}</p>
                <div className="flex justify-between">
                    <p className="font-manrope text-[18px] font-bold text-primary">₦{price}</p>
                    <div className="flex gap-2 *:w-10 *:h-10 *:flex *:justify-center *:items-center *:rounded-full">
                        <div className="border border-[#827470]">
                            <Heart size={14} />
                        </div>
                        <div className="bg-primary">
                            <ShoppingBag size={14} color="white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Recommended = ({image, label, description, price, onclick} : BestSellersProp) => {
    return (
        <section className="rounded-2xl shadow-md overflow-hidden lg:w-[23%] md:w-[32%] w-full md:h-97 h-110 text-[#1A1C1A]">
            <img src={image} alt="" className="md:h-64 h-78 w-full object-cover object-top" />
            <div className="p-6">
                <div className="flex justify-between">
                    <h3 className="font-noto italic text-[16.5px]">{label}</h3>
                    <p className="font-manrope text-[16px] font-medium">₦{price}</p>
                </div>
                <p className="font-manrope text-[12px] mb-5 text-[#504441]">{description}</p>
                <div className="flex justify-between items-start">
                    <div className="flex gap-2">
                        <Heart size={18} />
                        <ShoppingBag size={18} />
                    </div>
                    <p className="font-manrope text-[14px] font-medium text-primary cursor-pointer" onClick={onclick}>Details</p>
                </div>
            </div>
        </section>
    );
}

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            {/* Hero Section */}
            <section className="hero w-full h-[calc(100vh-80px)] overflow-hidden relative">
                <img src={Hero} alt="Hero Image" className="w-full h-full object-cover object-center" />
                <div className="w-full h-full bg-black opacity-40 absolute top-0 left-0" />
                <div className="w-full h-full absolute top-0 flex justify-center items-center">
                    <div className="md:w-[55%] w-[70%] flex flex-col items-center justify-center text-white gap-7.5">
                        <h1 className="font-noto italic md:text-[72px] text-[40px] text-center md:leading-22 leading-10">Your Hair, Delivered. No Comprises.</h1>
                        <p className="font-manrope md:text-[20px] text-[14px] text-center md:px-10 px-1 md:leading-[29.3px] leading-4.5">Shop verified human hair wigs, extensions, and luxury beauty products — with guaranteed delivery and buyer protection on every order.</p>
                        <div className="flex md:flex-row flex-col gap-7.5">
                            <Button label="Shop The Collection" extra="bg-primary text-white" onclick={() =>{ document.getElementById("collections")?.scrollIntoView({
                                behavior: "smooth"
                            });}} />
                            <Button label="Sell on Betatrus" extra="bg-white text-general" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Body */}
            <main className="">
                <section className="md:px-20 px-5 py-5 flex md:flex-row flex-col items-center justify-between font-manrope font-normal leading-6]">
                    <p>24 - 72-Hr Delivery</p>
                    <p>100% Quality Guaranteed</p>
                    <p>Free Shipping For New Users</p>
                    <p>Secure Payment Method</p>
                </section>

                {/* Categories */}
                <section className="px-5 py-10 w-full no-scroll">
                    <Swiper modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    slidesPerView={window.innerWidth >= 1280 ? 4 : window.innerWidth >= 768 ? 2 : 1}
                    spaceBetween={30}
                    className="w-full"
                    >
                        <SwiperSlide><Category1 label="Body Wave Bundle" image={Hair1} onclick={() => navigate("../categories/body_wave_bundles")} /></SwiperSlide>
                        <SwiperSlide><Category1 label="Body Wave Bundle" image={Hair2} onclick={() => navigate("../categories/nails")} /></SwiperSlide>
                        <SwiperSlide><Category1 label="Body Wave Bundle" image={Hair1} onclick={() => navigate("../categories/hairs")} /></SwiperSlide>
                        <SwiperSlide><Category1 label="Body Wave Bundle" image={Hair2} onclick={() => navigate("../categories/wigs")} /></SwiperSlide>
                    </Swiper>
                </section>
                <section className="lg:px-10 md:px-3 px-2 mb-10" id="collections">
                    <h2 className="font-noto italic md:text-[36px] text-[18px] my-15 text-center leading-10">Curated Collections</h2>
                    <div className="lg:h-200 md:h-180 flex justify-between md:flex-row flex-col md:gap-0 gap-5">
                        <section className="md:w-[58%] w-full md:h-full h-[370.72px] relative overflow-hidden rounded-xl">
                            <div className="w-full h-full">
                                <img src={categoryImg1} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="bg-black opacity-45 w-full h-full top-0 left-0 absolute" />
                            <div className="absolute bottom-5 md:left-10 left-5">
                                <p className="text-white font-noto italic md:text-[36px] text-[16.63px]">Signature Wigs</p>
                                <p className="text-white font-manrope font-light md:text-[20px] text-[12px]">Couture units, ethically sourced and hand-finished.</p>
                            </div>
                        </section>
                        <section className="md:h-full h-[183.35px] md:w-[40%] w-full flex md:flex-col flex-row justify-between">
                            <div className="md:h-[49%] h-full md:w-full w-[49%] relative overflow-hidden rounded-xl">
                                <img src="" alt="" className="w-full h-full object-cover" />
                                <div className="bg-black opacity-45 w-full h-full top-0 left-0 absolute" />
                                <div className="absolute bottom-5 md:left-10 left-5">
                                    <p className="text-white font-noto italic md:text-[24px] text-[12px]">Luxe Hair Care</p>
                                </div>
                            </div>
                            <div className="md:h-[49%] h-full md:w-full w-[49%] relative overflow-hidden rounded-xl">
                                <img src="" alt="" className="w-full h-full object-cover" />
                                <div className="bg-black opacity-45 w-full h-full top-0 left-0 absolute" />
                                <div className="absolute bottom-5 md:left-10 left-5">
                                    <p className="text-white font-noto italic md:text-[24px] text-[12px]">Artisanal Nails & Lashes</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="lg:px-10 md:px-5 px-5 py-10 bg-[#ccc8c63b]">
                    <div className="text-center space-y-4 mb-16 text-general">
                        <p className="text-[14px] text-primary font-manrope font-medium leading-5 tracking-[1.4px]">CURATED FAVOURITES</p>
                        <h2 className="md:text-[48px] text-[18px] text-general font-noto italic leading-10">The Bestsellers</h2>
                    </div>
                    <div className="flex *:shrink-0 flex-wrap gap-y-16 justify-start lg:gap-8 md:gap-7">
                        <Bestsellers label="The Silk Bob" description="14' Virgin Malaysian Silk Base" price="117,500" image={Hair1} onclick={() => navigate("/product")} />
                        <Bestsellers label="The Silk Bob" description="14' Virgin Malaysian Silk Base" price="117,500" image={Hair1} onclick={() => navigate("/product")} />
                        <Bestsellers label="The Silk Bob" description="14' Virgin Malaysian Silk Base" price="117,500" image={Hair1} onclick={() => navigate("/product")} />
                        <Bestsellers label="The Silk Bob" description="14' Virgin Malaysian Silk Base" price="117,500" image={Hair1} onclick={() => navigate("/product")} />
                        <Bestsellers label="The Silk Bob" description="14' Virgin Malaysian Silk Base" price="117,500" image={Hair1} onclick={() => navigate("/product")} />
                        <Bestsellers label="The Silk Bob" description="14' Virgin Malaysian Silk Base" price="117,500" image={Hair1} onclick={() => navigate("/product")} />
                        <Bestsellers label="The Silk Bob" description="14' Virgin Malaysian Silk Base" price="117,500" image={Hair1} onclick={() => navigate("/product")} />
                    </div>
                </section>
                <section className="gap-8 flex justify-center w-full">
                    <div className="lg:w-[70%] md:w-[80%] w-full px-10 py-12.5 flex flex-col justify-center items-center gap-8">
                        <h2 className="font-noto text-primary italic text-[36px]">Our Mission</h2>
                        <p className="font-manrope text-[18px] text-[#504441] leading-[29.3px] text-center">To be Nigeria’s safest beauty plug; cop wigs, press-ons, lashes, and hair care online with zero scam stress. We don’t pay vendors until you say your order slayed. Period.</p>
                        <h2 className="font-noto text-primary italic text-[36px]">Our Vision</h2>
                        <p className="font-manrope text-[18px] text-[#504441] leading-[29.3px] text-center">To build the most trusted digital commerce community out of Africa where anyone can transact adn participate online without fear</p>
                    </div>
                </section>
                <section className="lg:px-10 md:px-3 px-5 py-24 space-y-16">
                    <div>
                        <h2 className="font-noto md:text-[48px] text-[20px] md:text-start text-center italic">Recommended for you</h2>
                        <p className="font-manrope text-[16px] leading-6 text-[#504441] md:text-start text-center">The latest drops from our digital atelier.</p>
                    </div>
                    <div className="flex *:shrink-0 flex-wrap gap-y-16 justify-start lg:gap-8 lg:gap-y-0 md:gap-y-10 md:gap-[2%]">
                        <Recommended label="Raven Straight" price="117,000" description="Ultra-thin HD lace, pre-plucked hairline." image={Hair1} onclick={() => navigate("/product")}  />
                        <Recommended label="Raven Straight" price="115,000" description="Ultra-thin HD lace, pre-plucked hairline." image={Hair2} onclick={() => navigate("/product")}  />
                        <Recommended label="Raven Straight" price="128,000" description="Ultra-thin HD lace, pre-plucked hairline." image={Hair1} onclick={() => navigate("/product")}  />
                        <Recommended label="Raven Straight" price="87,000" description="Ultra-thin HD lace, pre-plucked hairline." image={Hair2} onclick={() => navigate("/product")}  />
                        <Recommended label="Raven Straight" price="117,000" description="Ultra-thin HD lace, pre-plucked hairline." image={Hair1} onclick={() => navigate("/product")}  />
                    </div>
                </section>
                <section className="mb-24 flex justify-center-safe">
                    <div className="lg:w-[60%] md:w-[85%] w-[90%] md:p-16 pt-10 px-5 pb-20 border bg-[#FAF9F6] border-[#D4C3BE] rounded-2xl flex flex-col items-center justify-center gap-6">
                        <p className="font-noto md:text-[36px] text-[18px] italic text-[#1A1C1A] font-medium">Be the first to get our updates</p>
                        <p className="text-center font-manrope md:text-[17px] text-[12px] text-[#504441]">Get regular updated on best deals, new listed items and promo. <br />kindly join our news letter now</p>
                        <div className="flex md:flex-row flex-col gap-4">
                            <input type="email" name="email" id="email" placeholder="Your email address" className="px-6 py-4.25 bg-[#EFEEEB] rounded-xl w-62.5" />
                            <Button label="Join Now" extra="px-[32px] py-[16px] bg-primary text-white" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;