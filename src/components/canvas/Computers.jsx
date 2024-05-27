import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { PI } from "three/examples/jsm/nodes/Nodes.js";
const Computers = ({ mobile }) => {
  const Computers = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={3.15} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapsize={1024}
      />
      <primitive
        object={Computers.scene}
        scale={mobile ? 0.4 : 0.75}
        position={mobile ? [0, -3, -2.2] : [0, -3.6, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [mobile, setmobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setmobile(mediaQuery.matches);

    const handleMediaQuaryChange = (event) => {
      setmobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQuaryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuaryChange);
    };
  }, []);
  return (
    <Canvas
      // frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers mobile={mobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;

// export default Computers;
