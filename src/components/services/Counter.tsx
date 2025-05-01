import { animate, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
interface ICounter {
  from: number;
  to: number;
  text: string;
}
const Counter: React.FC<ICounter> = ({ from, to, text }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    const animation = animate(from, to, {
      duration: 4,
      ease: "easeOut",
      onUpdate: (prev) => {
        setCount(Math.floor(prev));
      },
    });
    return () => animation.cancel();
  }, [isInView, from, to]);
  return (
    <div className="flex flex-col gap-2" ref={ref}>
      <h1 className="text-4xl text-[#dd4c62] font-bold">{count}+</h1>
      <p className="text-sm ">{text}</p>
    </div>
  );
};
export default Counter;
