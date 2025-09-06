import HeroText from "../components/HeroText";
import { Amelia } from "../components/Amelia";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { Canvas } from "@react-three/fiber";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space" id="home">
      <HeroText />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          camera={{
            fov: isMobile ? 65 : 55,
            near: 0.1,
            far: 1000,
            position: isMobile ? [1.8, 0.2, 3.2] : [2.2, 0.3, 3.5],
          }}
          shadows
        >
          {/* Background ruang angkasa */}
          <color attach="background" args={["#000"]} />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />

          {/* Pencahayaan */}
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[5, 5, 3]}
            intensity={1.8}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <pointLight
            position={[-1.2, -0.7, 1.8]}
            intensity={8}
            color="#ff9d00"
            distance={5}
            decay={1.5}
          />

          <Suspense fallback={<Loader />}>
            <Float
              speed={3}
              rotationIntensity={0.8}
              floatIntensity={0.8}
              floatingRange={[0, 0.1]}
            >
              <Amelia
                scale={isMobile ? 0.5 : 0.85}
                position={isMobile ? [1.2, -1.6, 0] : [2.0, -1.2, 0]}
                rotation={[0, Math.PI * 0.18, 0]}
              />
            </Float>
          </Suspense>

          {/* OrbitControls full interaktif */}
          <OrbitControls
            enableRotate={true}
            enablePan={true}
            enableZoom={true}
            minDistance={2.5}
            maxDistance={6}
            maxPolarAngle={Math.PI / 1.9} // batasi gerakan ke bawah
            minPolarAngle={Math.PI / 4}   // batasi gerakan ke atas
            target={isMobile ? [1.0, -0.9, 0] : [1.5, -0.9, 0]}
            autoRotate
            autoRotateSpeed={0.6}
          />
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
