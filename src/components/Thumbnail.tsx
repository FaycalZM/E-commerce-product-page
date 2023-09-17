/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useCartContext } from "../context/CartContextProvider";
import { ImagesType, ProductSliderActions, ProductsActions } from "../types/Types";

type ThumbnailProps = {
    thumbnailURL: string;
    index: number;
    productID: number | null;
    currentImageIndex: number;
    images: ImagesType;
}


const Thumbnail = ({ thumbnailURL, index, productID, currentImageIndex, images }: ThumbnailProps) => {
    const { dispatchProducts, dispatchProductSlider } = useCartContext();
    const active = currentImageIndex === index ? true : false;

    useEffect(() => {
        dispatchProductSlider({
            type: ProductSliderActions.UPDATE_SLIDER_PROPS,
            payload: {
                props: {
                    currentImageIndex: currentImageIndex,
                    images: images,
                    productID: productID,
                }
            }
        });
    }, [currentImageIndex]);

    return (
        <div
            onClick={() => {
                dispatchProducts({
                    type: ProductsActions.SELECT_IMAGE,
                    payload: {
                        id: productID,
                        index: index
                    }
                });

            }}
            className={`w-24 border-4  ${active ? 'border-primary-orange' : 'border-transparent'} transition rounded-2xl cursor-pointer`}>
            <img
                className={`rounded-xl hover:opacity-50 ${active ? 'opacity-50' : ''} transition`}
                src={thumbnailURL} alt="thumbnail" />
        </div>
    )
}

export default Thumbnail