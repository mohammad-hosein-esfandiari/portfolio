import { Html, useCursor } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useLocation, useRoute } from "wouter";
import { easing } from "maath";
import { HtmlWrapper } from "../common/HtmlWrapper";

export function Frame({
  component,
  section,
  color,
  img,
  url,
  c = new THREE.Color(),
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
  ...props
}) {
  const frame = useRef();
  const ref = useRef();

  const [, params] = useRoute("/item/:id");
  const [hovered, hover] = useState(false);
  const [, setLocation] = useLocation();

  useCursor(hovered);

  useFrame((state, dt) => {
    easing.dampC(
      frame.current.material.color,
      hovered ? "orange" : color,
      0.5,
      dt
    );

    easing.dampC(
      frame.current.material.color,
      params && url === params.id ? "orange" : color,
      0.4,
      dt
    );
  });

  const routeChangeFunc = (e) => {
    e.stopPropagation();
    setLocation("/item/" + ref.current.getAttribute("url"));
  };
  return (
    <group {...props}>
      <mesh
        name={url}
        ref={frame}
        raycast={() => null}
        position={[0, 0.7, 0.2]}>
        <boxGeometry args={[1, 1.4, 0.2]} />
        <meshStandardMaterial
          color={color}
          opacity={0}
          metalness={0.5}
          roughness={0.2}
          envMapIntensity={1}
          toneMapped={false}
          fog={false}
        />

        <mesh name={url} position={[0, 0, 0.101]}>
          <planeGeometry args={[0.8, 1.2]} />
          <meshBasicMaterial color="#D4D4D4" />
        </mesh>
      </mesh>

      <Html
        occlude
        transform
        distanceFactor={0.8}
        position={[0, 0.7, 0.302]}>
        <div
          ref={ref}
          onClick={routeChangeFunc}
          url={url}
          onMouseEnter={(e) => (e.stopPropagation(), hover(true))}
          onMouseLeave={() => hover(false)}
          className=" cursor-pointer h-[598px] w-[396px] text-black">
          <HtmlWrapper params={params} title={url}>{component(section,params)}</HtmlWrapper>
        </div>
      </Html>
    </group>
  );
}
