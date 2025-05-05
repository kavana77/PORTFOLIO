import { motion } from "framer-motion";
import { Iitem } from "../../types/data";
import { imgVariants, ltextVariants } from "../../utils/variants";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

const ListItem = ({ item }: { item: Iitem }) => {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div
      ref={ref}
      className="flex flex-row gap-8 items-center justify-center w-full max-w-[1000px]"
    >
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="w-[400px] rounded-xl overflow-hidden"
      >
        <img src={item.img} alt={item.title} className="w-full h-auto" />
      </motion.div>

      <motion.div
        variants={ltextVariants}
        animate={isInView ? "animate" : "initial"}
        className="max-w-[400px] flex flex-col gap-4"
      >
        <motion.h1 className="text-4xl font-bold">{item.title}</motion.h1>
        <motion.p className="text-gray-600">{item.desc}</motion.p>
        <motion.a href={item.link}>
          <button className="bg-pink-300 px-4 py-2 rounded-lg font-medium">
            View Project
          </button>
        </motion.a>
      </motion.div>
    </div>
  );
};
export default ListItem;
