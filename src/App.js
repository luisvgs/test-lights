import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  softShadows,
  PresentationControls,
  useHelper,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import "./App.scss";
import Header from "./components/Header";
import Phone from "./models/Phone";
import { SpotLightHelper } from "three";
import { useSpring, a } from "@react-spring/three";
import { a as web } from "@react-spring/web";
softShadows();

const Lights = () => {
  const light = useRef();
  // useHelper(light, SpotLightHelper, "cyan");
  return (
    <group>
      <ambientLight />
      <spotLight ref={light} position={[50, 40, 40]} castShadow />
    </group>
  );
};

const App = () => {
  const [open, setOpen] = useState(false);
  const props = useSpring({ open: Number(open) });
  return (
    <>
      <web.main
        style={{ background: props.open.to([0, 1], ["#2d4967", "#d25578"]) }}
      >
        <Canvas
          colorManagement
          shadows
          dpr={[1, 2]}
          // frameloop="demand"
          camera={{ fov: 35 }}
        >
          <Suspense fallback={null}>
            <Lights />
            <ambientLight intensity={0.5} />
            <directionalLight
              castShadow
              position={[0, 10, 0]}
              intensity={1.5}
            />
            <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
            <mesh rotation-x={-Math.PI / 2} receiveShadow>
              <planeBufferGeometry args={[100, 100]} attach="geometry" />
              <shadowMaterial attach="material" opacity={0.5} />
            </mesh>
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0.3, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              <group
                rotation={[0, Math.PI, 0]}
                onClick={(e) => (e.stopPropagation(), setOpen(!open))}
              >
                <Phone castShadow />
              </group>
            </PresentationControls>
            <Environment preset="city" />
            <OrbitControls enablePan={false} />
            <gridHelper />
          </Suspense>
        </Canvas>
      </web.main>
    </>
  );
};

export default App;
