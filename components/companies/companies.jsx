"use client"
import { motion } from 'framer-motion'
const Companies = () => {
  return (
    <div>
      <div className="text-center text-2xl font-semibold">Powering the world's best product teams.</div>
      <div className="text-center  text-2xl font-semibold text-gray-500">From next-gen startups to established enterprises.</div>
      <div className="p-10">
        <div className="flex justify-between items-center gap-10 text-xl">
          <motion.div
            className="p-4"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          >
            Logo1
          </motion.div>
          <motion.div
            className="p-4"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          >
            Logo2
          </motion.div>
          <motion.div
            className="p-4"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          >
            Logo3
          </motion.div>
        </div>

        <div className="flex justify-between items-center gap-10 text-xl">
          <motion.div
            className="p-4"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          >
            Logo4
          </motion.div>
          <motion.div
            className="p-4"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          >
            Logo5
          </motion.div>
          <motion.div
            className="p-4"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          >
            Logo6
          </motion.div>
        </div>
      </div>    </div>
  )
}

export default Companies
