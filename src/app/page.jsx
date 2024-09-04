"use client";
import MacbookContainer from "@/Components/MacbookContainer";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
export default function Home() {
  return (
    <div className=" w-full h-screen">
      <div className=" flex flex-col items-center text-white absolute top-40  left-1/2  -translate-x-1/2">
    <p className=" font-applefont1 text-7xl tracking-tighter">Macbook pro</p>
    <h5>Tenzin Delek MacBook Pro</h5>
    <p className="  opacity-70 text-xs w-3/4 text-center">
    The MacBook Pro is a powerful laptop featuring a Retina display, fast processors, advanced graphics, and a sleek, portable design    </p>
      </div>
    <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
      {/* <OrbitControls /> */}
      <Environment
        preset="sunset"
        // files={[
        //   "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/metro_noord_2k.hdr",
        // ]}
      />
      <ScrollControls pages={3}>

      <MacbookContainer />
      </ScrollControls>

      {/* <mesh>
        <boxGeometry />
      </mesh> */}
    </Canvas>
    </div>

  );
}
