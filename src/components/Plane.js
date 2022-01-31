import { DoubleSide } from "three";

const Plane = () => {
  return (
    <group>
      <mesh
        position={[0, 0.0, 1.033]}
        receiveShadow
        castShadow
        scale={[20.4, 30.3, 0.98]}
      >
        <planeBufferGeometry />
        <meshStandardMaterial attach="material" color="#090981" />
      </mesh>
      <mesh
        position={[0, -0.0126, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        receiveShadow
        scale={[20.4, 30.3, 0.98]}
      >
        <planeBufferGeometry />
        <meshStandardMaterial
          attach="material"
          color="#090981"
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default Plane;
