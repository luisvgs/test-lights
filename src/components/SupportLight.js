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
        color={"#f20723"} // Red light from corner
        castShadow
        ref={pointLight}
        distance={6}
        intensity={8.0}
        position={[-0.52, -0.493, 4.703]}
      />
      <pointLight
        // Light from top
        castShadow
        intensity={1.9}
        position={[0.205, 1.6, 3.05]}
      />
      <spotLight
        castShadow
        intensity={0.1}
        color={"blue"}
        penumbra={1.0}
        ref={light}
        position={[-1.111, -0.232, 7.864]}
      />
    </group>
  );
};

export default SupportLights;
