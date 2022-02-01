import { useRef } from "react";
import { SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";

const Lights = () => {
  const light = useRef();
  // useHelper(light, SpotLightHelper, "cyan");
  return (
    <group>
      <spotLight
        castShadow
        ref={light}
        intensity={1.06}
        distance={9.64}
        angle={0.6}
        penumbra={1}
        position={[1.0, -0.127, 6.204]}
        shadow-camera-bottom={-10}
      />
    </group>
  );
};

export default Lights;
