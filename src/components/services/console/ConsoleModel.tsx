import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { JSX } from 'react';

export function ConsoleModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/consoleModel.glb') as unknown as {
    nodes: {
      Cube_Material_0: THREE.Mesh;
    };
    materials: {
      Material: THREE.Material;
    };
  };

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.112}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.Cube_Material_0.geometry}
            material={materials.Material}
            position={[0, 21.93, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/consoleModel.glb');
