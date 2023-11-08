import { Link } from "react-router-dom"
import "./card.scss"
import { ArrowRight } from "@phosphor-icons/react"

export default function Card({ name, bg, can }){
    return(
        <div className="card" style={{ backgroundImage: `url(${bg})` }}>
            <img className="product" src={ can } />
            <p className="price-tag">$10</p>
            <div className="content">
                <h2 className="drink-name">
                    { name }
                </h2>
                <Link className="cta-sm flex-center">Take a look <ArrowRight weight="bold"/></Link>
            </div>
        </div>
    )
}