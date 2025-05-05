import { useInView } from "framer-motion";
import { useRef } from "react";

export const useInViewAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });
  return { ref, isInView };
};
