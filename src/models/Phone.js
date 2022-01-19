import React, { useRef, useState } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import PhoneModel from "../Smarthphone.glb";

const Phone = (props) => {
  const group = useRef();
  useFrame(() => (group.current.rotation.y += 0.005));

  const [expand, setExpand] = useState(false);
  const properties = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  const { nodes } = useGLTF(PhoneModel);
  return (
    <group position={[5, -4, 2]} scale={12}>
      <a.mesh
        ref={group}
        onClick={() => setExpand(!expand)}
        scale={properties.scale}
        castShadow
      >
        <group ref={group} {...props} dispose={null}>
          <group position={[-0.8, -0.01, -0.01]}>
            <pointLight
              intensity={15}
              decay={2}
              color="#ff1624"
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <group position={[0.57, 0.52, -0.07]}>
            <pointLight
              intensity={20}
              decay={2}
              color="#0477ff"
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <group position={[-0.34, 0.52, 0.34]}>
            <pointLight
              intensity={14}
              decay={2}
              color="#0c20ff"
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <group position={[-0.16, 0.85, -0.08]} scale={[0.55, 0.55, 0.55]}>
            <pointLight
              intensity={10}
              decay={2}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <group position={[-0.94, 0.52, 0.34]}>
            <pointLight
              intensity={14}
              decay={2}
              color="#0c20ff"
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <group position={[-0.97, 0.9, 2.94]} rotation={[1.42, -0.04, 0.27]}>
            <PerspectiveCamera
              makeDefault={false}
              far={1000}
              near={0.1}
              fov={22.9}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <group position={[1.2, -0.45, -0.07]}>
            <pointLight
              intensity={20}
              decay={2}
              color="#0477ff"
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Charger_insert.geometry}
            material={nodes.Charger_insert.material}
            position={[0.01, 0.37, 0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.05, 0.05, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Glass_bottom.geometry}
            material={nodes.Glass_bottom.material}
            position={[0.01, 0.37, 0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.05, 0.05, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Glass_top.geometry}
            material={nodes.Glass_top.material}
            position={[0.01, 0.37, 0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.05, 0.05, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geoetry={nodes.Screen.geometry}
            material={nodes.Screen.material}
            position={[0.01, 0.37, 0.04]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.17, 0.36, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sub_glass_bot.geometry}
            material={nodes.Sub_glass_bot.material}
            position={[0.01, 0.37, 0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.05, 0.05, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sub_glass_top.geometry}
            material={nodes.Sub_glass_top.material}
            position={[0.01, 0.37, 0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.05, 0.05, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Titanium_unibody.geometry}
            material={nodes.Titanium_unibody.material}
            position={[0.01, 0.37, 0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.03, 0.03, 0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cam_insert_back_bot.geometry}
            material={nodes.Cam_insert_back_bot.material}
            position={[0.08, 0.49, 0.02]}
            rotation={[0, 0, Math.PI]}
            scale={[0.01, 0.01, 0.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cam_insert_back_top.geometry}
            material={nodes.Cam_insert_back_top.material}
            position={[0.08, 0.52, 0.02]}
            rotation={[0, 0, Math.PI]}
            scale={[0.01, 0.01, 0.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Chrome_back_cam.geometry}
            material={nodes.Chrome_back_cam.material}
            position={[0.08, 0.52, 0.03]}
            rotation={[0, 0, Math.PI]}
            scale={[0.01, 0.01, 0.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fill_flash.geometry}
            material={nodes.Fill_flash.material}
            position={[0.08, 0.51, 0.02]}
            rotation={[0, 0, Math.PI]}
            scale={[0.01, 0.01, 0.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fill_mic.geometry}
            material={nodes.Fill_mic.material}
            position={[0.07, 0.5, 0.02]}
            rotation={[0, 0, Math.PI]}
            scale={[0, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Glass_back_cam.geometry}
            material={nodes.Glass_back_cam.material}
            position={[0.08, 0.52, 0.03]}
            rotation={[0, 0, Math.PI]}
            scale={[0.01, 0.01, 0.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Glass_flash.geometry}
            material={nodes.Glass_flash.material}
            position={[0.05, 0.32, 0.03]}
            rotation={[0, 0, Math.PI]}
            scale={[0.06, 0.06, 0.06]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lens_back_bot.geometry}
            material={nodes.Lens_back_bot.material}
            position={[0.08, 0.49, 0.02]}
            rotation={[0, 0, Math.PI]}
            scale={[0, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lens_back_top.geometry}
            material={nodes.Lens_back_top.material}
            position={[0.08, 0.52, 0.02]}
            rotation={[0, 0, Math.PI]}
            scale={[0, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mech_mic.geometry}
            material={nodes.Mech_mic.material}
            position={[0.07, 0.5, 0.02]}
            rotation={[0, 0, Math.PI]}
            scale={[0, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sub_glass_back_cam.geometry}
            material={nodes.Sub_glass_back_cam.material}
            position={[0.08, 0.52, 0.03]}
            rotation={[0, 0, Math.PI]}
            scale={[0.01, 0.01, 0.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Antenna_bands.geometry}
            material={nodes.Antenna_bands.material}
            position={[0.01, 0.37, 0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.05, 0.05, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Button_left_bottom.geometry}
            material={nodes.Button_left_bottom.material}
            position={[0.01, 0.34, 0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.04, 0.04, 0.04]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Button_left_notification.geometry}
            material={nodes.Button_left_notification.material}
            position={[-0.17, 0.63, 0.03]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.05, 0.05, 0.06]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Button_left_top.geometry}
            material={nodes.Button_left_top.material}
            position={[0.01, 0.37, 0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.04, 0.04, 0.04]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Button_right_top.geometry}
            material={nodes.Button_right_top.material}
            position={[0.01, 0.37, 0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.05, 0.05, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Chrome_bolt_left.geometry}
            material={nodes.Chrome_bolt_left.material}
            position={[0, 0.18, 0.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Chrome_bolt_right.geometry}
            material={nodes.Chrome_bolt_right.material}
            position={[0.03, 0.18, 0.03]}
            rotation={[-Math.PI / 2, 0, -0.94]}
            scale={[0, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fill_sim.geometry}
            material={nodes.Fill_sim.material}
            position={[0.1, 0.35, 0.03]}
            rotation={[-Math.PI, -1.57, 0]}
            scale={[0, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fill_speaker_left.geometry}
            material={nodes.Fill_speaker_left.material}
            position={[-0.02, 0.18, 0.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.05, 0.01, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fill_speaker_right.geometry}
            material={nodes.Fill_speaker_right.material}
            position={[0.05, 0.18, 0.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.05, 0.01, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_speaker.geometry}
            material={nodes.Mesh_speaker.material}
            position={[0.01, 0.37, 0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.05, 0.05, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Chrome_charger_housing.geometry}
            material={nodes.Chrome_charger_housing.material}
            position={[0.01, 0.19, 0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.02, 0.02, 0.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Chrome_side_contacts.geometry}
            material={nodes.Chrome_side_contacts.material}
            position={[0.01, 0.37, 0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.05, 0.05, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Charger_contacts.geometry}
            material={nodes.Charger_contacts.material}
            position={[0.01, 0.37, 0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.05, 0.05, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_headphone.geometry}
            material={nodes.Mesh_headphone.material}
            position={[0.01, 0.37, 0.03]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.05, 0.05, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lens_selfie.geometry}
            material={nodes.Lens_selfie.material}
            position={[0.03, 0.54, 0.04]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fill_selfie.geometry}
            material={nodes.Fill_selfie.material}
            position={[0.03, 0.54, 0.04]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fill_headphone.geometry}
            material={nodes.Fill_headphone.material}
            position={[0.01, 0.54, 0.04]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cam_insert_selfie.geometry}
            material={nodes.Cam_insert_selfie.material}
            position={[0.03, 0.54, 0.04]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.02, 0.01, 0.01]}
          />
        </group>
      </a.mesh>
    </group>
  );
};

useGLTF.preload("/Smarthphone.glb");
export default Phone;
