"use client";
import { motion } from "motion/react"

const Description = () => {
  return (
    <div className="w-[1000px] flex justify-center flex-col items-start cursor-default">
      <motion.h1
        initial={{
          opacity: 0,
          filter: "blur(10px)"
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)"
        }}
        transition={{ duration: 0.6 }}
        className="font-bold text-5xl"
      >Linear is a purpose-built tool</motion.h1>
      <motion.h1
        initial={{
          opacity: 0,
          filter: "blur(10px)"
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)"
        }}
        transition={{
          delay: 0.2,
          duration: 0.6
        }}
        className="font-bold text-5xl mt-2"
      >for planning and building products</motion.h1>

      <motion.h2 initial={{
        opacity: 0,
        filter: "blur(10px)"
      }}
        animate={{
          opacity: 1,
          filter: "blur(0px)"
        }}
        transition={{
          delay: 0.4,
          duration: 0.6
        }} className="mt-8 text-2xl text-muted-foreground">Meet the system for modern software development.</motion.h2>

      <motion.h2 initial={{
        opacity: 0,
        filter: "blur(10px)"
      }}
        animate={{
          opacity: 1,
          filter: "blur(0px)"
        }}
        transition={{
          delay: 0.5,
          duration: 0.6
        }} className=" text-2xl text-muted-foreground">Streamline issues, projects, and product roadmaps.</motion.h2>

      <div className="flex gap-2 mt-10">
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)"
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)"
          }}
          transition={{
            delay: 0.6,
            duration: 0.6
          }}
          className="text-black font-semibold text-md bg-gray-200 py-2 px-4 rounded-lg">Start building</motion.div>
      <motion.div
 initial={{
        opacity: 0,
        filter: "blur(10px)"
      }}
        animate={{
          opacity: 1,
          filter: "blur(0px)"
        }}
        transition={{
          delay: 0.7,
          duration: 0.6
        }} 
          className="text-white font-semibold text-md hover:bg-gray-800 py-2 px-4 rounded-lg">Introducing Sub-teams</motion.div>
    </div>
    </div >
  )
}

export default Description

