import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const transitionImg = { duration: 2, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(20px)", transform: "translateY(50%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0%)", opacity: 1 },
};

const variantImg = {
  hidden: { transform: "translateY(50%)", opacity: 0 },
  visible: { transform: "translateY(0%)", opacity: 0 },
};

const name = "Welcome to Prixm";

export default function Hero() {
  const nameWords = name.split(" ");

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-20 py-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.04 }}
          className="w-full flex flex-col justify-between items-start"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-mainblack mb-2">
            {nameWords.map((word, index) => (
              <React.Fragment key={index}>
                <motion.span
                  className="inline-block"
                  transition={transition}
                  variants={variants}
                >
                  {word}
                </motion.span>
                {index < nameWords.length - 1 && " "}
              </React.Fragment>
            ))}
          </h2>
          <motion.h2
            transition={transition}
            variants={variants}
            className=" text-lg md:text-xl font-semibold mt-3 text-orange-500"
          >
            Hello anoyomous!
          </motion.h2>
          <motion.p
            transition={transition}
            variants={variants}
            className="text-base leading-relaxed font-light mt-6 md:pb-6 max-w-lg"
          >
            {`Got something to say? Let it out! Prixm is your go-to spot for random rants, wild thoughts, and real talk. No filters, no judgment—just pure expression. Whether you're venting or vibing, someone's ready to read. Jump in, rant on!`}
          </motion.p>
          <Link to="\addrant">
            <button className="border-orange-500 border text-orange-500 font-normal px-6 py-2 mt-6 rounded-md hover:bg-orange-500 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Join the Rant
            </button>
          </Link>
        </motion.div>
        <motion.div
          transition={transition}
          variants={variants}
          className="  md:w-[500px] lg:w-[1000px] rounded-2xl overflow-hidden mt-6 md:mt-0"
        >
          <motion.img
            transition={transitionImg}
            variants={variantImg}
            className="w-full"
            src="\gif.gif"
            alt=""
          />
        </motion.div>
      </div>
    </>
  );
}
