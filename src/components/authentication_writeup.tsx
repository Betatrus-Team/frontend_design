import { Heart, Sparkles, Truck } from "lucide-react";

const AuthWriteup = () => {
    return (
        <section className="lg:w-[80%] w-[90%] md:my-25 my-10 py-10 lg:px-10 md:px-5 flex md:flex-row flex-col *:md:w-[32%] *:w-full text-[#504441] justify-between">
            <div className="flex flex-col justify-center items-center gap-2 p-2">
                <Heart size={24} />
                <h3 className="font-serif text-[20px] leading-7 italic">Curated Wishlist</h3>
                <p className="text-center font-manrope text-[14px] leading-5">Save your favorite editorial pieces and revisit them whenever inspiration strikes.</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 p-2">
                <Truck size={24} />
                <h3 className="font-serif text-[20px] leading-7 italic">Seamless Tracking</h3>
                <p className="text-center font-manrope text-[14px] leading-5">From the warehouse to your doorstep, follow every step of your order's voyage.</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 p-2">
                <Sparkles size={24} />
                <h3 className="font-serif text-[20px] leading-7 italic">Exclusive Previews</h3>
                <p className="text-center font-manrope text-[14px] leading-5">Be the first to explore our seasonal collections and limited-edition hair care releases.</p>
            </div>
        </section>
    );
}

export default AuthWriteup;