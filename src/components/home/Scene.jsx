import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import "./scene.scss"

function Scene() {
    const obj = useLoader(OBJLoader, 'can.obj')
    
    return (
      <Canvas id="can">
        <ambientLight />
        {/* <pointLight position={[10, 10, 10]} /> */}
        <primitive object={obj} />
      </Canvas>
    )
}

export default Scene