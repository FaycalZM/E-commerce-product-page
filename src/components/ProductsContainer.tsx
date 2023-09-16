import { CartIcon, MinusIcon, PlusIcon } from "./Icons"


const ProductsContainer = () => {
    return (
        <section className="pt-16">
            <article className="flex gap-36 items-center justify-center">
                <div className="w-[42.5%]">
                    <img
                        className=" w-full rounded-xl"
                        src="/images/image-product-1.jpg"
                        alt="product image" />
                    <div className="flex justify-between mt-8">

                        <img
                            className="w-24 h-24 rounded-xl"
                            src="/images/image-product-1-thumbnail.jpg" alt="" />
                        <img
                            className="w-24 h-24 rounded-xl"
                            src="/images/image-product-2-thumbnail.jpg" alt="" />
                        <img
                            className="w-24 h-24 rounded-xl"
                            src="/images/image-product-3-thumbnail.jpg" alt="" />
                        <img
                            className="w-24 h-24 rounded-xl"
                            src="/images/image-product-4-thumbnail.jpg" alt="" />
                    </div>
                </div>

                <div className="w-[40%] ">
                    <p className="text-primary-orange text-sm tracking-wider font-bold uppercase mb-6">
                        sneaker company
                    </p>
                    <h1 className="text-5xl font-bold text-very-dark-blue mb-8 capitalize">
                        Fall limited edition sneakers
                    </h1>
                    <p className="text-dark-grayish-blue mb-6">
                        These low-profile sneakers are your perfect casual wear companion.
                        Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                    </p>
                    <p className="text-3xl font-bold text-very-dark-blue flex items-center mb-2">$125.00 <span className="h-fit px-2 py-[2px] ml-2 text-primary-orange text-base bg-pale-orange rounded-lg">50%</span></p>
                    <p className="line-through text-grayish-blue text-opacity-50 font-bold mb-8">$250.00</p>
                    <div className="flex gap-6">
                        <div className="flex gap-8 py-3 px-4 bg-light-grayish-blue rounded-lg">
                            <button className="hover:opacity-50 transition">
                                <MinusIcon />
                            </button>
                            <p className="font-bold text-very-dark-blue">0</p>
                            <button className="hover:opacity-50 transition">
                                <PlusIcon />
                            </button>
                        </div>
                        <button className="add-to-cart-btn flex gap-4 px-16 py-3 rounded-lg shadow-2xl shadow-primary-orange bg-primary-orange text-white capitalize hover:opacity-75 transition">
                            <CartIcon color={null} />
                            add to cart
                        </button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default ProductsContainer