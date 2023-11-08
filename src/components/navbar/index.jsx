import { Link, NavLink } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion"
import "./navbar.scss"
import { useEffect, useState } from "react";

export default function Navbar() {
    const { scrollYProgress } = useScroll()
    const [sectionHeight, setSectionHeight] = useState(0)
    
    useEffect(() => {
        setSectionHeight(window.innerHeight / document.body.scrollHeight)
    }, [])

    return (
        <motion.nav id="navbar"
            style={{color: useTransform(scrollYProgress, [sectionHeight*4.8, sectionHeight*4.85], ["#fff", "#000"])}}
        >
            <div className="nav-links nav-navigation">
                <NavLink href="/">HOME</NavLink>
                <NavLink href="/">PRODUCTS</NavLink>
                <NavLink href="/">PROMOS</NavLink>
                <NavLink href="/">CONTACT US</NavLink>
            </div>
            <div className="nav-brand">
                <Link href="/" className="font-brand">BERRIGO</Link>
            </div>
            <div className="nav-links nav-socials">
                <Link href="https://www.youtube.com/@ACICTS">YOUTUBE</Link>
                <Link href="/">TWITTER</Link>
                <Link href="https://www.instagram.com/acicts.lk/">INSTAGRAM</Link>
            </div>
        </motion.nav>
    )
}