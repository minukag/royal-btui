import { Link } from "react-router-dom"
import "./footer.scss"

export default function Footer() {
    return (
        <footer id="footer">
            <div className="tagline font-brand flex-center">
                <span>SIP</span>
                <span>SMILE</span>
                <span>REPEAT</span>
            </div>
            <div className="bottom">
                <Link href="/" className="font-brand brand">BERRIGO</Link>
                <p className="copyright">Copyright Reserved. Berrigo ©️ 2023 </p>
                <Link href="https://www.youtube.com/@ACICTS">YOUTUBE</Link>
                <Link href="/">TWITTER</Link>
                <Link href="https://www.instagram.com/acicts.lk/">INSTAGRAM</Link>
            </div>
        </footer>
    )
}