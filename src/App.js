import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  Environment,
  ScrollControls,
  softShadows,
  Scroll,
} from "@react-three/drei";
import "./App.scss";
import UnoComponent from "./components/UnoModel";
import SuComponent from "./components/SiteOne";
import SideBar from "./components/SideBar";
// import Fireflies from "./components/Fireflies";
import Lights from "./components/Lights";
import Rig from "./rig";
import Plane from "./components/Plane";
import SupportLights from "./components/SupportLight";
import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";

// softShadows();

const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading..</p>}>
        <div className="text-background">
          <h1 class>
            <p>Lorem ipsum dolor sit amet</p>
          </h1>
        </div>
        <SideBar />
        <Canvas
          dpr={[1, 1.5]}
          shadows
          gl={{
            physicallyCorrectLights: true,
          }}
        >
          <fog attach="fog" args={["red", 50, 60]} />
          <color attach="background" args={["#17171b"]} />

          <ambientLight color={"purple"} intensity={3.7} />
          <Lights />
          <SupportLights />
          <Suspense fallback={null}>
            <PerspectiveCamera fov={3} position={[0.111, -0.932, 2.251]}>
              <ScrollControls damping={1} pages={2} horizontal={true}>
                <Scroll>
                  <UnoComponent />
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
      </Suspense>
    </>
  );
};
export default App;
