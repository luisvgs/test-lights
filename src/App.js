import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  Environment,
  ScrollControls,
  Text,
  Loader,
  softShadows,
  Scroll,
} from "@react-three/drei";
import "./App.scss";
import UnoComponent from "./components/UnoModel";
import SuComponent from "./components/SiteOne";
import SideBar from "./components/SideBar";
import Lights from "./components/Lights";
import Rig from "./rig";
import Plane from "./components/Plane";
import SupportLights from "./components/SupportLight";
import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";

// softShadows();

const App = () => {
  return (
    <>
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
          <PerspectiveCamera
            fov={45}
            position={[0.111, -0.932, 2.191]}
            rotation={[0.0, -6.2, 0.0]}
          >
            <ScrollControls
              infinite={false}
              damping={1}
              pages={2}
              horizontal={true}
            >
              <Scroll>
                <Text
                  position={[-0.471, 1.2, 2]}
                  scale={[1, 1, 0]}
                  fontSize={0.080}
                  color="white"
    maxWidth={0.69}
                  anchorX="center"
                  anchorY="middle"
                >
                  Lorem ipsum dolor sit amet
                </Text>
                <UnoComponent />
                <SuComponent />
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
      <Loader />
    </>
  );
};
export default App;
