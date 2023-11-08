import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import "./sectionIntro.scss"
import { Link } from "react-router-dom"
import { ArrowRight } from "@phosphor-icons/react"

function SectionIntro() {
    const { scrollYProgress } = useScroll()
    const [sectionHeight, setSectionHeight] = useState(0)
    
    useEffect(() => {
        setSectionHeight(window.innerHeight / document.body.scrollHeight)
    }, [])

    return (
        <motion.div id="introduction">
            <motion.div className="intro-container"
                style={{
                    y: useTransform(scrollYProgress, [sectionHeight * .5, sectionHeight * 1.5, sectionHeight * 3.5, sectionHeight*4.5], ["100%", "0%", "0%", "-100%"]),
                    opacity: useTransform(scrollYProgress, [sectionHeight * .5, sectionHeight * 1.5, sectionHeight * 3.5, sectionHeight*4.5], [0, 1, 1, 0])
                }}
            >
                <div className="heading">
                    <p>TASTE THE REAL FRUIT</p>
                    <h2 className="font-brand">BERRIGO</h2>
                </div>
                <div className="pros">
                    <div className="pro-point">
                        <h3>100% Healthy</h3>
                        <div className="arrow"></div>
                    </div>
                    <p>Approved by the best health experts</p>

                    <div className="pro-point">
                        <h3>Contains Real Fruits</h3>
                        <div className="arrow"></div>
                    </div>
                    <p>Organic fruit straight from the farm</p>

                    <div className="pro-point">
                        <h3>Recyclable Packaging</h3>
                        <div className="arrow"></div>
                    </div>
                    <p>Enviromentally Friendly</p>
                </div>
                <div className="desc">
                    <p>Experience the irresistible joy of our vibrant fruit drinks with 'Sip, Smile, Repeat!' Each sip is a burst of fruity freshness that is sure to bring a smile to your face. Embrace the delicious flavors and let the good times flow as you sip, smile, and repeat the experience again and again.</p>
                    <Link className="cta-mid flex-center">HAVE A TASTE <ArrowRight weight="bold" size={20} />
                </Link>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default SectionIntro;