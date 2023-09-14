"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import oficina from "../app/assets/oficina.png";

function AboutRectangle() {
  let rectangleAnimation = {
    hidden: { opacity: 0, transform: "translateY(50px)" },
    show: {
      y: 0,
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="my_svg_about"
      variants={rectangleAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.svg
        height="319"
        viewBox="0 0 542 319"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="52" width="384" height="319" rx="6" fill="#F9E5DA" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M138.956 70.1735C131.885 63.267 122.051 59.9881 112.265 61.2745C102.736 62.6196 94.2711 68.079 89.0968 76.2164C86.1426 80.7792 84.343 85.9961 83.8542 91.4145L85.1626 90.1001C73.0531 89.0499 60.8702 90.9603 49.6582 95.6676C40.2425 100.182 33.5911 108.992 31.812 119.306C30.8842 124.78 32.0419 130.404 35.0555 135.062L35.9267 132.917C21.1433 136.68 8.8653 146.976 2.55435 160.903C-0.272308 167.968 -0.767533 175.756 1.14131 183.124C3.00437 189.893 7.32453 195.718 13.2525 199.455C19.571 203.631 27.4196 204.755 34.6513 202.521L32.6465 201.381C36.9739 214.222 48.0408 223.6 61.3865 225.734C76.4409 228.73 92.0608 226.639 105.804 219.786C114.023 215.909 121.487 210.595 127.848 204.092L126.656 204.588C135.017 205.106 143.401 204.069 151.386 201.529C158.771 199.319 165.779 195.997 172.169 191.676C178.085 187.767 183.042 182.565 186.667 176.461C189.959 170.712 191.406 164.084 190.811 157.481C190.331 150.168 186.746 143.413 180.965 138.931V141.936C189.094 135.716 193.579 125.827 192.913 115.594C192.133 107.724 188.25 100.493 182.127 95.51C176.004 90.5266 168.15 88.2039 160.311 89.0585L161.536 92.0262C167.056 86.7193 168.563 78.4617 165.276 71.5375C161.824 64.8038 154.248 61.2888 146.897 63.0105C142.846 63.814 139.234 66.0895 136.753 69.4006C136.302 70.1881 136.564 71.193 137.342 71.6574C138.129 72.094 139.119 71.8338 139.591 71.0663C143.455 66.5235 149.713 64.8446 155.321 66.8462C160.984 69.0621 164.361 74.9166 163.453 80.9449C163.122 84.2652 161.564 87.341 159.085 89.5669C158.606 90.0696 158.468 90.8088 158.733 91.4515C158.998 92.0942 159.617 92.519 160.31 92.5346C169.4 91.4994 178.392 95.1619 184.189 102.26C189.715 109.323 191.126 118.783 187.904 127.159C186.252 131.87 183.225 135.972 179.215 138.931C178.757 139.208 178.45 139.68 178.382 140.212C178.314 140.744 178.491 141.278 178.864 141.663C188.459 150.216 190.389 164.516 183.405 175.32C179.733 181.255 174.731 186.248 168.797 189.903C162.274 194.069 155.145 197.194 147.665 199.165C143.622 200.273 139.482 200.983 135.302 201.286C133.275 201.418 131.24 201.405 129.211 201.339C128.218 201.181 127.207 201.156 126.207 201.265C125.33 201.731 124.569 202.389 123.982 203.191C118.717 208.306 112.716 212.598 106.18 215.926C93.7417 222.574 79.5442 225.161 65.5696 223.324C53.5559 222.21 42.8894 215.155 37.1357 204.518C36.574 203.222 36.1233 201.881 35.7886 200.509C35.5422 199.643 34.6501 199.136 33.7834 199.368C21.6333 202.784 8.91963 196.186 4.68153 184.265C2.43803 177.638 2.44528 170.452 4.70214 163.83C6.93848 157.222 10.9203 151.346 16.2232 146.829C22.1998 141.735 29.1762 137.955 36.701 135.736C37.1343 135.61 37.4863 135.292 37.6562 134.873C37.8261 134.454 37.7951 133.98 37.5721 133.586C32.9391 125.561 33.6195 115.519 39.2926 108.196C45.767 99.8512 55.4167 94.592 65.9194 93.6837C72.2947 92.8084 78.7335 92.4876 85.1638 92.7247C85.8795 92.7099 86.4564 92.1323 86.4726 91.4145C87.3665 82.5754 91.954 74.5307 99.0968 69.2766C106.374 64.0801 115.539 62.3011 124.223 64.3993C129.27 65.5403 133.979 67.8584 137.966 71.1655C138.244 71.4126 138.665 71.4002 138.927 71.1371C139.189 70.8741 139.202 70.4516 138.955 70.1735H138.956Z"
          className="locuras"
          fill="var(--secondary-color)"
        />
        <g filter="url(#filter0_d_0_63)">
          <rect
            x="278"
            y="38"
            width="216"
            height="68"
            rx="6"
            fill="var(--primary-color)"
          />
        </g>
        <motion.circle
          cx="313"
          cy="72"
          r="20"
          fill="#EF6D58"
          stroke="var(--primary-color)"
          strokeWidth="4"
        />
        <motion.circle
          cx="345"
          cy="72"
          r="22"
          fill="#B550F8"
          stroke="var(--primary-color)"
          strokeWidth="4"
        />
        <motion.circle
          cx="377"
          cy="72"
          r="22"
          fill="#F7CC47"
          stroke="var(--primary-color)"
          strokeWidth="4"
        />
        <rect
          x="409"
          y="58"
          width="62"
          height="14"
          rx="2"
          fill="var(--secondary-color)"
        />
        <rect
          x="409"
          y="80"
          width="51"
          height="6"
          rx="3"
          fill="var(--secondary-color)"
        />
        <defs>
          <filter
            id="filter0_d_0_63"
            x="230"
            y="14"
            width="312"
            height="164"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="24" />
            <feGaussianBlur stdDeviation="24" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.334635 0 0 0 0 0.117122 0 0 0 0 0 0 0 0 0.0818897 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_63"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_63"
              result="shape"
            />
          </filter>
        </defs>
      </motion.svg>
      <Image
        src={oficina}
        alt="Imagen proyecto Elias"
        className="oficina_img"
        variants={rectangleAnimation}
        initial="hidden"
        transition={{delay: 4}}
        whileInView={{
          y: 0,
          opacity: 1,
          transform: "translateY(0px)",
        }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}

export default AboutRectangle;
