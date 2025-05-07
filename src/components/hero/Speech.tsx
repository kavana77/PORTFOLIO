import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const Speech = () => {
  return (
    <motion.div
      className="mt-12 hidden w-1/2 justify-between gap-2 items-end sm:hidden md:flex md:w-full lg:w-1/2 "
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="w-full h-[90px] bg-white text-[#555] p-6 text-xs rounded-tl-[20px] rouned-tr-[20px] rounded-br-[20px]  ">
        <TypeAnimation
          sequence={[
            1000,
            "Hi, I'm Kavana — a passionate Full Stack Developer.",
            1000,
            "I love building responsive web apps with React & Node.js.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img
        className="w-[50px] h-[50px] rounded-full bg-[#dd4c62]"
        src="/man.png"
        alt=""
      />
    </motion.div>
  );
};
export default Speech;
