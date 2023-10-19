/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 C:\Users\Ray\Desktop\MUSEUM.glb --transform --types
*/

import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF, RGBELoader } from 'three-stdlib';
import { useColider } from './hooks/useColider';
import { useLoader } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    sphere_gltf: THREE.Mesh;
    wall003: THREE.Mesh;
    wall004: THREE.Mesh;
    wall000: THREE.Mesh;
    wall001: THREE.Mesh;
    wall002: THREE.Mesh;
    wall005: THREE.Mesh;
    wall006: THREE.Mesh;
    wall007: THREE.Mesh;
    wall008: THREE.Mesh;
    wall009: THREE.Mesh;
    wall010: THREE.Mesh;
    wall011: THREE.Mesh;
    wall012: THREE.Mesh;
    wall013: THREE.Mesh;
    wall014: THREE.Mesh;
    wall015: THREE.Mesh;
    wall016: THREE.Mesh;
    wall017: THREE.Mesh;
    wall018: THREE.Mesh;
    wall019: THREE.Mesh;
    wall020: THREE.Mesh;
    wall021: THREE.Mesh;
    wall022: THREE.Mesh;
    wall023: THREE.Mesh;
    wall024: THREE.Mesh;
    wall025: THREE.Mesh;
    wall026: THREE.Mesh;
    wall027: THREE.Mesh;
    wall028: THREE.Mesh;
    wall029: THREE.Mesh;
    wall030: THREE.Mesh;
    wall031: THREE.Mesh;
    wall032: THREE.Mesh;
    wall033: THREE.Mesh;
    wall034: THREE.Mesh;
    wall035: THREE.Mesh;
    wall036: THREE.Mesh;
    立方體: THREE.Mesh;
    立方體_1: THREE.Mesh;
    ['Door(must_closed)']: THREE.Mesh;
    Stairs_Emergency: THREE.Mesh;
    Stairs_Emergency001: THREE.Mesh;
    ['Door(must_closed)001']: THREE.Mesh;
    door_right: THREE.Mesh;
    door_left: THREE.Mesh;
    stair_cen: THREE.Mesh;
    wall037: THREE.Mesh;
    wall038: THREE.Mesh;
    wall039: THREE.Mesh;
    wall040: THREE.Mesh;
    wall041: THREE.Mesh;
    wall042: THREE.Mesh;
    wall043: THREE.Mesh;
    wall044: THREE.Mesh;
    wall045: THREE.Mesh;
    plate: THREE.Mesh;
    room: THREE.Mesh;
    flip: THREE.Mesh;
    door_left001: THREE.Mesh;
  };
  materials: {
    隔間: THREE.MeshStandardMaterial;
    wood: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const texture = useLoader(RGBELoader, '/sky.hdr');
  const { nodes, materials } = useGLTF(
    '/gallery-1f-transformed.glb',
  ) as unknown as GLTFResult;

  // 為了讓模型能跟著環境貼圖的光來反射
  useEffect(() => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.flipY = false;
    texture.generateMipmaps = true;
    texture.needsUpdate = true;

    Object.values(materials).forEach((material) => {
      material.envMap = texture;
    });
  }, [materials, texture]);

  useColider();

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.sphere_gltf.geometry} material={materials.隔間} />
      <mesh
        geometry={nodes.wall003.geometry}
        material={materials.隔間}
        position={[1.47, 3.14, -9.61]}
        scale={[17.41, 3.14, 0.2]}
      />
      <mesh
        geometry={nodes.wall004.geometry}
        material={materials.隔間}
        position={[-2.17, 3.14, 0.89]}
        scale={[21.05, 3.14, 0.2]}
      />
      <mesh
        geometry={nodes.wall000.geometry}
        material={materials.隔間}
        position={[-6.5, 3.14, -3.1]}
        scale={[0.2, 3.14, 3.78]}
      />
      <mesh
        geometry={nodes.wall001.geometry}
        material={materials.隔間}
        position={[-15.73, 3.14, -3.03]}
        scale={[0.2, 3.14, 3.7]}
      />
      <mesh
        geometry={nodes.wall002.geometry}
        material={materials.隔間}
        position={[-11.16, 3.14, -1.8]}
        scale={[0.2, 3.14, 2.52]}
      />
      <mesh
        geometry={nodes.wall005.geometry}
        material={materials.隔間}
        position={[-14.9, 3.14, -4.5]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.2, 3.14, 0.65]}
      />
      <mesh
        geometry={nodes.wall006.geometry}
        material={materials.隔間}
        position={[-11.15, 3.14, -4.5]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.2, 3.14, 1.3]}
      />
      <mesh
        geometry={nodes.wall007.geometry}
        material={materials.隔間}
        position={[-7.34, 3.14, -4.5]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.2, 3.14, 0.65]}
      />
      <mesh
        geometry={nodes.wall008.geometry}
        material={materials.隔間}
        position={[4.99, 3.14, -4.35]}
        scale={[0.2, 3.14, 5.05]}
      />
      <mesh
        geometry={nodes.wall009.geometry}
        material={materials.隔間}
        position={[26.86, 3.14, 0.89]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.2, 3.14, 4.01]}
      />
      <mesh
        geometry={nodes.wall010.geometry}
        material={materials.隔間}
        position={[-23.03, 3.14, -1.23]}
        scale={[0.2, 3.14, 2]}
      />
      <mesh
        geometry={nodes.wall011.geometry}
        material={materials.隔間}
        position={[-41.14, 3.14, -15.06]}
        scale={[0.2, 3.14, 3.05]}
      />
      <mesh
        geometry={nodes.wall012.geometry}
        material={materials.隔間}
        position={[-41.14, 3.14, -20.86]}
        scale={[0.2, 3.14, 1]}
      />
      <mesh
        geometry={nodes.wall013.geometry}
        material={materials.隔間}
        position={[-42.34, 3.14, -5.65]}
        scale={[0.2, 3.14, 6.56]}
      />
      <mesh
        geometry={nodes.wall014.geometry}
        material={materials.隔間}
        position={[-32.25, 3.14, -6.78]}
        scale={[0.2, 3.14, 5.28]}
      />
      <mesh
        geometry={nodes.wall015.geometry}
        material={materials.隔間}
        position={[-37.4, 3.14, 0.99]}
        scale={[5.2, 3.14, 0.2]}
      />
      <mesh
        geometry={nodes.wall016.geometry}
        material={materials.隔間}
        position={[-37.1, 3.14, -12.03]}
        scale={[5.06, 3.14, 0.2]}
      />
      <mesh
        geometry={nodes.wall017.geometry}
        material={materials.隔間}
        position={[-16, 3.14, 9.47]}
        scale={[0.2, 3.14, 8.34]}
      />
      <mesh
        geometry={nodes.wall018.geometry}
        material={materials.隔間}
        position={[-23.01, 3.14, 12.95]}
        scale={[0.2, 3.14, 1.87]}
      />
      <mesh
        geometry={nodes.wall019.geometry}
        material={materials.隔間}
        position={[-21.12, 3.14, 12.95]}
        scale={[0.2, 3.14, 1.87]}
      />
      <mesh
        geometry={nodes.wall020.geometry}
        material={materials.隔間}
        position={[-23.03, 3.14, 20.29]}
        scale={[0.2, 3.14, 2.34]}
      />
      <mesh
        geometry={nodes.wall021.geometry}
        material={materials.隔間}
        position={[-21.17, 3.14, 20.41]}
        scale={[0.2, 3.14, 2.45]}
      />
      <mesh
        geometry={nodes.wall022.geometry}
        material={materials.隔間}
        position={[-22.1, 3.14, 18.16]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.2, 3.14, 1]}
      />
      <mesh
        geometry={nodes.wall023.geometry}
        material={materials.隔間}
        position={[-22.04, 3.14, 14.62]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.2, 3.14, 1]}
      />
      <mesh
        geometry={nodes.wall024.geometry}
        material={materials.隔間}
        position={[-22.06, 3.14, 11.29]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.2, 3.14, 1]}
      />
      <mesh
        geometry={nodes.wall025.geometry}
        material={materials.隔間}
        position={[24.8, 3.14, -9.83]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.2, 3.14, 2.01]}
      />
      <mesh
        geometry={nodes.wall026.geometry}
        material={materials.隔間}
        position={[25.2, 3.14, -7.25]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.2, 3.14, 2.54]}
      />
      <mesh
        geometry={nodes.wall027.geometry}
        material={materials.隔間}
        position={[27.48, 3.14, -0.82]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.2, 3.14, 2.5]}
      />
      <mesh
        geometry={nodes.wall028.geometry}
        material={materials.隔間}
        position={[25.19, 3.14, -4.13]}
        scale={[0.2, 3.14, 3.2]}
      />
      <mesh
        geometry={nodes.wall029.geometry}
        material={materials.隔間}
        position={[7.11, 3.14, -7.28]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.2, 3.14, 2.03]}
      />
      <mesh
        geometry={nodes.wall030.geometry}
        material={materials.隔間}
        position={[18.22, 3.14, -3.18]}
        scale={[0.2, 3.14, 3.92]}
      />
      <mesh
        geometry={nodes.wall031.geometry}
        material={materials.隔間}
        position={[23.63, 3.14, 19.65]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.2, 3.14, 7.74]}
      />
      <mesh
        geometry={nodes.wall032.geometry}
        material={materials.隔間}
        position={[16.09, 3.14, 20.46]}
        scale={[0.2, 3.14, 0.8]}
      />
      <mesh
        geometry={nodes.wall033.geometry}
        material={materials.隔間}
        position={[16.66, 3.14, -7.28]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.2, 3.14, 2.22]}
      />
      <mesh
        geometry={nodes.wall034.geometry}
        material={materials.隔間}
        position={[11.93, 3.14, -7.32]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.2, 3.14, 1.01]}
      />
      <mesh
        geometry={nodes.wall035.geometry}
        material={materials.隔間}
        position={[12.56, 3.14, -3.22]}
        scale={[0.2, 3.14, 3.92]}
      />
      <mesh
        geometry={nodes.wall036.geometry}
        material={materials.隔間}
        position={[11.29, 3.14, -3.18]}
        scale={[0.2, 3.14, 3.92]}
      />
      <group position={[-8.62, 3.14, 23.5]} scale={[3.14, 3.14, 1]}>
        <mesh geometry={nodes.立方體.geometry} material={materials.wood} />
        <mesh geometry={nodes.立方體_1.geometry} material={materials.隔間} />
      </group>
      <mesh
        geometry={nodes['Door(must_closed)'].geometry}
        material={nodes['Door(must_closed)'].material}
        position={[3.47, 4.25, -24.2]}
        rotation={[0, 0.16, 0]}
        scale={[3.7, 3.14, 1.67]}
      />
      <mesh
        geometry={nodes.Stairs_Emergency.geometry}
        material={materials.隔間}
        position={[-0.78, 2.74, -7.35]}
        rotation={[0, -1.57, 0]}
        scale={[2.41, 1.39, 1.67]}
      />
      <mesh
        geometry={nodes.Stairs_Emergency001.geometry}
        material={materials.隔間}
        position={[-40.25, 4.12, -5.4]}
        scale={[2.33, 1.39, 1.92]}
      />
      <mesh
        geometry={nodes['Door(must_closed)001'].geometry}
        material={nodes['Door(must_closed)001'].material}
        position={[-49.02, 3.76, 14.06]}
        rotation={[-Math.PI, 1.08, -Math.PI]}
        scale={[3.7, 3.14, 1.67]}
      />
      <mesh
        geometry={nodes.door_right.geometry}
        material={nodes.door_right.material}
        position={[46.36, 14.81, 17.11]}
        scale={[0.2, 3.14, 2.01]}
      />
      <mesh
        geometry={nodes.door_left.geometry}
        material={nodes.door_left.material}
        position={[46.36, 14.82, 3.52]}
        scale={[0.46, 3.14, 2.01]}
      />
      <mesh
        geometry={nodes.stair_cen.geometry}
        material={materials.隔間}
        position={[-31.25, 3.6, 12.86]}
        scale={[1.44, 1, 1.72]}
      />
      <mesh
        geometry={nodes.wall037.geometry}
        material={materials.隔間}
        position={[26.5, 1.57, 10.29]}
        scale={[1, 0.6, 9.2]}
      />
      <mesh
        geometry={nodes.wall038.geometry}
        material={materials.隔間}
        position={[28.55, 2.17, 10.29]}
        scale={[1.07, 1.2, 9.2]}
      />
      <mesh
        geometry={nodes.wall039.geometry}
        material={materials.隔間}
        position={[30.57, 2.77, 10.29]}
        scale={[1.07, 1.8, 9.2]}
      />
      <mesh
        geometry={nodes.wall040.geometry}
        material={materials.隔間}
        position={[32.57, 3.37, 10.29]}
        scale={[1.07, 2.4, 9.2]}
      />
      <mesh
        geometry={nodes.wall041.geometry}
        material={materials.隔間}
        position={[35.25, 3.97, 10.31]}
        scale={[1.59, 3, 9.2]}
      />
      <mesh
        geometry={nodes.wall042.geometry}
        material={materials.隔間}
        position={[37.91, 4.57, 10.31]}
        scale={[1.05, 3.6, 9.2]}
      />
      <mesh
        geometry={nodes.wall043.geometry}
        material={materials.隔間}
        position={[40.02, 5.17, 10.31]}
        scale={[1.05, 4.2, 9.2]}
      />
      <mesh
        geometry={nodes.wall044.geometry}
        material={materials.隔間}
        position={[42.03, 5.77, 10.31]}
        scale={[1.05, 4.7, 9.2]}
      />
      <mesh
        geometry={nodes.wall045.geometry}
        material={materials.隔間}
        position={[44.7, 6.37, 10.31]}
        scale={[1.61, 5.3, 9.2]}
      />
      <mesh
        geometry={nodes.plate.geometry}
        material={materials.隔間}
        position={[54.51, 13.55, 10.31]}
        scale={[2.21, 1.85, 9.2]}
      />
      <mesh
        geometry={nodes.room.geometry}
        material={materials.隔間}
        position={[51.52, 16.68, 10.31]}
        scale={[5.21, 5, 9.2]}
      />
      <mesh
        geometry={nodes.flip.geometry}
        material={nodes.flip.material}
        position={[53.89, 13.59, 10.39]}
        scale={[1.6, 1.91, 5.64]}
      />
      <mesh
        geometry={nodes.door_left001.geometry}
        material={materials.隔間}
        position={[46.35, 16.64, 10.31]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.04, -5, -9.2]}
      />
    </group>
  );
}

useGLTF.preload('/MUSEUM-transformed.glb');
