import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import SuModel from "../models/logo_su.glb";
import { useFrame } from "@react-three/fiber";

const SuComponent = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(SuModel);
  useFrame(() => (group.current.rotation.y += 0.009));
  return (
    <group
      ref={group}
      scale={[3, 3, 1]}
      castShadow
      receiveShadow
      position={[3.405, 0.88, 2]}
      {...props}
      dispose={null}
    >
      <group name="Scene">
        <mesh
          name="Curve007"
          castShadow
          receiveShadow
          geometry={nodes.Curve007.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/logo_su.glb");
export default SuComponent;
