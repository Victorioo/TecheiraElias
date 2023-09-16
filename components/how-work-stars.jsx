"use client";
import React from "react";
import { motion } from "framer-motion";

let rectangleAnimation = {
  hidden: { opacity: 0, translateX: 5, scale: 0.7},
  show: {
    opacity: 1,
    translateX: "0",
    scale: 1,
    transition: {
      bounce: 0.5,
      duration: 2,
      delay: 0.3,
    },
  },
};

function Stars() {
  return (
    <>
      <motion.svg
        width="152"
        height="24"
        viewBox="0 0 152 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
        variants={rectangleAnimation}
      >
        <g id="star">
          <motion.path
            id="Star1"
            d="M12 18L4.94658 21.7082L6.29366 13.8541L0.587322 8.2918L8.47329 7.1459L12 0L15.5267 7.1459L23.4127 8.2918L17.7063 13.8541L19.0534 21.7082L12 18Z"
            fill="#F6D021"
          />
          <motion.path
            id="Star2"
            d="M44 18L36.9466 21.7082L38.2937 13.8541L32.5873 8.2918L40.4733 7.1459L44 0L47.5267 7.1459L55.4127 8.2918L49.7063 13.8541L51.0534 21.7082L44 18Z"
            fill="#F6D021"
          />
          <motion.path
            id="Star3"
            d="M76 18L68.9466 21.7082L70.2937 13.8541L64.5873 8.2918L72.4733 7.1459L76 0L79.5267 7.1459L87.4127 8.2918L81.7063 13.8541L83.0534 21.7082L76 18Z"
            fill="#F6D021"
          />
          <motion.path
            id="Star4"
            d="M108 18L100.947 21.7082L102.294 13.8541L96.5873 8.2918L104.473 7.1459L108 0L111.527 7.1459L119.413 8.2918L113.706 13.8541L115.053 21.7082L108 18Z"
            fill="#F6D021"
          />
          <motion.path
            id="Star5"
            d="M140 18L132.947 21.7082L134.294 13.8541L128.587 8.2918L136.473 7.1459L140 0L143.527 7.1459L151.413 8.2918L145.706 13.8541L147.053 21.7082L140 18Z"
            fill="#F6D021"
          />
        </g>
      </motion.svg>
    </>
  );
}

export default Stars;
