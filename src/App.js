import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  ScrollControls,
  Scroll,
} from "@react-three/drei";
import "./App.scss";
import UnoModel from "./components/UnoModel";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Lights from "./components/Lights";
import Rig from "./rig";
import Plane from "./components/Plane";
import SupportLights from "./components/SupportLight";

const App = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Canvas concurrent shadows pixelRatio={1.25}>
        <fog attach="fog" args={["#272730", 0.1, 30]} />
        <ambientLight color={"purple"} intensity={0.4} />
        <Lights />
        <SupportLights />
        <Suspense fallback={null}>
          <PerspectiveCamera fov={50} position={[0.111, -0.732, 1.864]}>
            <ScrollControls damping={1} pages={1}>
              <Scroll>
                <UnoModel />
                <Plane />
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
