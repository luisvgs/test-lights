import { useRef } from "react";

const Lights = () => {
  const light = useRef();
  // useHelper(light, SpotLightHelper, "cyan");
  return (
    <group>
      <ambientLight />
      <spotLight ref={light} position={[50, 40, 40]} castShadow />
    </group>
  );
};

export default Lights;
