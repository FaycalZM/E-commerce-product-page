import { useCartContext } from "../context/CartContextProvider";
import Navlink from "./Navlink";

const links = [
    'Collections',
    'Men',
    'Women',
    'About',
    'Contact'
];

const Navbar = () => {
    const { isMenuOpened } = useCartContext();
    return (
        <nav className={`tablet:block ${isMenuOpened ? 'block' : 'hidden'} tablet:relative fixed tablet:z-0 z-30 top-0 left-0 tablet:h-fit h-full tablet:w-fit w-full tablet:bg-transparent bg-black bg-opacity-75`}>

            <ul className='flex tablet:flex-row flex-col laptop:gap-6 gap-3 font-normal tablet:bg-transparent bg-white h-full w-3/5 tablet:pt-0 pt-24 tablet:px-0 px-6'>
                {
                    links.map((link, index) => <Navlink key={index} path={link} />)
                }
            </ul>
        </nav>
    )
}

export default Navbar