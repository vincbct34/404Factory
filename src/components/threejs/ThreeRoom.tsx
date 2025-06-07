"use client";

import { CameraControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";

function RoomModel({ scale }: { scale: number }) {
  const { scene } = useGLTF("/models/scene.gltf");

  return <primitive object={scene} scale={scale} />;
}

export default function ThreeModel() {
  const controlsRef = useRef<any>(null);
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768)
        setScale(2);
      else
        setScale(1.5);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (controlsRef.current) {
        controlsRef.current.setLookAt(
          -0.89, 0.0, 4.22,
          -0.89, 0.0, 0.0,
          false
        );
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas>
          <CameraControls ref={controlsRef} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <RoomModel scale={scale} />
        </Canvas>
      </div>
    </>
  );
}
