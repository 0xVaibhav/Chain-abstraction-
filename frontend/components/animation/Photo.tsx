"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
      >
        {/* image */}
        <motion.div className="w-[500px] h-[500px] mix-blend-lighten flex absolute items-center justify-center ">
          <Image
            src="/photo.png"
            priority
            quality={100}
            fill
            alt="my car"
            className="object-contain rounded-full w-[495px] h-[495px] p-3 "
          />
        </motion.div>

        {/* animation */}

        <motion.svg
          className="w-[506px] h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org./2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray:"24 10 0 0"}}
            animate={{
              strokeDasharray:["15 120 25 25","16 25 92 72 ","4 250 22 22"],
              rotate:[120,360]
            }}
            transition={{
              duration:20,
              repeat:Infinity,
              repeatType:"reverse"
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
