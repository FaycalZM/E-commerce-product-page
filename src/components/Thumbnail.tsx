import { useCartContext } from "../context/CartContextProvider";
import { ProductsActions } from "../types/Types";

type ThumbnailProps = {
    thumbnailURL: string;
    index: number;
    productID: number;
    currentImageIndex: number;
}


const Thumbnail = ({ thumbnailURL, index, productID, currentImageIndex }: ThumbnailProps) => {
    const { dispatchProducts } = useCartContext();
    const active = currentImageIndex === index ? true : false;
    return (
        <div
            onClick={() => {
                dispatchProducts({
                    type: ProductsActions.SELECT_IMAGE,
                    payload: {
                        id: productID,
                        index: index
                    }
                })
            }}
            className={`w-24 h-24 hover:border-opacity-100 border-4 border-transparent ${active ? 'border-primary-orange' : ''} transition rounded-2xl cursor-pointer`}>
            <img
                className="rounded-xl hover:opacity-50 transition"
                src={thumbnailURL} alt="thumbnail" />
        </div>
    )
}

export default Thumbnail