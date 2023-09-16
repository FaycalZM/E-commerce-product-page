
import { CartItem } from '../types/Types'
import { CartIcon, MinusIcon, PlusIcon } from './Icons'
import Thumbnail from './Thumbnail'

const Product = ({
    companyName,
    productName,
    description,
    currentPrice,
    originalPrice,
    discount,
    quantity,
    images,
    currentImageIndex,
}: CartItem) => {
    return (
        <article className="flex gap-36 items-center justify-center mb-12">
            <div className="w-[40%]">
                <img
                    className=" w-full rounded-xl"
                    src={images.large[currentImageIndex]}
                    alt="product image" />
                <div className="flex justify-between mt-8">
                    {
                        images.thumbnails.map(
                            (thumbnail) => <Thumbnail thumbnailURL={thumbnail} />
                        )
                    }
                </div>
            </div>

            <div className="w-[40%] ">
                <p className="text-primary-orange text-sm tracking-wider font-bold uppercase mb-6">
                    {companyName}
                </p>
                <h1 className="text-5xl font-bold text-very-dark-blue mb-8 capitalize">
                    {productName}
                </h1>
                <p className="text-dark-grayish-blue mb-6">
                    {description}
                </p>
                <p className="text-3xl font-bold text-very-dark-blue flex items-center mb-2">${currentPrice}
                    {
                        discount
                            ? <span className="h-fit px-2 py-[2px] ml-2 text-primary-orange text-base bg-pale-orange rounded-lg">{discount}</span>
                            : null
                    }
                </p>
                {
                    originalPrice
                        ? <p className="line-through text-grayish-blue text-opacity-50 font-bold mb-8">$250.00</p>
                        : null
                }

                <div className="flex gap-6">
                    <div className="flex gap-8 py-3 px-4 bg-light-grayish-blue rounded-lg">
                        <button className="hover:opacity-50 transition">
                            <MinusIcon />
                        </button>
                        <p className="font-bold text-very-dark-blue">{quantity}</p>
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
    )
}

export default Product