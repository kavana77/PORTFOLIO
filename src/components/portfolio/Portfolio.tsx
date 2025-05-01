import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Item {
  id: number;
  img: string;
  title: string;
  desc: string;
  link: string;
}

const items: Item[] = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Full Stack Blog Application",
    desc: "Lorem ipsum...",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "School Management System",
    desc: "Lorem ipsum...",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Real-time Chat Application",
    desc: "Lorem ipsum...",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Social Media Project",
    desc: "Lorem ipsum...",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum...",
    link: "/",
  },
];

const imgVariants = {
  initial: { x: -300, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const textVariants = {
  initial: { x: 300, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const ListItem = ({ item }: { item: Item }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-100px" });

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
        variants={textVariants}
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

const Portfolio = () => {
  const indexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Chevron Left */}
      <div
        onClick={() => scroll("left")}
        className="text-5xl text-gray-700 cursor-pointer absolute left-5 top-1/2 transform -translate-y-1/2 z-10 select-none"
      >
        <FaChevronLeft />
      </div>

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
      <div
        onClick={() => scroll("right")}
        className="text-5xl text-gray-700 cursor-pointer absolute right-5 top-1/2 transform -translate-y-1/2 z-10 select-none"
      >
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Portfolio;
