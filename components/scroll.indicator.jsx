"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        style={{ scaleX, transformOrigin: 0 }}
        className="h-1 w-full bg-green-300"
      />
    </>
  );
}

export default ScrollIndicator;
