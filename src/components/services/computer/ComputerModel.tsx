import { useGLTF } from "@react-three/drei";
import * as THREE from "three"; 
import { JSX } from "react";
export function ComputerModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF("/computerModel.glb") as unknown as {
    nodes: {
      Object_4: THREE.Mesh;
      Object_6: THREE.Mesh;
      Object_8: THREE.Mesh;
    };
    materials: {
      MacBookPro: THREE.Material;
    };
  };

  return (
    <group {...props} dispose={null}>
      <group position={[0.121, 0.007, 0]}>
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.MacBookPro}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.MacBookPro}
        />
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.MacBookPro}
      />
    </group>
  );
}

useGLTF.preload("/computerModel.glb");
