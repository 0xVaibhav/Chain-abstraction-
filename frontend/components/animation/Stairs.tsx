import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const steps=100

// Calculate the reverse index for the staggered delay
const reverseIndex = (index: number) => {
  const totalSteps = steps; // Number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Render 6 motion divs, each representing a step of the stairs.
          Each div will have the same animation defined by the stairsAnimation object.
          The delay of each div is calculated dynamically based on its reversed index,
          creating a staggered effect with decreasing delay for each subsequent step. 
      */}
      {[...Array(steps)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.5,
              ease:"easeInOut",
              delay: reverseIndex(index) * 0.01,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;