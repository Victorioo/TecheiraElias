"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} className="h-1 w-full bg-blue-700" />
    </>
  );
}

export default ScrollIndicator;
