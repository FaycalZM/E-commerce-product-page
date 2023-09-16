
import { useCartContext } from '../context/CartContextProvider'
import Avatar from './Avatar'
import Cart from './Cart'
import { CartIcon } from './Icons'
import Navbar from './Navbar'
import Logo from '/icons/logo.svg'

const Header = () => {
    const { isCartVisible, toggleCart } = useCartContext();
    return (
        <header className='flex justify-between items-center border-b-[1px]  '>
            <div className='flex items-center gap-16'>
                <a href="/">
                    <img
                        className='h-6 cursor-pointer'
                        src={Logo}
                        alt="logo" />
                </a>
                <Navbar />
            </div>
            <div className='flex items-center gap-8 relative'>
                <button onClick={() => {
                    toggleCart();
                }}>
                    <CartIcon color={"#69707D"} />
                </button>

                <Avatar imageURL='/images/image-avatar.png' />
                {
                    isCartVisible ? <Cart /> : null
                }

            </div>
        </header>
    )
}

export default Header