"use client";
import React from "react";
import { motion } from "framer-motion";

import "./css/Hero.css";
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
            <span>M.M.O | Estudiante de arquitectura | 3D Modeler</span>
          </motion.h2>
          <a href="#contacto">Contactame</a>
        </div>
      </section>
    </>
  );
}

export default Hero;
