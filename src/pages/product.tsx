import Header from "../components/header"

const ProductDescription = () => {
    return (
        <div>
            <Header />
            <main className="font-manrope">
                <ul className="breadcrumnb flex items-center gap-2 text-[16px] text-[#504441]">
                    <li>Home</li>
                    <li className="text-[14px]">&gt;</li>
                    <li>Bestseller</li>
                    <li className="text-[14px]">&gt;</li>
                    <li className="text-black">Silk-Press Straight Frontal Wig</li>
                </ul>
            </main>
        </div>
    );
}

export default ProductDescription;