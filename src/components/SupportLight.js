import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { PointLightHelper, SpotLightHelper } from "three";
import { useControls } from "leva";

const SupportLights = () => {
  // const { intensity, topLight } = useControls({
  //   intensity: {
  //     min: 8.0,
  //     max: 13.0,
  //     value: 0.5,
  //     step: 0.1,
  //   },
  //   topIntensity: {
  //     min: 1.9,
  //     max: 13.0,
  //     value: 0.5,
  //     step: 0.1,
  //   },
  // });
  const group = useRef();
  const pointLight = useRef();
  const light = useRef();
  // useHelper(light, SpotLightHelper, "lightblue");
  // useHelper(pointLight, PointLightHelper, 0.2, "hotpink");
  return (
    <group ref={group}>
      <pointLight
        castShadow
        color={"#f20723"} // Red light from corner
        ref={pointLight}
        distance={6}
        intensity={6.003}
        position={[-0.52, -0.493, 4.703]}
        power={63}
      />
      <pointLight
        // Light from top
        intensity={1.9}
        position={[0.205, 1.6, 3.05]}
      />
      <spotLight
        intensity={0.87}
        color={"blue"}
        penumbra={1.0}
        ref={light}
        position={[-1.111, -0.232, 7.864]}
      />
    </group>
  );
};

export default SupportLights;
