import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Telefono = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/arte_completo.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Titanium_unibody.geometry}
        material={materials.Metal}
      />
    </group>
  );
};

export default Telefono;
