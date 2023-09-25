"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// can`t use Link from Next w/ motion

export function NewProject(props) {
  return (
    <motion.a
      href={props.href}
      className="work"
      whileHover={{ scale: 1.02, opacity: 0.85 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <h1>{props.name}</h1>
      <div className="flex flex-col items-center gap-2">
        {props.VR ? (
          <p className="bg-slate-200 px-2 text-sm rounded-xl text-black font-semibold">
            VR DISPONIBLE
          </p>
        ) : (
          ""
        )}
        <motion.span
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 390, damping: 20 }}
        >
          Ir al proyecto
        </motion.span>
      </div>
    </motion.a>
  );
}

export default function ExperienceWorks() {
  return (
    <>
      <div className="div_experience">
        <h1>Mi experiencia trabajando:</h1>
        <article className="experience">
          <NewProject href="/final" name="Ultimo proyecto" VR={true} />

          <NewProject
            href="https://www.behance.net/gallery/177543531/INTERIOR-RENDERS-ENSCAPE-SKETCHUP"
            name="Interior renders"
          />

          <NewProject
            href="https://www.behance.net/gallery/177543685/HOUSE-PROJECT-INTERIOR-EXTERIOR"
            name="House Project"
          />

          <NewProject
            href="https://www.behance.net/gallery/177992711/Bedroom-Render-Enscape-SketchUp"
            name="Bedroom render"
          />
        </article>
        <Link href="https://www.behance.net/eliastecheira" target="_blank">
          Explorar más en Behance -&gt;
        </Link>
      </div>
    </>
  );
}
