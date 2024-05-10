import { Canvas } from '@react-three/fiber';

export const SpinningGlobe = () => {
 const earth = useGLTF('../public/earth/scene.gltf');
  return (
    <Canvas frameloop="demand" camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}>
        <primitive object={earth.scene} scale={2.5} />
    </Canvas>
  );
};
