"use client";
import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
function Hero() {
  return (
    <>
      <section className="hero_section">
        <div className="saludo">
          <motion.h1 className="text-4xl font-semibold">
            Elias Techeira
          </motion.h1>
          <motion.h2
            className="text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Estudiante de arquitectura, <span>Modelador 3D</span>
          </motion.h2>
          <motion.button>Contact Me</motion.button>
        </div>
      </section>
    </>
  );
}

export default Hero;
