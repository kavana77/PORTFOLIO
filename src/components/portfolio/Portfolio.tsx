import { useRef } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ListItem from "./ListItem";
import { items } from "../../utils/constant";
import { motion } from "framer-motion";

const Portfolio = () => {
  const indexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    const maxIndex = items.length - 1;

    if (direction === "left" && indexRef.current > 0) {
      indexRef.current -= 1;
    } else if (direction === "right" && indexRef.current < maxIndex) {
      indexRef.current += 1;
    }

    containerRef.current.scrollTo({
      left: indexRef.current * width,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full  h-screen  overflow-hidden flex flex-col items-center justify-center">
   {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-2 text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 drop-shadow-md mb-10"
      >
        ✨ My Creative Work ✨
      </motion.h1>

      {/* Chevron Left */}
<motion.div
  onClick={() => scroll("left")}
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.9 }}
  className="absolute left-0 md:left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-3 rounded-full shadow-lg hover:shadow-pink-400/60 cursor-pointer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white animate-pulse"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
</motion.div>


      {/* Scrollable Items */}
      <div ref={containerRef} className="w-full h-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ width: `${items.length * 100}%` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 flex items-center justify-center"
              style={{ width: `${100 / items.length}%` }}
            >
              <ListItem item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Chevron Right */}
  <motion.div
  onClick={() => scroll("right")}
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.9 }}
  className="absolute right-0 md:right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-3 rounded-full shadow-lg hover:shadow-purple-400/60 cursor-pointer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white animate-pulse"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</motion.div>

    </div>
  );
};

export default Portfolio;
