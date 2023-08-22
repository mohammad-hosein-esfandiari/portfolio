import React from "react";
import { boxArray } from "../../core/Data/BoxArray";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";
import { Frames } from "./Frames";

export const GalleryHolder = ({data}) => {
  return (
    <>
      <color attach="background" args={["#121212"]} />
      <fog attach="fog" args={["#121212", 0, 15]} />
      <group position={[0, -0.5, 0]}>
        <Frames sections={data} images={boxArray} />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[500, 300]}
            resolution={720}
            mixBlur={1}
            mixStrength={100}
            roughness={1.5}
            depthScale={0.8}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={1.2}
          />
        </mesh>
      </group>
      <Environment preset="city" />
    </>
  );
};
