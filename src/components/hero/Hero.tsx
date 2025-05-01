import { motion } from "framer-motion";
import Speech from "./Speech";
import { Suspense } from "react";
import Shape from "./Shape";
import { Canvas } from "@react-three/fiber";
const awardVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};
const followVariants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};
const Hero = () => {
  return (
    <div className="h-screen relative flex overflow-hidden ">
      {/* Left Section */}
      <div className="flex w-1/2 flex-col justify-between p-6 ">
        {/* Title */}
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-8 text-8xl font-bold text-pink-400 "
        >
          Hey There,
          <br />
          <span className="text-white">{"I'm Kavana"}</span>
        </motion.h1>
        {/* Awards */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="mt-6 w-1/3 xl:w-[60%] "
        >
          <motion.h2 variants={awardVariants} className="text-xl font-semibold">
            Top Rated Designer
          </motion.h2>
          <motion.p
            variants={awardVariants}
            className="my-2 text-gray-300 text-sm"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </motion.p>
          <motion.div variants={awardVariants} className="flex gap-2">
            <motion.img
              variants={awardVariants}
              className="h-9 w-9 bg-white rounded-full p-2"
              src="/award1.png"
              alt="award1"
            />
            <motion.img
              variants={awardVariants}
              className="h-9 w-9 bg-white rounded-full p-2"
              src="/award2.png"
              alt="award2"
            />
            <motion.img
              variants={awardVariants}
              className="h-9 w-9 bg-white rounded-full p-2"
              src="/award3.png"
              alt="award3"
            />
          </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          href="/#serices"
          className="mb-12 w-max"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      {/* Right Section */}
      <div className="flex flex-col  items-end w-1/2 justify-between">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-3 rounded-br-xl bg-[#2f204e] p-3 "
        >
          <motion.a className="h-6 w-6" variants={followVariants}>
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a className="h-6 w-6" variants={followVariants}>
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.a className="h-6 w-6" variants={followVariants}>
            <img src="/youtube.png" alt="" />
          </motion.a>

          {/* FOLLOW TEXT */}
          <motion.div variants={followVariants} className="w-7 h-5 ">
            <div className="bg-[#dd4c62] rotate-90 px-2 text-xs flex items-center justify-center rounded-br-md w-max h-full origin-top-left-translate-y-6 ">
              FOLLOW ME
            </div>
          </motion.div>
        </motion.div>
        {/* BUBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        <div className="flex flex-col item-center text-center text-gray-300 gap-2">
          <img className="h-16 w-16" src="/certificate.png" alt="" />
          <div className="text-sm leading-6">
            LMA CERTIFIED
            <br />
            PROFESSIONAL
            <br />
            UI DESIGNER
          </div>
        </div>
        {/* CONTACT BUTTON */}
        <motion.a
          href="/#contact"
          className="mb-12 w-max"
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="relative"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me
                </textPath>
              </text>
            </svg>
            {/* Arrow */}
            <div className="absolute inset-0 m-auto h-20 w-20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      {/* Background */}
      <div className="absolute w-full h-full top-0 left-0 ">
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-0 right-0 left-0 m-auto w-max h-[70%] ">
          <img
            src="/hero.png"
            alt="Hero"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
