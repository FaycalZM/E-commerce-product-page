
import { useCartContext } from '../context/CartContextProvider'
import { CartActions, ProductsActions, ProductSliderActions, ProductType } from '../types/Types'
import { CartIcon, MinusIcon, NextIcon, PlusIcon, PreviousIcon } from './Icons'
import Thumbnail from './Thumbnail'

const Product = ({
    id,
    companyName,
    productName,
    description,
    currentPrice,
    originalPrice,
    discount,
    quantity,
    images,
    currentImageIndex
}: ProductType) => {
    const { dispatchProducts, dispatchCart, dispatchProductSlider } = useCartContext();
    return (
        <article className="flex laptop:flex-row flex-col laptop:gap-36 gap-8 items-center justify-center mb-12">
            <div className="laptop:w-[40%] ">
                <div className='relative'>
                    <img
                        onClick={() => {
                            dispatchProductSlider({
                                type: ProductSliderActions.OPEN_SLIDER,
                                payload: {}
                            });
                            dispatchProductSlider({
                                type: ProductSliderActions.UPDATE_SLIDER_PROPS,
                                payload: {
                                    props: {
                                        currentImageIndex: currentImageIndex,
                                        images: images,
                                        productID: id,
                                    }
                                }
                            });
                        }}
                        className=" laptop:w-full tablet:w-3/4 w-ful tablet:h-fit h-[50vh] mx-auto tablet:rounded-xl cursor-pointer"
                        src={images.large[currentImageIndex]}
                        alt="product image" />
                    <button
                        onClick={() => {
                            const newImageIndex = currentImageIndex === 0 ? images.large.length - 1 : currentImageIndex - 1;
                            dispatchProducts({
                                type: ProductsActions.SELECT_IMAGE,
                                payload: {
                                    id: id,
                                    index: newImageIndex,
                                }
                            });
                        }}
                        className="prev-btn tablet:hidden opacity-75 absolute top-1/2 -translate-y-1/2 left-2 bg-light-grayish-blue w-14 h-14 flex items-center justify-center rounded-full">
                        <PreviousIcon />
                    </button>
                    <button
                        onClick={() => {
                            const newImageIndex = currentImageIndex === images.large.length - 1 ? 0 : currentImageIndex + 1;
                            dispatchProducts({
                                type: ProductsActions.SELECT_IMAGE,
                                payload: {
                                    id: id,
                                    index: newImageIndex,
                                }
                            });
                        }}
                        className="next-btn tablet:hidden opacity-75 absolute top-1/2 -translate-y-1/2 right-2 bg-light-grayish-blue w-14 h-14 flex items-center justify-center rounded-full">
                        <NextIcon />
                    </button>
                </div>
                <div className="tablet:flex hidden laptop:justify-between justify-center items-center tablet:gap-8 gap-4 tablet:flex-nowrap flex-wrap mt-8">
                    {
                        images.thumbnails.map(
                            (thumbnail, index) => <Thumbnail
                                key={index}
                                thumbnailURL={thumbnail}
                                productID={id}
                                index={index}
                                currentImageIndex={currentImageIndex}
                                images={images}
                            />
                        )
                    }
                </div>
            </div>

            <div className="laptop:w-[40%] tablet:w-3/4 w-full tablet:px-0 px-6 laptop:text-left tablet:text-center">
                <p className="text-primary-orange text-sm tracking-wider font-bold uppercase tablet:mb-6 mb-4">
                    {companyName}
                </p>
                <h1 className="tablet:text-5xl text-4xl font-bold text-very-dark-blue tablet:mb-8 mb-6 capitalize">
                    {productName}
                </h1>
                <p className="text-dark-grayish-blue mb-6">
                    {description}
                </p>
                <div className='tablet:block flex items-center justify-between mb-4'>
                    <p className="text-3xl font-bold text-very-dark-blue flex items-center laptop:justify-start tablet:justify-center tablet:mb-2">${currentPrice.toFixed(2)}
                        {
                            discount
                                ? <span className="h-fit px-2 py-[2px] ml-2 text-primary-orange text-base bg-pale-orange rounded-lg">{discount}</span>
                                : null
                        }
                    </p>
                    {
                        originalPrice
                            ? <p className="line-through text-grayish-blue text-opacity-50 font-bold tablet:mb-8">${originalPrice.toFixed(2)}</p>
                            : null
                    }
                </div>

                <div className="flex tablet:flex-row flex-col justify-center gap-6">
                    <div className="flex tablet:gap-8 tablet:justify-center justify-between tablet:py-3 py-5 px-4 bg-light-grayish-blue rounded-lg items-center">
                        <button
                            onClick={() => {
                                dispatchProducts({
                                    type: ProductsActions.MINUS_ONE_ITEM,
                                    payload: {
                                        id: id
                                    }
                                });
                            }}
                            className="hover:opacity-50 transition">
                            <MinusIcon />
                        </button>
                        <p className="font-bold text-very-dark-blue">{quantity}</p>
                        <button
                            onClick={() => {
                                dispatchProducts({
                                    type: ProductsActions.PLUS_ONE_ITEM,
                                    payload: {
                                        id: id
                                    }
                                });
                            }}
                            className="hover:opacity-50 transition">
                            <PlusIcon />
                        </button>
                    </div>
                    <button
                        onClick={() => {
                            dispatchCart({
                                type: CartActions.ADD_ITEM_TO_CART,
                                payload: {
                                    item: {
                                        id,
                                        productName,
                                        currentPrice,
                                        quantity,
                                        image: images.thumbnails[0]
                                    }
                                }
                            });
                            dispatchCart({
                                type: CartActions.UPDATE_TOTAL_ITEMS,
                                payload: {}
                            });
                        }}
                        className="add-to-cart-btn flex justify-center gap-4 px-16 tablet:py-3 py-6 rounded-lg tablet:shadow-2xl shadow-lg shadow-primary-orange bg-primary-orange text-white capitalize hover:opacity-75 transition">
                        <CartIcon color={null} />
                        add to cart
                    </button>
                </div>
            </div>
        </article>
    )
}

export default Product