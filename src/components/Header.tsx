
import { useCartContext } from '../context/CartContextProvider'
import { CartActions } from '../types/Types'
import Avatar from './Avatar'
import Cart from './Cart'
import { CartIcon } from './Icons'
import Navbar from './Navbar'
import Logo from '/icons/logo.svg'

const Header = () => {
    const { cartData, dispatchCart } = useCartContext();
    return (
        <header className='flex justify-between items-center border-b-[1px] relative '>
            <div className='flex items-center gap-16'>
                <a href="/">
                    <img
                        className='h-6 cursor-pointer'
                        src={Logo}
                        alt="logo" />
                </a>
                <Navbar />
            </div>
            <div className='flex items-center gap-8'>
                <button
                    className='relative'
                    onClick={() => {
                        dispatchCart({
                            type: CartActions.TOGGLE_CART,
                            payload: null
                        })
                    }}>
                    <div className='bg-primary-orange text-white rounded-lg text-xs absolute w-full -translate-y-2 translate-x-2 z-10'>
                        {cartData.cartItems.length}
                    </div>
                    <CartIcon color={"#69707D"} />
                </button>
                <Avatar imageURL='/images/image-avatar.png' />
                {
                    cartData.isVisible ? <Cart /> : null
                }
            </div>
        </header>
    )
}

export default Header