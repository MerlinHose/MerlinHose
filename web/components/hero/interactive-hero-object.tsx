"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";

const MODEL_PATH = "/models/hero/hero-object.glb";

function getModelPath() {
  if (typeof window !== "undefined" && window.location.protocol === "file:") {
    return "./models/hero/hero-object.glb";
  }

  return MODEL_PATH;
}

function HeroModel() {
  const { scene } = useGLTF(getModelPath());

  return (
    <Center>
      <primitive object={scene} scale={0.92} rotation={[0.12, 0.42, 0]} />
    </Center>
  );
}

export function InteractiveHeroObject() {
  const lockedDistance = 5.6;

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.45),transparent_40%)]" />
      <Canvas camera={{ position: [0, 0, lockedDistance], fov: 38, near: 0.5, far: 100 }} dpr={[1, 1.8]}>
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={0.9} />
        <directionalLight intensity={2.1} position={[4, 5, 4]} />
        <directionalLight intensity={0.8} position={[-4, -2, -3]} />

        <Suspense fallback={null}>
          <HeroModel />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
          enableDamping
          dampingFactor={0.08}
          minDistance={lockedDistance}
          maxDistance={lockedDistance}
          target={[0, 0, 0]}
          minPolarAngle={Math.PI / 2.8}
          maxPolarAngle={Math.PI / 1.8}
          rotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}

if (typeof window !== "undefined") {
  useGLTF.preload(getModelPath());
}