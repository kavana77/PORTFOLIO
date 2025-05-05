import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Counter from "./Counter";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import MugModelContainer from "./mug/MugModelContainer";
import ConsoleModelContainer from "./console/ConsoleModelContainer";
const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

type ServiceType = {
  id: number;
  img: string;
  title: string;
  counter: number;
};

const services: ServiceType[] = [
  { id: 1, img: "/service1.png", title: "Web Development", counter: 35 },
  { id: 2, img: "/service2.png", title: "Product Design", counter: 23 },
  { id: 3, img: "/service3.png", title: "Branding", counter: 46 },
];
const Service = () => {
  const [currentServiceId, setCurrentServiceId] = useState<number>(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div
      className="flex h-screen w-screen overflow-hidden"
      ref={ref}
    >
      {/* Service Section Left */}
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center md:w-1/2 lg:gap-6">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="text-6xl lg:text-7xl font-bold mb-6"
        >
          How do i help?
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="flex flex-col gap-4 lg:w-[70%]"
        >
          {services.map((Service, index) => (
            <motion.div
              variants={listVariants}
              key={Service.id}
              className="cursor-pointer flex rounded-2xl bg-[#2f213f] items-center gap-4 w-full p-6 "
              onClick={() => setCurrentServiceId(Service.id)}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full   ${
                  index === 0
                    ? "bg-[#dd4c62]"
                    : index === 1
                    ? "bg-[#025656]"
                    : "bg-[#6c5c0c]"
                }`}
              >
                <img src={Service.img} alt="icon" className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-medium">{Service.title}</h2>
                <h3 className="text-sm font-light">
                  {Service.counter} Projects
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex items-center mt-6 w-full justify-between">
          <Counter from={0} to={104} text="Projects Completed" />
          <Counter from={0} to={72} text="Happy Clients" />
        </div>
      </div>
      {/* Service Section right*/}
      <div className="hidden lg:w-1/2 lg:h-[80%] justify-center items-center  md:w-1/2 md:flex">
        {currentServiceId === 1 ? (
          <ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <MugModelContainer />
        ) : (
          <ConsoleModelContainer />
        )}
      </div>
    </div>
  );
};
export default Service;
