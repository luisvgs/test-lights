import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { SpotLightHelper } from "three";
import {
  PerspectiveCamera,
  OrbitControls,
  ScrollControls,
  useHelper,
  Scroll,
} from "@react-three/drei";
import "./App.scss";
import * as THREE from "three";
import UnoModel from "./components/UnoModel";
import Header from "./components/Header";
import Lights from "./components/Lights";

const Rig = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 0.6, mouse.y * 0.6, camera.position.z),
      0.008
    )
  );
};

const Plane = () => {
  return (
    <mesh position={[0, 0.0, -0.68]} receiveShadow scale={[20.4, 30.3, 0.98]}>
      <planeBufferGeometry />
      <meshStandardMaterial attach="material" color="#090981" />
    </mesh>
  );
};
const Floor = () => {
  return (
    <mesh
      position={[1.548, 0.0, -4.923]}
      receiveShadow
      scale={[20.4, 30.3, 0.98]}
    >
      <planeBufferGeometry />
      <meshStandardMaterial attach="material" color="#090981" />
    </mesh>
  );
};

const SecondLight = () => {
  const light = useRef();
  useHelper(light, SpotLightHelper, "red");
  return (
    <group>
      <spotLight
        castShadow
        intensity={0.4}
        color={"blue"}
        penumbra={1.0}
        ref={light}
        position={[-1.111, -0.232, 7.864]}
      />
    </group>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Canvas concurrent shadows pixelRatio={1.25}>
        <fog attach="fog" args={["#272730", 0.1, 30]} />
        <ambientLight color={"purple"} intensity={0.4} />
        <SecondLight />
        <Lights />
        <Suspense fallback={null}>
          <PerspectiveCamera fov={50} position={[0.111, -0.732, 1.864]}>
            <ScrollControls damping={1} pages={1}>
              <Scroll>
                <UnoModel />
                <Plane />
                <Floor />
              </Scroll>
            </ScrollControls>
          </PerspectiveCamera>
        </Suspense>
        <Rig />
        <OrbitControls />
      </Canvas>
      <div className="layer" />
    </>
  );
};
export default App;
