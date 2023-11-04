import { Link } from "react-router-dom"
import "./landing.scss"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"
import Scene from "./Scene"

export default function Landing() {
    return (
        <div id="landing">
            <Scene />
            <div className="hero">
                <div className="tagline font-brand">
                    <h1>SIP</h1>
                    <h1>SMILE</h1>
                    <h1>REPEAT</h1>
                </div>
                <Link className="cta flex-center">
                    TAKE A SIP <ArrowRight weight="bold" size={20} />
                </Link>
            </div>
        </div>
    )
}