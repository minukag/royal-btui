import { Link } from "react-router-dom"
import "./landing.scss"

export default function Landing() {
    return (
        <div id="landing">
            <div className="hero">
                <div className="tagline font-brand">
                    <h1>SIP</h1>
                    <h1>SMILE</h1>
                    <h1>REPEAT</h1>
                </div>
                <Link className="cta flex-center">
                    <p>TAKE A SIP</p>
                </Link>
            </div>
        </div>
    )
}