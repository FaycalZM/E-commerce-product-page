import { useCartContext } from "../context/CartContextProvider"
import { ProductSliderActions, ProductSliderProps } from "../types/Types";
import { CloseIcon, NextIcon, PreviousIcon } from "./Icons"
import Thumbnail from "./Thumbnail"


const ProductSlider = ({
    currentImageIndex,
    images,
    productID
}: ProductSliderProps) => {
    const { dispatchProductSlider } = useCartContext();
    return (
        <section className="fixed z-20 top-0 left-0 flex justify-center items-center h-full bg-black bg-opacity-75 w-full ">
            <div className="w-[35%] p-6">
                <button
                    className="mb-6 text-center scale-125 w-fit h-fit"
                    onClick={() => {
                        dispatchProductSlider({
                            type: ProductSliderActions.CLOSE_SLIDER,
                            payload: {}
                        });
                    }}>
                    <CloseIcon />
                </button>
                <div className="w-full">
                    <div className="relative">
                        <img
                            className=" w-full h-full rounded-xl cursor-pointer"
                            src={images ? images.large[currentImageIndex] : undefined}
                            alt="product image" />
                        <button
                            onClick={() => {
                                if (images) {
                                    let newImageIndex = currentImageIndex === 0 ? images.large.length - 1 : currentImageIndex - 1;
                                    dispatchProductSlider({
                                        type: ProductSliderActions.UPDATE_SLIDER_PROPS,
                                        payload: {
                                            props: {
                                                currentImageIndex: newImageIndex,
                                                images: images,
                                                productID: productID,
                                            }
                                        }
                                    });
                                }
                            }}
                            className="prev-btn absolute top-1/2 -left-4 bg-light-grayish-blue w-14 h-14 flex items-center justify-center rounded-full">
                            <PreviousIcon />
                        </button>
                        <button
                            onClick={() => {
                                if (images) {
                                    let newImageIndex = currentImageIndex === images.large.length - 1 ? 0 : currentImageIndex + 1;
                                    dispatchProductSlider({
                                        type: ProductSliderActions.UPDATE_SLIDER_PROPS,
                                        payload: {
                                            props: {
                                                currentImageIndex: newImageIndex,
                                                images: images,
                                                productID: productID,
                                            }
                                        }
                                    });
                                }
                            }}
                            className="next-btn absolute top-1/2 -right-4 bg-light-grayish-blue w-14 h-14 flex items-center justify-center rounded-full">
                            <NextIcon />
                        </button>
                    </div>
                    <div className="flex justify-between mt-8">
                        {
                            images
                                ? images.thumbnails.map(
                                    (thumbnail: string, index: number) => <Thumbnail
                                        key={index}
                                        thumbnailURL={thumbnail}
                                        productID={productID}
                                        index={index}
                                        currentImageIndex={currentImageIndex}
                                        images={images}
                                    />
                                )
                                : null
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductSlider