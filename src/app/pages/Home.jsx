'use client'

import { useState, useRef, Suspense } from 'react'

import { Canvas } from '@react-three/fiber'

import Loader from '../ui/Loader'
import Island from '../models/Island'
import Tree from '../models/Tree'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../ui/HomeInfo'

import { soundoff, soundon } from '../../../public/assets/icons'

const HomePage = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)

  const adjustTreeForScreenSize = () => {
    let screenScale = null;
    let screenPosistion = [-15, -25, -76];
    let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosistion, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosistion;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosistion = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosistion = [0, -4, -4] 
    }

    return [screenScale, screenPosistion]
  }

  const [treeScale, treePosition, treeRotation] = adjustTreeForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();


  return (
    <section className='w-full h-screen relative'>
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} /> }
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />} >
          <directionalLight position={[0.5, 2, 2]} intensity={3.5}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000" intensity={1}/>
          <Bird />
          {/* <Sky isRotating={isRotating} /> */}
          <Tree
            position={treePosition}
            scale={treeScale}
            rotation={treeRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          alt="sound"
          src={!isPlayingMusic ? soundoff.src : soundon.src}
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>

    </section>
  )
}

export default HomePage