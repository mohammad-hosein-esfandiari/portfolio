import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Frame } from "./Frame";
import { useLocation, useRoute } from "wouter";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { GOLDENRATIO } from "../../core/Data/GoldenRatio";

export function Frames({
  sections,
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2.31, 1.35));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0.2, 5.5);
      q.identity();
    }
  }, [params]);
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.8, dt);
    easing.dampQ(state.camera.quaternion, q, 1.5, dt);
  });
  return (
    <group
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        setLocation(
          clicked.current === e.object ? "/" : "/item/" + e.object.name
        );
      }}
      onPointerMissed={() => setLocation("/")}>
      {images.map(
        (props) => <Frame section={sections.find(item=> item.id === props.url)} key={props.url} {...props} /> /* prettier-ignore */
      )}
    </group>
  );
}
