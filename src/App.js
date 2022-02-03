import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  Environment,
  ScrollControls,
  Scroll,
} from "@react-three/drei";
import "./App.scss";
import UnoModel from "./components/UnoModel";
import SideBar from "./components/SideBar";
// import Fireflies from "./components/Fireflies";
import Lights from "./components/Lights";
import Rig from "./rig";
import Plane from "./components/Plane";
import SupportLights from "./components/SupportLight";
import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";

const App = () => {
  return (
    <>
      <div className="text-background">
        <h1 class>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </h1>
      </div>
      <SideBar />
      <Canvas
        dpr={[1, 1.5]}
        shadows
        gl={{
          physicallyCorrectLights: true,
          stencil: true,
          depth: false,
          alpha: false,
          antialias: false,
        }}
      >
        <fog attach="fog" args={["red", 50, 60]} />
        <color attach="background" args={["#17171b"]} />

        <ambientLight color={"purple"} intensity={0.4} />
        <Lights />
        <SupportLights />
        <Suspense fallback={null}>
          <PerspectiveCamera fov={10} position={[0.111, -0.932, 2.001]}>
            <ScrollControls damping={1} pages={1}>
              <Scroll>
                <UnoModel />
                <Plane />
              </Scroll>
            </ScrollControls>
          </PerspectiveCamera>
          <Environment preset="city" />
        </Suspense>
        <Rig />
        <OrbitControls />
        {/*
    
        <EffectComposer multisampling={0}>
          <SSAO
            samples={11}
            radius={30}
            intensity={20}
            luminanceInfluence={0.6}
            color="red"
          />
          <Bloom
            intensity={1.25}
            kernelSize={2}
            luminanceThreshold={0.8}
            luminanceSmoothing={0.0}
          />
        </EffectComposer>
    */}
      </Canvas>
      <div className="layer" />
    </>
  );
};
export default App;
