import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* --- ULTRA PREMIUM LIGHTING (Studio Setup) --- */}
      {/* 1. Base Ambient Light (Purple Tint for Brand) */}
      <hemisphereLight intensity={3} skyColor="#915eff" groundColor="black" />
      
      {/* 2. Key Light (Creates Shadows & Depth) */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      
      {/* 3. Fill Light (Front Face Visibility) */}
      <pointLight intensity={1.5} position={[0, 0, 10]} />

      {/* --- LIVE ANIMATION (Floating) --- */}
      <Float 
        speed={1.5} 
        rotationIntensity={0.5} 
        floatIntensity={1} 
      >
        <primitive
          object={computer.scene}
          
          // ===============================================
          // 📱 MOBILE FIX: SAFETY SCALE & CENTER
          // ===============================================
          
          // SCALE: 0.32
          // This is the "Golden Size" for mobile. It is small enough to 
          // never touch the edges of the screen, but big enough to see details.
          scale={isMobile ? 0.29 : 0.70}
          
          // POSITION: [X, Y, Z]
          // X = 0 (Dead Center)
          // Y = -2.0 (Sitting perfectly in the empty space below text)
          // Z = -0.7 (Brought slightly closer to camera for clarity)
          position={isMobile ? [0, -2.0, -0.7] : [0, -3.25, -1.5]}
          
          // ROTATION: Tilted slightly for 3D depth
          rotation={[-0.01, -0.2, -0.1]}
        />
      </Float>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // TRIGGER POINT: 650px
    // Covers all iPhones, Samsungs, and Pixel phones.
    const mediaQuery = window.matchMedia("(max-width: 650px)");

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
      frameloop='always' // 120FPS Smoothness
      shadows
      dpr={[1, 2]} // High Res for Retina Screens
      
      // GPU ACCELERATION
      gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
      
      // CAMERA ANGLE
      // fov: 25 is a "Telephoto" lens style. It flattens the image slightly 
      // making it look professional (like product photography).
      camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // PREMIUM PHYSICS (Weighted feel)
          enableDamping={true}
          dampingFactor={0.03} 
          
          enableZoom={false}
          enablePan={false} // Prevents user from dragging it off screen
          
          // AUTO SPIN
          autoRotate={true}
          autoRotateSpeed={0.5}
          
          // LOCKED HORIZON (Cannot look under/over)
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;