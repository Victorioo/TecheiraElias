"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link'
// can`t use Link from Next w/ motion
export function NewProject({ href, name}) {
  return (
    <motion.a
      href={href}
      className="work"
      whileHover={{ scale: 1.02, opacity: 0.85 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <h1>{name}</h1>
      <motion.span
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        Ir al proyecto
      </motion.span>
    </motion.a>
  );
}

export default function ExperienceWorks() {
  return (
    <>
      <div className="div_experience">
        <h1>Mi experiencia trabajando:</h1>
        <article className="experience">
          <NewProject href={"/best"} name={'Ultimo proyecto'}/>
          <NewProject href={"/"} name={'Mountain arena'}/>
          <NewProject href={"/"} name={'Cilinders'}/>
          <NewProject href={"/"} name={'Boxes'}/>
        </article>
        <Link href={'https://www.behance.net/'} target="_blank">
          Explorar más en Behance -&gt;
        </Link>
      </div>
    </>
  );
}

