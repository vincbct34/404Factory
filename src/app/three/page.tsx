"use client";

import { useEffect, useState } from "react";

import ThreeModel from "@/components/threejs/ThreeRoom";
import Loader from "@/components/Loader";

export default function ThreePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000); // 6 seconds is the necessary loading time for camera controls to initialize
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen">

        {/* 3D Scene that appears after loading */}

        <div className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
          <ThreeModel />
        </div>

        {/* Loader is above the 3D scene */}

        {loading && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
}
