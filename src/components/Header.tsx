
import Avatar from './Avatar'
import { CartIcon } from './Icons'
import Navbar from './Navbar'
import Logo from '/icons/logo.svg'

const Header = () => {
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
            <div className='flex items-center gap-8'>
                <CartIcon />
                <Avatar imageURL='/images/image-avatar.png' />
            </div>
        </header>
    )
}

export default Header