import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function Model({ url }) {
  const { nodes, materials } = useGLTF(url);
  return <primitive object={nodes.mesh} material={materials.material} />;
}

function SpinningGlobe({ className }) {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <div className={className}>
      <Canvas>
        <ambientLight />
        <pointLight/>
        <Suspense fallback={null}>
          <mesh ref={mesh}>
            <Model url="https://github.com/HRS8/ecosacksol/blob/main/ecosacksol/public/earth/scene.gltf" />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default SpinningGlobe;