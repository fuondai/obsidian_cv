"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Suspense, useMemo } from "react";

function Shard({ i }: { i: number }) {
  const geom = useMemo(() => {
    const g = new THREE.IcosahedronGeometry(0.6 + Math.random() * 0.4, 0);
    g.rotateX(Math.random());
    g.rotateY(Math.random());
    return g;
  }, []);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        metalness: 0.9,
        roughness: 0.2,
        color: new THREE.Color("#1f1133"),
      }),
    []
  );

  return (
    <mesh
      geometry={geom}
      position={[Math.sin(i) * 2, Math.cos(i * 1.2) * 0.6, -1 - i * 0.05]}
    >
      {/* Dùng primitive để tránh lỗi JSX typings với material */}
      <primitive object={material} attach="material" />
    </mesh>
  );
}

export default function ObsidianScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3.2] }} style={{ width: "100%", height: 300 }}>
      <color attach="background" args={["#0B0F17"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 2]} intensity={1.2} />
      <Suspense fallback={null}>
        <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.6}>
          {Array.from({ length: 10 }).map((_, i) => (
            <Shard key={i} i={i} />
          ))}
        </Float>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
