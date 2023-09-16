import { useCartContext } from "../context/CartContextProvider"
import { CartActions } from "../types/Types";
import { DeleteIcon } from "./Icons";

const Cart = () => {
    const { cartData, dispatchCart } = useCartContext();
    return (
        <div className='py-6 min-w-[250px] w-fit bg-white absolute z-10 top-24 right-0 translate-x-1/3 shadow-2xl rounded-lg'>
            <p className="px-6 font-bold">Cart</p>
            <hr className="w-full mt-4" />
            <div className="p-6 flex flex-col justify-center items-center gap-8">
                {
                    cartData.cartItems.length
                        ? cartData.cartItems.map(
                            (cartItem) => {
                                return <div className="flex justify-between gap-4 items-center">
                                    <img
                                        className="w-14 rounded-md"
                                        src={cartItem.image}
                                        alt={cartItem.productName} />
                                    <div className="text-very-dark-blue text-opacity-75">
                                        <p className="capitalize">{cartItem.productName} </p>
                                        <p>${cartItem.currentPrice} x {cartItem.quantity} <span className="text-black text-opacity-100 font-bold ml-2">${cartItem.currentPrice * cartItem.quantity} </span> </p>
                                    </div>
                                    <button onClick={() => {
                                        dispatchCart({
                                            type: CartActions.REMOVE_ITEM_FROM_Cart,
                                            payload: {
                                                id: cartItem.id
                                            }
                                        });
                                    }}>
                                        <DeleteIcon />
                                    </button>
                                </div>
                            }
                        )
                        : <p>your cart is empty</p>
                }
            </div>

        </div>
    )
}

export default Cart