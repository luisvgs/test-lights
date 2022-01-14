import React, { Suspense, createRef, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  PerspectiveCamera,
  // useHelper,
  // Environment,
  Stars,
  OrbitControls,
  TransformControls,
} from "@react-three/drei";
import "./App.scss";
import Phone from "./models/Phone";
// import { SpotLightHelper } from "three";
// import { useSpring, a } from "@react-spring/three";
// import { a as web } from "@react-spring/web";

// const Lights = () => {
//   const light = useRef();
//   // useHelper(light, SpotLightHelper, "cyan");
//   return (
//     <group>
//       <ambientLight />
//       <spotLight ref={light} position={[50, 40, 40]} castShadow />
//     </group>
//   );
// };
function ScrollContainer({ scroll, children }) {
  const { viewport } = useThree();
  const group = useRef();
  useFrame((state, delta) => {
    group.current.position.y = THREE.MathUtils.damp(
      group.current.position.y,
      viewport.height * scroll.current,
      4,
      delta
    );
    // Or: group.current.position.lerp(vec.set(0, viewport.height * scroll.current, 0), 0.1)
  });
  return <group ref={group}>{children}</group>;
}

const Cube = () => {
  return (
    <mesh position={[5, -15, 2]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" color="pink" />
    </mesh>
  );
};

const App = () => {
  const scrollRef = useRef();
  const scroll = useRef(0);
  return (
    <>
      <Canvas
        onCreated={(state) => state.events.connect(scrollRef.current)}
        colorManagement
        shadows
        dpr={[1, 2]}
      >
        <fog attach="fog" args={["#272730", 16, 30]} />
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={75}>
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight
            castShadow
            intensity={2.25}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <Suspense fallback={null}>
          <ScrollContainer scroll={scroll}>
            <Phone castShadow />
            <Cube />
          </ScrollContainer>
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={true} />
        <Stars radius={400} depth={50} count={700} factor={10} />
        <TransformControls />
      </Canvas>
      <div
        ref={scrollRef}
        onScroll={(e) =>
          (scroll.current =
            e.target.scrollTop /
            (e.target.scrollHeight - e.target.clientHeight))
        }
        className="scroll"
      >
        <div style={{ height: `200vh`, pointerEvents: "none" }}></div>
      </div>
      <div className="layer" />
    </>
  );
};

export default App;
