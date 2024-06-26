/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 guide.glb --types
*/

import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useAnimationController } from '@/hooks/useAnimationController';

type GLTFResult = GLTF & {
  nodes: {
    ['Body_(merged)baked001']: THREE.SkinnedMesh;
    ['Body_(merged)baked001_1']: THREE.SkinnedMesh;
    ['Body_(merged)baked001_2']: THREE.SkinnedMesh;
    ['Body_(merged)baked001_3']: THREE.SkinnedMesh;
    ['Hair001_(merged)baked001']: THREE.SkinnedMesh;
    ['Hair001_(merged)baked001_1']: THREE.SkinnedMesh;
    ['Hair001_(merged)baked001_2']: THREE.SkinnedMesh;
    ['Hair001_(merged)baked001_3']: THREE.SkinnedMesh;
    ['Face_(merged)(Clone)baked001']: THREE.SkinnedMesh;
    ['Face_(merged)(Clone)baked001_1']: THREE.SkinnedMesh;
    ['Face_(merged)(Clone)baked001_2']: THREE.SkinnedMesh;
    ['Face_(merged)(Clone)baked001_3']: THREE.SkinnedMesh;
    ['Face_(merged)(Clone)baked001_4']: THREE.SkinnedMesh;
    ['Face_(merged)(Clone)baked001_5']: THREE.SkinnedMesh;
    ['Face_(merged)(Clone)baked001_6']: THREE.SkinnedMesh;
    Root: THREE.Bone;
  };
  materials: {
    ['N00_000_00_Body_00_SKIN (Instance)']: THREE.MeshBasicMaterial;
    ['N00_001_02_Bottoms_01_CLOTH (Instance)']: THREE.MeshBasicMaterial;
    ['N00_001_01_Shoes_01_CLOTH (Instance)']: THREE.MeshBasicMaterial;
    ['N00_005_01_Tops_01_CLOTH (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_Hair_00_HAIR_01 (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_Hair_00_HAIR_03 (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_Hair_00_HAIR_04 (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_00_FaceMouth_00_FACE (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_00_EyeIris_00_EYE (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_00_EyeHighlight_00_EYE (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_00_Face_00_SKIN (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_00_EyeWhite_00_EYE (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_00_FaceBrow_00_FACE (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_00_FaceEyeline_00_FACE (Instance)']: THREE.MeshBasicMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = 'anim';
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials, animations } = useGLTF(
    '/111C52014.glb',
  ) as GLTFResult;

  const { ref, onChangeAction, playAction, lastAction } =
    useAnimationController<GLTFActions>(animations, {
      anim: {
        defaultAction: true,
        fadeIn: 0.2,
        fadeOut: 0.2,
      },
    });

  useEffect(() => {
    onChangeAction('anim');
  }, []);

  return (
    <group {...props} dispose={null}>
      <group name='Scene'>
        <group name='Armature002'>
          <primitive object={nodes.Root} ref={ref} />
          <group name='secondary001' />
          <group name='Body002'>
            <skinnedMesh
              name='Body_(merged)baked001'
              geometry={nodes['Body_(merged)baked001'].geometry}
              material={materials['N00_000_00_Body_00_SKIN (Instance)']}
              skeleton={nodes['Body_(merged)baked001'].skeleton}
            />
            <skinnedMesh
              name='Body_(merged)baked001_1'
              geometry={nodes['Body_(merged)baked001_1'].geometry}
              material={materials['N00_001_02_Bottoms_01_CLOTH (Instance)']}
              skeleton={nodes['Body_(merged)baked001_1'].skeleton}
            />
            <skinnedMesh
              name='Body_(merged)baked001_2'
              geometry={nodes['Body_(merged)baked001_2'].geometry}
              material={materials['N00_001_01_Shoes_01_CLOTH (Instance)']}
              skeleton={nodes['Body_(merged)baked001_2'].skeleton}
            />
            <skinnedMesh
              name='Body_(merged)baked001_3'
              geometry={nodes['Body_(merged)baked001_3'].geometry}
              material={materials['N00_005_01_Tops_01_CLOTH (Instance)']}
              skeleton={nodes['Body_(merged)baked001_3'].skeleton}
            />
          </group>
          <group name='Hair001'>
            <skinnedMesh
              name='Hair001_(merged)baked001'
              geometry={nodes['Hair001_(merged)baked001'].geometry}
              material={materials['N00_000_Hair_00_HAIR_01 (Instance)']}
              skeleton={nodes['Hair001_(merged)baked001'].skeleton}
            />
            <skinnedMesh
              name='Hair001_(merged)baked001_1'
              geometry={nodes['Hair001_(merged)baked001_1'].geometry}
              material={materials['N00_000_Hair_00_HAIR_03 (Instance)']}
              skeleton={nodes['Hair001_(merged)baked001_1'].skeleton}
            />
            <skinnedMesh
              name='Hair001_(merged)baked001_2'
              geometry={nodes['Hair001_(merged)baked001_2'].geometry}
              material={materials['N00_000_Hair_00_HAIR_03 (Instance)']}
              skeleton={nodes['Hair001_(merged)baked001_2'].skeleton}
            />
            <skinnedMesh
              name='Hair001_(merged)baked001_3'
              geometry={nodes['Hair001_(merged)baked001_3'].geometry}
              material={materials['N00_000_Hair_00_HAIR_04 (Instance)']}
              skeleton={nodes['Hair001_(merged)baked001_3'].skeleton}
            />
          </group>
          <group name='Face001'>
            <skinnedMesh
              name='Face_(merged)(Clone)baked001'
              geometry={nodes['Face_(merged)(Clone)baked001'].geometry}
              material={materials['N00_000_00_FaceMouth_00_FACE (Instance)']}
              skeleton={nodes['Face_(merged)(Clone)baked001'].skeleton}
              morphTargetDictionary={
                nodes['Face_(merged)(Clone)baked001'].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes['Face_(merged)(Clone)baked001'].morphTargetInfluences
              }
            />
            <skinnedMesh
              name='Face_(merged)(Clone)baked001_1'
              geometry={nodes['Face_(merged)(Clone)baked001_1'].geometry}
              material={materials['N00_000_00_EyeIris_00_EYE (Instance)']}
              skeleton={nodes['Face_(merged)(Clone)baked001_1'].skeleton}
              morphTargetDictionary={
                nodes['Face_(merged)(Clone)baked001_1'].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes['Face_(merged)(Clone)baked001_1'].morphTargetInfluences
              }
            />
            <skinnedMesh
              name='Face_(merged)(Clone)baked001_2'
              geometry={nodes['Face_(merged)(Clone)baked001_2'].geometry}
              material={materials['N00_000_00_EyeHighlight_00_EYE (Instance)']}
              skeleton={nodes['Face_(merged)(Clone)baked001_2'].skeleton}
              morphTargetDictionary={
                nodes['Face_(merged)(Clone)baked001_2'].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes['Face_(merged)(Clone)baked001_2'].morphTargetInfluences
              }
            />
            <skinnedMesh
              name='Face_(merged)(Clone)baked001_3'
              geometry={nodes['Face_(merged)(Clone)baked001_3'].geometry}
              material={materials['N00_000_00_Face_00_SKIN (Instance)']}
              skeleton={nodes['Face_(merged)(Clone)baked001_3'].skeleton}
              morphTargetDictionary={
                nodes['Face_(merged)(Clone)baked001_3'].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes['Face_(merged)(Clone)baked001_3'].morphTargetInfluences
              }
            />
            <skinnedMesh
              name='Face_(merged)(Clone)baked001_4'
              geometry={nodes['Face_(merged)(Clone)baked001_4'].geometry}
              material={materials['N00_000_00_EyeWhite_00_EYE (Instance)']}
              skeleton={nodes['Face_(merged)(Clone)baked001_4'].skeleton}
              morphTargetDictionary={
                nodes['Face_(merged)(Clone)baked001_4'].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes['Face_(merged)(Clone)baked001_4'].morphTargetInfluences
              }
            />
            <skinnedMesh
              name='Face_(merged)(Clone)baked001_5'
              geometry={nodes['Face_(merged)(Clone)baked001_5'].geometry}
              material={materials['N00_000_00_FaceBrow_00_FACE (Instance)']}
              skeleton={nodes['Face_(merged)(Clone)baked001_5'].skeleton}
              morphTargetDictionary={
                nodes['Face_(merged)(Clone)baked001_5'].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes['Face_(merged)(Clone)baked001_5'].morphTargetInfluences
              }
            />
            <skinnedMesh
              name='Face_(merged)(Clone)baked001_6'
              geometry={nodes['Face_(merged)(Clone)baked001_6'].geometry}
              material={materials['N00_000_00_FaceEyeline_00_FACE (Instance)']}
              skeleton={nodes['Face_(merged)(Clone)baked001_6'].skeleton}
              morphTargetDictionary={
                nodes['Face_(merged)(Clone)baked001_6'].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes['Face_(merged)(Clone)baked001_6'].morphTargetInfluences
              }
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/111C52014.glb');
