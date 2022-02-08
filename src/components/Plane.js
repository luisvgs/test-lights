import { DoubleSide } from "three";
import { useLoader } from "@react-three/fiber";
import WallTexture from "../img/Background.png";
import { MeshReflectorMaterial, useTexture } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
const Plane = () => {
  const colorMap = useLoader(TextureLoader, WallTexture);
  return (
    <group>
      {/* Walls */}
      <mesh
        position={[0, 0.0, 1.033]}
        receiveShadow
        castShadow
        scale={[20.4, 30.3, 0.98]}
      >
        <planeBufferGeometry />
        <meshStandardMaterial
          attach="material"
          color="#090981"
          map={colorMap}
        />
      </mesh>
      {/* Floor */}
      <mesh
        position={[0, -0.0127, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        receiveShadow
        scale={[20.4, 30.3, 0.98]}
      >
        <planeBufferGeometry />
        <meshStandardMaterial
          attach="material"
          color="black"
          side={DoubleSide}
        />
      </mesh>
      <mesh position={[0, -0.0125, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[100, 50]}
          opacity={1.0}
          transparent
          resolution={1024}
          mixStrength={4.0}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#343445"
          metalness={0.95}
          roughness={1}
        />
      </mesh>
    </group>
  );
};

export default Plane;
