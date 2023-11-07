import can from "/src/assets/can3.png"
import "./can.scss"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export default function Can() {
    const { scrollYProgress } = useScroll()
    const [sectionHeight, setSectionHeight] = useState(0)
    
    useEffect(() => {
        setSectionHeight(window.innerHeight / document.body.scrollHeight)
    }, [])

    return (
        
        <div id="can" className="flex-center" >
            <motion.img src={can} 
            style={{ 
                scale: useTransform(scrollYProgress, [0, sectionHeight, sectionHeight *3, sectionHeight*4], [2.4, 1, 1, 0]),
                marginTop: useTransform(scrollYProgress, [0, sectionHeight], ["40%", "18%"]),
                opacity: useTransform(scrollYProgress, [sectionHeight * 3, sectionHeight * 4], [1, 0])
            }}
            />
        </div>
    )
}