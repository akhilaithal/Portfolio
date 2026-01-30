import React, { Suspense, useState, useEffect, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Center, Preload, BakeShadows } from "@react-three/drei";
import { useInView } from "react-intersection-observer";
import StyleContext from "../../contexts/StyleContext"; // Import the context

// Import both versions of your fallback image
import lightFallback from "../../assets/images/RP235x_light.png"; 
import darkFallback from "../../assets/images/RP235x_dark.png"; 

import "./ModelViewer.scss";

function Model({ url, onModelLoad }) {
  const { scene } = useGLTF(url, "https://www.gstatic.com/draco/versioned/decoders/1.5.5/");
  
  useEffect(() => {
    if (scene) {
      onModelLoad();
    }
  }, [scene, onModelLoad]);

  return <primitive object={scene} scale={80} />; 
}

export default function ModelViewer({ modelPath }) {
  const { isDark } = useContext(StyleContext); // Pull the theme state
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "400px 0px", 
  });

  return (
    <div ref={ref} className="model-container" style={{ 
      position: "relative", 
      width: "100%", 
      height: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "transparent"
    }}>
      
      {/* 1. Dynamic Fallback Image based on theme */}
      <img 
        src={isDark ? darkFallback : lightFallback} 
        alt="Project Preview" 
        style={{ 
          position: "absolute",
          zIndex: 5,
          maxWidth: "80%", 
          maxHeight: "80%", 
          objectFit: "contain",
          transition: "opacity 0.6s ease-in-out", 
          opacity: isLoaded ? 0 : 1, 
          pointerEvents: "none"
        }} 
      />

      {/* 2. The 3D Canvas */}
      {inView && (
        <Canvas 
          dpr={[1, 1.5]} 
          gl={{ 
            antialias: false, 
            powerPreference: "high-performance",
            alpha: true 
          }}
          camera={{ position: [6, 6, 6], fov: 40 }}
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            zIndex: 10, 
            background: "transparent",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.4s ease-in"
          }}
        >
          {/* We can also adjust the light intensity based on theme */}
          <ambientLight intensity={isDark ? 0.4 : 0.8} />
          <pointLight position={[10, 10, 10]} intensity={isDark ? 1.5 : 1} />
          
          <Suspense fallback={null}>
            <group position={[0, 0, 0]}> 
              <Center>
                <Model url={modelPath} onModelLoad={() => setIsLoaded(true)} />
              </Center>
            </group>
            <BakeShadows />
            <Preload all />
            <OrbitControls autoRotate enableZoom={true} minDistance={3} maxDistance={20} target={[0, -1, 0]} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}