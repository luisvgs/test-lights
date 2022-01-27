import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import DinoModel from "../Dinosaur.glb";

const Dinosaur = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(DinoModel);
  useFrame(() => (group.current.rotation.y += 0.004));
  return (
    <group position={[5, -36, 2]} ref={group} {...props} dispose={null}>
      <skinnedMesh
        geometry={nodes.Trex_15k_Eyes_Geo.geometry}
        material={materials.eyes_Mat}
        skeleton={nodes.Trex_15k_Eyes_Geo.skeleton}
        position={[0, 1.41, 0.08]}
      />
      <skinnedMesh
        geometry={nodes.Trex_15k_Body_Geo.geometry}
        material={materials.body_Mat}
        skeleton={nodes.Trex_15k_Body_Geo.skeleton}
      />
      <primitive object={nodes.root} />
    </group>
  );
};

export default Dinosaur;

useGLTF.preload("/Dinosaur.glb");
