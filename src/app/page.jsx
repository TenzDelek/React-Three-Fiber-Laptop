"use client";

import CardContainer from "@/Components/CardContainer";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { useRef } from "react";

function AutoRotate() {
  const orbitControlsRef = useRef();

  useFrame(({ clock }) => {
    if (orbitControlsRef.current) {
      const elapsedTime = clock.getElapsedTime();
      orbitControlsRef.current.azimuthAngle = elapsedTime * 0.05; // Adjust the multiplication factor to control rotation speed
    }
  });

  return (
    <OrbitControls
      ref={orbitControlsRef}
      enableRotate={true}
      enablePan={false}
      enableZoom={false}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      autoRotate={true} // We're handling rotation manually
      autoRotateSpeed={1} // Set to 0 as we're not using built-in autoRotate
    />
  );
}

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col items-center text-white absolute top-40 left-1/2 -translate-x-1/2">
        <p className="font-applefont1 text-7xl tracking-tighter">
          Tenzin Portfolio
        </p>
        <h5>Developer and Designer from Tibet</h5>
        <p className="opacity-70 text-xs w-3/4 text-center">
          My Name is Tenzin Delek, A Tibetan Living in India. I have a great
          interest in both the field of Design and Development. My passion
          resonates in both my academic excellence and the projects that I have
          made till now.
        </p>
      </div>
      <Canvas  camera={{ fov: 12, position: [0, -10, 220] }}>
        <AutoRotate />
        <ambientLight />
        <ScrollControls pages={3}>
          <CardContainer />
        </ScrollControls>
        <EffectComposer>
          <Bloom
            intensity={10} // The bloom intensity.
            mipmapBlur
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.4} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ToneMapping  adaptive/>
        </EffectComposer>
      </Canvas>
    </div>
  );
}
