import { Link, NavLink } from "react-router-dom";
import "./navbar.scss"

export default function Navbar() {
    return (
        <nav id="navbar">
            <div className="nav-links nav-navigation">
                <NavLink href="/">HOME</NavLink>
                <NavLink href="/">PRODUCTS</NavLink>
                <NavLink href="/">PROMOS</NavLink>
                <NavLink href="/">CONTACT US</NavLink>
            </div>
            <div className="nav-brand">
                <Link href="/" className="font-brand">FRUITDRINK</Link>
            </div>
            <div className="nav-links nav-socials">
                <Link href="/">YOUTUBE</Link>
                <Link href="/">FACEBOOK</Link>
                <Link href="/">INSTAGRAM</Link>
            </div>
        </nav>
    )
}