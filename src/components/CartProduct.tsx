import { DeleteIcon } from './Icons';
import { useCartContext } from '../context/CartContextProvider';
import { CartActions, CartItem } from '../types/Types';


const CartProduct = ({
    id,
    image,
    productName,
    quantity,
    currentPrice
}: CartItem) => {
    const { dispatchCart } = useCartContext();
    return (
        <div className="flex justify-between gap-4 items-center">
            <img
                className="w-14 rounded-md"
                src={image}
                alt={productName} />
            <div className="text-very-dark-blue text-opacity-75">
                <p className="capitalize">{productName} </p>
                <p>${currentPrice} x {quantity} <span className="text-black text-opacity-100 font-bold ml-2">${currentPrice * quantity} </span> </p>
            </div>
            <button onClick={() => {
                dispatchCart({
                    type: CartActions.REMOVE_ITEM_FROM_Cart,
                    payload: {
                        id: id
                    }
                });
                dispatchCart({
                    type: CartActions.UPDATE_TOTAL_ITEMS,
                    payload: {}
                });
            }}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default CartProduct