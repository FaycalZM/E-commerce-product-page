
type NavlinkProps = {
    path: string;
}

const Navlink = ({ path }: NavlinkProps) => {
    return (
        <li className="nav-link tablet:py-12 py-1 text-very-dark-blue text-opacity-75 tablet:font-normal font-bold hover:text-opacity-100 transition">
            <a href="#">{path}</a>
        </li>
    )
}

export default Navlink