"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Animation({ children, delay = 0.1, duration = 1 }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false,
    amount: 0.3, // Trigger a bit deeper for better experience
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 80,
          scale: 0.98,
          filter: "blur(0px)",
          transition: {
            ease: [0.65, 0, 0.35, 1],
            duration: duration * 0.6,
          },
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            ease: [0.22, 1, 0.36, 1],
            duration,
            delay,
          },
        },
      }}
      style={{
        willChange: "transform, opacity, filter",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </motion.section>
  );
}
