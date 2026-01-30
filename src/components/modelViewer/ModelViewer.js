import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Center } from "@react-three/drei";
import "./ModelViewer.scss"; // Importing the new stylesheet

function Model({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} />;
}

export default function ModelViewer({ modelPath }) {
  return (
    <div className="model-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<div className="model-loading-text">Loading...</div>}>
          <Center>
            <Model url={modelPath} />
          </Center>
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
    </div>
  );
}