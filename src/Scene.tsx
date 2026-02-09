import { Canvas } from "@react-three/fiber";

function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh", background: "#000" }} camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <Box />
    </Canvas>
  );
}
