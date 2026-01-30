import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Center } from "@react-three/drei";
import "./ModelViewer.scss"; // Importing the new stylesheet

function Model({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  // Try changing 1 to 50 or 100 if it's still small
  return <primitive object={gltf.scene} scale={90} />; 
}

export default function ModelViewer({ modelPath }) {
  return (
    <div className="model-container">
      <Suspense fallback={<div className="model-loading-text">Loading 3D model...</div>}>
        <Canvas 
  camera={{ 
    position: [6, 6, 6], // Equal values create the isometric "corner" view
    fov: 40,             // Slightly lower FOV makes it look more "flat" and technical
    near: 0.1, 
    far: 1000 
  }}
>
  <ambientLight intensity={0.7} />
  <pointLight position={[10, 10, 10]} intensity={1} />
  <Suspense fallback={null}>
  {/* Move the entire group. Try 20 or 30 since 10 was too small */}
  <group position={[0, 0, 0]}> 
    <Center>
      <Model url={modelPath} />
    </Center>
  </group>
  
  <OrbitControls 
    autoRotate 
    enableZoom={true}
    minDistance={3} 
    maxDistance={20} // Increased max distance to give you more breathing room
    target={[0, -1, 0]}
  />
</Suspense>
</Canvas>
      </Suspense>
    </div>
  );
}