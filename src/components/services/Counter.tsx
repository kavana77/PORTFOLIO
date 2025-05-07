import { animate } from "framer-motion";
import { useState, useEffect } from "react";
import { ICounter } from "../../types/data";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

const Counter: React.FC<ICounter> = ({ from, to, text }) => {
  const [count, setCount] = useState(from);
  const { ref, isInView } = useInViewAnimation();

  useEffect(() => {
    if (isInView) {
      const animation = animate(from, to, {
        duration: 4,
        ease: "easeOut",
        onUpdate: (latest) => {
          setCount(Math.floor(latest));
        },
      });
      return () => animation.cancel();
    }
  }, [isInView, from, to]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#dd4c62] font-bold">
        {count}+
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-white">{text}</p>
    </div>
  );
};

export default Counter;
