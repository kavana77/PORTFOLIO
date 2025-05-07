import { motion } from "framer-motion";
import { Iitem } from "../../types/data";
import { imgVariants, ltextVariants } from "../../utils/variants";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import Tilt from "react-parallax-tilt";

const ListItem = ({ item }: { item: Iitem }) => {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row gap-8 items-center justify-center w-full max-w-[1200px] px-4 py-8"
    >
      {/* Image Section with AI Background Overlay */}
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="w-full lg:w-1/2 flex justify-center rounded-xl overflow-hidden relative"
      >
       
        <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.02} transitionSpeed={400}>
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-auto object-cover rounded-xl relative z-10 md:w-[80%] mx-auto"
          />
        </Tilt>
      </motion.div>

      {/* Text Section with animation */}
      <motion.div
        variants={ltextVariants}
        animate={isInView ? "animate" : "initial"}
        className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl font-bold"
        >
          {item.title}
        </motion.h1>
        <motion.p className="text-gray-600 text-sm sm:text-base">
          {item.desc}
        </motion.p>
        <motion.a href={item.link} className="self-center lg:self-start">
          <button className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white px-5 py-2 rounded-lg font-medium shadow-lg hover:scale-105 transition-all duration-300">
            View Project
          </button>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ListItem;
