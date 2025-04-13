import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Leva } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo"
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  // ✅ Keep useControls here — before JSX return
  const isMobile = useMediaQuery({maxWidth:768});
  const isSmall = useMediaQuery({maxWidth:440})
  const isTablet = useMediaQuery({minWidth:768,maxWidth:1024})
  const sizes = calculateSizes(isSmall,isMobile,isTablet)

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Vedansh <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products and Brands
        </p>
      </div>

      <div className="my-10 w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          {/* ✅ useControls is already resolved by the time Suspense runs */}
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]}  fov={55}/>
            <HeroCamera isMobile={isMobile}>
            <HackerRoom
              position={sizes.deskPosition}
              rotation={[0, -Math.PI, 0]}
              scale={sizes.deskScale}
            />
            </HeroCamera >
            <group>
                <Target position={sizes.targetPosition}/>
                <ReactLogo position={sizes.reactLogoPosition}/>
                <Cube position={sizes.cubePosition }/>
                <Rings position={sizes.ringPosition}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 5, 5]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
            <Button name="Let's Work together" isBeam container="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>
    </section>
  );
};

export default Hero;
