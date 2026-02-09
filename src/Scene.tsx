import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function Avatar() {
  const { scene } = useGLTF("/avatar_adult.glb");
  return <primitive object={scene} />;
}

export default function Scene() {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", background: "#000" }}
      camera={{ position: [0, 1.6, 3] }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <Avatar />
      <OrbitControls />
    </Canvas>
  );
}
