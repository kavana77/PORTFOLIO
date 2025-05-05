import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ListItem from "./ListItem";
import { items } from "../../utils/constant";

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
