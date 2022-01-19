import React, { useState, Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Stars,
  Stats,
  Html,
  OrbitControls,
} from "@react-three/drei";
import "./App.scss";
import state from "./state";
// import Phone from "./models/Phone";
import Telefono from "./models/Telefono";
import Dinosaur from "./models/Dino";
import { Block } from "./block";

const Cube = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      position={[5, -19, 2]}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};
const App = () => {
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <>
      <Canvas colorManagement shadows dpr={[1, 2]}>
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
          <Block factor={1.5} offset={0}>
            <Telefono castShadow />
            <Cube castShadow />
            <Dinosaur castShadow />
          </Block>
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
        <Stars radius={400} depth={50} count={900} factor={10} />
        <Stats />
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
      <div className="layer" />
    </>
  );
};

export default App;
