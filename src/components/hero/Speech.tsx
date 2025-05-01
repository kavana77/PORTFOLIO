import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const Speech = () => {
  return (
    <motion.div
      className="w-1/2 flex justify-between gap-2 items-end "
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="w-full h-[90px] bg-white text-[#555] p-6 text-xs rounded-tl-[20px] rouned-tr-[20px] rounded-br-[20px]  ">
        <TypeAnimation
          sequence={[
            1000,
            "Same substring at the start will only be typed out once, initially",
            1000,
            "Lorem ipsum dolor sit amet lerinat consectetur adipisicing.",
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
