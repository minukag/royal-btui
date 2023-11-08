import { motion } from "framer-motion"
import "./products.scss"
import Card from "../card"

import canSb from "/src/assets/can-strawberry.png"
import canGr from "/src/assets/can-grape.png"
import canAp from "/src/assets/can-apple.png"
import cardSb from "/src/assets/card-strawberry.png"
import cardGr from "/src/assets/card-grape.jpg"
import cardAp from "/src/assets/card-apple.png"

export default function Products() {
    return (
        <div id="products">
            <motion.h1 className="flex-center"
            >TAKE A SIP</motion.h1>
            <div className="product-cards">
                <Card name="Strawberry" can={canSb} bg={cardSb}/>
                <Card name="Apple Green" can={canAp} bg={cardAp}/>
                <Card name="Grape Bliss" can={canGr} bg={cardGr}/>
            </div>
        </div>
    )
}