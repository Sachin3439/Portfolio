import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* =========================
   Rotating Particle Sphere
========================= */

function InteractiveParticles() {
  const ref = useRef();
  const { viewport } = useThree();

  // responsive particle size
const particleSize = viewport.width < 6 ? 0.025 : 0.035;

// responsive sphere radius
const radius = viewport.width < 6 ? 2.3 : 3.3;

  const particles = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    return positions;
  }, [radius]);

  useFrame(({ mouse }) => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
      ref.current.rotation.x = mouse.y * 0.4;
      ref.current.rotation.y += mouse.x * 0.4;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#14b8a6"
        size={particleSize}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

/* =========================
   Stable NR Logo
========================= */

function NRLogo() {
  const texture = useLoader(THREE.TextureLoader, "/nr-logo.webp");
  const meshRef = useRef();
  const { camera, viewport } = useThree();

  const logoSize = viewport.width < 6 ? 1.8 : 2.8;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0.5]}>
      <planeGeometry args={[logoSize, logoSize]} />
      <meshBasicMaterial
        map={texture}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

/* =========================
   Main Scene
========================= */

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8] }}
 dpr={[1, 1.5]}
  style={{
    position: "fixed",
    inset: 0,
    width: "100vw",
    height: "100vh"
  }}
    >
      <ambientLight intensity={0.6} />
      <InteractiveParticles />
      <NRLogo />
    </Canvas>
  );
}