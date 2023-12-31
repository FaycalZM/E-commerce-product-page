import { useCartContext } from "../context/CartContextProvider"
import CartProduct from "./CartProduct";


const Cart = () => {
    const { cartData } = useCartContext();
    return (
        <div className='py-6 min-w-[250px] tablet:w-fit w-[95%] bg-white absolute z-10 tablet:top-24 top-20 right-0 laptop:translate-x-1/3 tablet:translate-x-0 -translate-x-[10.5px] shadow-xl rounded-lg'>
            <p className="px-6 font-bold">Cart</p>
            <hr className="w-full mt-4" />
            <div className="px-6 pt-6 flex flex-col justify-center items-center gap-8">
                {
                    cartData.cartItems.length
                        ? cartData.cartItems.map(
                            (cartItem, index) => {
                                return <CartProduct
                                    key={index}
                                    {...cartItem}
                                />
                            }
                        )
                        : <p>your cart is empty</p>
                }
                {
                    cartData.totalItems > 0
                        ? <button className="bg-primary-orange w-full px-6 py-3 rounded-lg text-white font-bold capitalize hover:opacity-50 transition">
                            checkout
                        </button>
                        : null
                }

            </div>


        </div>
    )
}

export default Cart