import { motion } from "framer-motion";
import { useState } from "react";
import Counter from "./Counter";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import MugModelContainer from "./mug/MugModelContainer";
import ConsoleModelContainer from "./console/ConsoleModelContainer";
import { services } from "../../utils/constant";
import { textVariants, listVariants } from "../../utils/variants";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

const Service = () => {
  const [currentServiceId, setCurrentServiceId] = useState<number>(1);
  const { ref, isInView } = useInViewAnimation();

  return (
    <div
      className="w-full h-screen flex flex-col lg:flex-row items-center justify-center p-4 gap-10"
      ref={ref}
    >
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center"
        >
          How do I help?
        </motion.h1>

        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="flex flex-col gap-4 w-full sm:w-[80%] md:w-[70%]"
        >
          {services.map((Service, index) => (
            <motion.div
              variants={listVariants}
              key={Service.id}
              className="cursor-pointer flex rounded-2xl bg-[#2f213f] items-center gap-4 w-full p-4 sm:p-6"
              onClick={() => setCurrentServiceId(Service.id)}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${
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

        <div className="flex sm:flex-row items-center justify-between gap-4 mt-6 w-full sm:w-[80%] md:w-[70%]">
          <Counter from={0} to={104} text="Projects Completed" />
          <Counter from={0} to={72} text="Happy Clients" />
        </div>
      </div>

      {/* Right */}
      <div className="hidden lg:flex w-full lg:w-1/2 lg:h-full justify-center items-center">
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
