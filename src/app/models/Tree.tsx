/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: DailyArt (https://sketchfab.com/D.art)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/essence-of-nature-dcdbf2a99bb94adabeba0913d6dd5012
Title: Essence of nature
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from '@react-spring/three'

import treeScene from '../../../public/assets/3d/tree.glb'

const Tree = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const treeRef = useRef();

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(treeScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches
      ? e.touches[0].clientX
      : e.clientX

    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches
      ? e.touches[0].clientX
      : e.clientX

      const delta = (clientX - lastX.current) / viewport.width;

      treeRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true)
      treeRef.current.rotation.y += 0.01 * Math.PI
      rotationSpeed.current += 0.0125
    } else {
      if (!isRotating) setIsRotating(true)
      treeRef.current.rotation.y -= 0.01 * Math.PI
      rotationSpeed.current -= 0.0125
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false)
    }
  }

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0
      }

      treeRef.current.rotation.y += rotationSpeed.current
    } else {
      const rotation = treeRef.current.rotation.y

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  })

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown)
    canvas.addEventListener('pointerup', handlePointerUp)
    canvas.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown)
      canvas.removeEventListener('pointerup', handlePointerUp)
      canvas.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }

  }), [gl, handlePointerDown, handlePointerUp, handlePointerMove]

  return (
    <a.group {...props} ref={treeRef}>
      <mesh
        geometry={nodes.Retopo_polySurface203_yezi_0.geometry}
        material={materials.yezi}
      />
      <mesh
        geometry={nodes.Retopo_polySurface266_yezi_0.geometry}
        material={materials.yezi}
      />
      <mesh
        geometry={nodes.polySurface676_yezi_0.geometry}
        material={materials.yezi}
      />
      <mesh
        geometry={nodes.polySurface677_yezi_0.geometry}
        material={materials.yezi}
      />
      <mesh
        geometry={nodes.Retopo_polySurface197_yezi_0.geometry}
        material={materials.yezi}
      />
      <mesh
        geometry={nodes.polySurface509_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface396_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface413_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface468_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface481_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface384_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface550_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface304_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface436_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface437_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.dimo_fuzhi_polySurface589_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface417_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface923_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface484_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.dimo_fuzhi_polySurface501_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface308_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.dimo_fuzhi_polySurface577_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface924_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface925_shui_0.geometry}
        material={materials.shui}
      />
      <mesh
        geometry={nodes.polySurface926_zhuti_0.geometry}
        material={materials.zhuti}
      />
      <mesh
        geometry={nodes.polySurface7_shitou_0.geometry}
        material={materials.shitou}
        position={[0, -0.101, -0.047]}
      />
      <mesh
        geometry={nodes.polySurface193_shitou_0.geometry}
        material={materials.shitou}
      />
      <mesh
        geometry={nodes.polySurface9_shitou_0.geometry}
        material={materials.shitou}
        position={[0.055, 0, -0.12]}
      />
      <mesh
        geometry={nodes.polySurface8_shitou_0.geometry}
        material={materials.shitou}
        position={[0, 0, -0.088]}
      />
      <mesh
        geometry={nodes.polySurface214_shitou_0.geometry}
        material={materials.shitou}
      />
      <mesh
        geometry={nodes.polySurface222_shitou_0.geometry}
        material={materials.shitou}
      />
      <mesh
        geometry={nodes.shitou8_polySurface1_shitou_0.geometry}
        material={materials.shitou}
      />
      <mesh
        geometry={nodes.polySurface278_shitou_0.geometry}
        material={materials.shitou}
      />
      <mesh
        geometry={nodes.polySurface262_shitou_0.geometry}
        material={materials.shitou}
      />
      <mesh
        geometry={nodes.polySurface280_shitou_0.geometry}
        material={materials.shitou}
      />
      <mesh
        geometry={nodes.polySurface678_shitou_0.geometry}
        material={materials.shitou}
        position={[0, 0, 0.127]}
      />
      <mesh
        geometry={nodes.polySurface679_shitou_0.geometry}
        material={materials.shitou}
      />
      <mesh
        geometry={nodes.polySurface680_shitou_0.geometry}
        material={materials.shitou}
        position={[0.166, 0, -0.025]}
      />
      <mesh
        geometry={nodes.polySurface683_shitou_0.geometry}
        material={materials.shitou}
      />
      <mesh
        geometry={nodes.polySurface681_shitou_0.geometry}
        material={materials.shitou}
        position={[0.103, 0, 0]}
      />
      <mesh
        geometry={nodes.polySurface917_shitou_0.geometry}
        material={materials.shitou}
      />
      <mesh
        geometry={nodes.polySurface875_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface715_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface756_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface796_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface821_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface741_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface711_zhiwu1_0.geometry}
        material={materials.zhiwu1}
        position={[0, 0.301, 0]}
      />
      <mesh
        geometry={nodes.polySurface810_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface815_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface801_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface805_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface855_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface717_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface877_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface882_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface920_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface892_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface919_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface802_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface809_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface752_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface891_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface893_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface894_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
      <mesh
        geometry={nodes.polySurface823_zhiwu1_0.geometry}
        material={materials.zhiwu1}
      />
    </a.group>
  );
}

export default Tree;