import {
  Environment,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  softShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import "./App.scss";
// import Fireflies from "./components/Fireflies";
import Lights from "./components/Lights";
import Plane from "./components/Plane";
import SideBar from "./components/SideBar";
import SupportLights from "./components/SupportLight";
import UnoModel from "./components/UnoModel";
import Rig from "./rig";

softShadows();

const App = () => {
  return (
    <>
      <div className="text-background">
        <h1 class>
          <p>Lorem ipsum dolor sit amet</p>
        </h1>
      </div>
      <SideBar />
      <Canvas dpr={[1, 1.5]} shadows>
        <fog attach="fog" args={["red", 50, 60]} />
        <color attach="background" args={["#17171b"]} />

        <ambientLight color={"purple"} intensity={0.4} />
        <Lights />
        <SupportLights />
        <Suspense fallback={null}>
          <PerspectiveCamera fov={10} position={[0.111, -0.932, 2.251]}>
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
        {/* <OrbitControls enableZoom={false} /> */}
      </Canvas>
      <div className="layer" />
    </>
  );
};
export default App;
