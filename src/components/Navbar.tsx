

const Navbar = () => {
    return (
        <nav className="">
            <ul className='flex gap-6 font-normal'>
                <li className="nav-link py-12 text-black text-opacity-75 hover:text-opacity-100 transition">
                    <a href="#">Collections</a>
                </li>
                <li className="nav-link py-12 text-black text-opacity-75 hover:text-opacity-100 transition">
                    <a href="#">Men</a>
                </li>
                <li className="nav-link py-12 text-black text-opacity-75 hover:text-opacity-100 transition">
                    <a href="#">Women</a>
                </li>
                <li className="nav-link py-12 text-black text-opacity-75 hover:text-opacity-100 transition">
                    <a href="#">About</a>
                </li>
                <li className="nav-link py-12 text-black text-opacity-75 hover:text-opacity-100 transition">
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar