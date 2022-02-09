import { useRef } from "react";
import { SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";

const Lights = () => {
  const light = useRef();
  // useHelper(light, SpotLightHelper, "cyan");
  return (
    <group>
      <spotLight
        ref={light}
        castShadow
        intensity={2.852}
        power={11.666}
        distance={9.64}
        angle={0.57}
        decay={0.34}
        color="#ffffff"
        penumbra={1}
        position={[1.0, -0.127, 6.204]}
        shadow-camera-bottom={-10}
      />
    </group>
  );
};

export default Lights;
