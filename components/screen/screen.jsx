"use client"

import ChatBar from "./ChatBar"
import LeftAppBarIcons from "./LeftAppBarIcons"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BiAlarm, BiFilter, } from "react-icons/bi"
import { BiSearch } from "react-icons/bi"
import { BiBookmark } from "react-icons/bi"
import { MdOutlineLibraryAdd } from "react-icons/md";
import Highlighter from "./highlighter";
import { CodeBlock } from "../ui/code-block";
import { motion } from 'motion/react'

const Screen = () => {
  return (
    <div className="flex justify-center items-center bg-transparent">
      <div
        className="flex relative h-[700px] w-[1400px] rounded-xl overflow-y-clip bg-green"

        style={{
          transform: "skew(20deg, -8deg) translate3d(100px, 0, 1000px)",
          transformStyle: "preserve-3d",
          perspective: "500px",
        }}
      >
        {/*hidden*/}
        <div
          className="absolute top-0 h-[800px] w-full"
          style={{
            background: `
        linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%,rgba(0, 0, 0, 0.2) 50%,rgba(0, 0, 0, 0.99) 80%, rgba(0, 0, 0, 1) 100%), 
        linear-gradient(to right, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 100%)`,
            zIndex: 2000,
          }} />
        <div
          className="absolute bottom-0 h-[1px] w-[1500px]"
          style={{
            transform: "translateX(-200px)",
            background: "black",
            zIndex: 2000,
          }} />
        <div
          className="absolute right-0 h-full w-[200px] bg-black"
          style={{
            transform: "translateX(200px)",
            zIndex: 2001,
          }} />

        <div className="absolute h-[777px] w-full rounded-lg" style={{
          borderLeft: "1px solid #2a2a2a",
          borderTop: "1px solid #2a2a2a",
          zIndex: 1,
        }}>

        </div>
        {/*left side*/}
        < div className="flex flex-col flex-1/6 mt-6 px-3" >
          {/*top*/}
          <motion.div
            initial={{
              scale: 1.4,
              opacity: 0,
              x: 100,
              y: -50
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              x: 0
            }}
            transition={{
              delay: 1.25,
              duration: 0.6,
              ease: "easeInOut"
            }}

            className="flex justify-between" >
            <div className="flex gap-1">
              <div className="h-3 w-3 rounded-full bg-[#2a2a2a]"></div>
              <div className="h-3 w-3 rounded-full bg-[#2a2a2a]"></div>
              <div className="h-3 w-3 rounded-full bg-[#2a2a2a]"></div>
            </div>
            <div className="flex gap-2">
              <IoIosArrowBack />
              <IoIosArrowForward />
            </div>

            <div >
              <BiAlarm />
            </div>
          </motion.div>
          {/*App Bar*/}
          <motion.div
            initial={{
              scale: 1.4,
              opacity: 0,
              x: 100,
              y: -50
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              x: 0
            }}
            transition={{
              delay: 1.2,
              duration: 0.6,
              ease: "easeInOut"
            }}

            className="flex justify-between mt-4">
            <div className="flex gap-2">
              <img className="w-auto h-[20px]" src="wordmark-light.png" />
            </div>
            <div className="flex gap-2">
              <BiSearch />
              <BiBookmark />
            </div>
          </motion.div>

          {/*Inbox and Issues and others*/}
          <motion.div
            initial={{
              scale: 1.4,
              opacity: 0,
              x: 100,
              y: -50
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              x: 0
            }}
            transition={{
              delay: 1.15,
              duration: 0.6,
              ease: "easeInOut"
            }}
            className="flex flex-col mt-4 bg-black">
            <LeftAppBarIcons icon={"icon"} name={"Inbox"} />
            <LeftAppBarIcons icon={"icon"} name={"My Issues"} />
          </motion.div>

          <motion.div
            initial={{
              scale: 1.4,
              opacity: 0,
              x: 100,
              y: -50
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              x: 0
            }}
            transition={{
              delay: 1.1,
              duration: 0.6,
              ease: "easeInOut"
            }}
            className="flex flex-col">
            <h1 className="text-gray-400">WorkSpace</h1>
            <LeftAppBarIcons icon={"icon"} name={"Initiatives"} />
            <LeftAppBarIcons icon={"icon"} name={"Projects"} />
            <LeftAppBarIcons icon={"icon"} name={"View"} />
            <LeftAppBarIcons icon={"icon"} name={"Teams"} />
          </motion.div>

          <motion.div
            initial={{
              scale: 1.4,
              opacity: 0,
              x: 100,
              y: -50
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              x: 0
            }}
            transition={{
              delay: 1.05,
              duration: 0.6,
              ease: "easeInOut"
            }}
            className="flex flex-col">
            <h1 className="text-gray-400">Favourites</h1>
            <LeftAppBarIcons icon={"icon"} name={"Mobile App"} />
            <LeftAppBarIcons icon={"icon"} name={"3Q24 RoadMap"} />
            <LeftAppBarIcons icon={"icon"} name={"Projects"} />
            <LeftAppBarIcons icon={"icon"} name={"Docs"} />
          </motion.div>

          <motion.div
            initial={{
              scale: 1.4,
              opacity: 0,
              x: 100,
              y: -50
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              x: 0
            }}
            transition={{
              delay: 1,
              duration: 0.6,
              ease: "easeInOut"
            }}
            className="flex flex-col">
            <h1>Your Team</h1>
            <LeftAppBarIcons icon={"icon"} name={"Product"} />
            <LeftAppBarIcons icon={"icon"} name={"Issue"} />
            <LeftAppBarIcons icon={"icon"} name={"Active"} />
          </motion.div>

        </div >
        {/*right side*/}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.4,
            y: -100,
            x: 500
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            x: 0
          }}
          transition={{
            delay: 1.2,
            duration: 0.6,
            ease: "easeInOut"
          }}

          className="flex flex-5/6 mt-2 bg-[#1a1a1a] rounded-lg" style={{
            border: "1px solid #4a4a4a",
          }} >
          {/*Inbox*/}
          < div className="flex flex-col flex-1/3 bg-transparent p-2" style={{ borderRight: "1px solid #4a4a4a" }} >
            <div className="flex justify-between" style={{ borderBottom: "1px solid #4a4a4a" }}>
              <div className="font-bold text-lg text-gray-400">Inbox</div>
              <div className="flex gap-2">
                <BiFilter size="30px" />
                <MdOutlineLibraryAdd size="25px" />
              </div>
            </div>
            <ChatBar title="Eng 123 Refactor Sonic" msg="Nah, assigned you a new task." />
            <ChatBar title="CS 201 Database Systems" msg="Your project deadline is approaching." />
            <ChatBar title="Math 101 Calculus" msg="New homework uploaded, please check." />
            <ChatBar title="BIO 150 Human Biology" msg="Your lab report is due in two days." />
            <ChatBar title="PHY 101 Physics" msg="Please complete the lab experiment by Friday." />
            <ChatBar title="CHEM 110 Organic Chemistry" msg="New quiz is available on the portal." />
            <ChatBar title="PSY 205 Psychology" msg="Don’t forget to submit your research paper." />
          </div >

          < div className="flex flex-col flex-2/3 p-2" >
            <div className="flex justify-between items-center">
              <div className="font-semibold text-md w-full text-gray-400"
                style={{ borderBottom: "1px solid #4a4a4a" }}
              >{"Engineering > Spice Harvestor > ENG-135"}</div>
            </div>
            {/*body*/}
            <div className="p-10 ">
              <div className="text-xl font-bold">Refactor sonic Crawler</div>
              <div className="flex text-md text-white flex-wrap">
                <Highlighter text="Comment.documentContent" />
                <div className="ml-1">
                  is defined wrongly. It should be a
                </div>
                <div className="ml-1">
                  <Highlighter text="LazyManyToOne" />
                </div>
                <div className="mt-3">
                  <CodeBlock

                    language="jsx"
                    code={`/* The document content this comment is associated with */
 @ManyToOne(() => Document, (document) => document.comments) 
   document: Document;
`}
                  />
                </div>
              </div>
            </div>
          </div >
        </motion.div >
      </div >
    </div >
  )
}

export default Screen



