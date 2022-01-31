import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import PhoneModel from "../models/arte_completo.glb";

const Telefono = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(PhoneModel);
  useFrame(() => (group.current.rotation.y += 0.004));
  return (
    <group
      position={[5, -4, 2]}
      scale={12}
      ref={group}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Titanium_unibody.geometry}
        material={materials.Metal}
      />
    </group>
  );
};

useGLTF.preload("/arte_completo.glb");

export default Telefono;
