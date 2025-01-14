import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Civil = ({ isMobile }) => {
  const computer = useGLTF("./new_house/scene.gltf");

  return (
    <mesh>
      {/* Enhanced ambient lighting */}
      <hemisphereLight intensity={0.6} groundColor="#000000" color="#ffffff" />
      
      {/* Main spotlight for overall illumination */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.5}
        penumbra={0.8}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      
      {/* Additional lights for better coverage */}
      <pointLight position={[10, 5, 0]} intensity={0.8} />
      <pointLight position={[-10, 5, 0]} intensity={0.8} />
      <pointLight position={[0, 5, 10]} intensity={0.8} />
      
      {/* Ambient light for overall brightness */}
      <ambientLight intensity={0.4} />
      
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.25 : 0.5}
        position={isMobile ? [0, -1.5, 0] : [0, -2, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const CivilCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ 
        position: [6, 2, 10], 
        fov: 45,
        near: 0.1,
        far: 200
      }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        toneMapping: 'ACESFilmicToneMapping',
        toneMappingExposure: 1.2
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <Civil isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CivilCanvas;