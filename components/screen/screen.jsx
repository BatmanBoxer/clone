import ChatBar from "./ChatBar"
import LeftAppBarIcons from "./LeftAppBarIcons"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BiAlarm } from "react-icons/bi"



const Screen = () => {
  return (
    <div className="flex justify-center items-center bg-transparent">
      <div
        className="flex relative h-[700px] w-[1400px] gap-8 overflow-x-auto  rounded-lg overflow-clip bg-transparent"
        style={{
          transform: "skew(16deg,-4deg) translateX(100px)",
          boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.6)", // Shadow for 3D depth
        }}
      >
        {/*hidden*/}
        <div
          className="absolute inset-0 h-full w-full rounded-lg"
          style={{
            background: `
        linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%,rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 1) 100%), 
        linear-gradient(to right, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 100%)`,
            zIndex: 10000,
          }} />
        <div className="absolute h-[777px] w-full" style={{
          borderLeft: "1px solid #2a2a2a",
          borderTop: "1px solid #2a2a2a",
          zIndex: 1,
        }}>

        </div>
        <div>
        </div>
        {/*left side*/}
        < div className="flex flex-col flex-1/6 mt-6" >
          {/*top*/}
          < div className="flex justify-between" >
            <div className="flex gap-1">
              <div className="h-3 w-3 rounded-full bg-[#2a2a2a]"></div>
              <div className="h-3 w-3 rounded-full bg-[#2a2a2a]"></div>
              <div className="h-3 w-3 rounded-full bg-[#2a2a2a]"></div>
            </div>
            <div className="flex gap-2">
              <IoIosArrowBack/>
              <IoIosArrowForward/>
            </div>

            <div >
              <BiAlarm/>
            </div>
          </div>
          {/*App Bar*/}
          <div className="flex justify-between mt-4">
            <div className="flex gap-2">
              <img  className="w-auto h-[20px]" src="wordmark-light.png"/>
            </div>
            <div className="flex gap-2">
              <
                div>Icon</div>
              <div>Icon</div>
            </div>
          </div>
          {/*Inbox and Issues and others*/}
          <div className="flex flex-col mt-4">
            <LeftAppBarIcons icon={"icon"} name={"Inbox"} />
            <LeftAppBarIcons icon={"icon"} name={"My Issues"} />
          </div>

          <div className="flex flex-col">
            <h1>WorkSpace</h1>
            <LeftAppBarIcons icon={"icon"} name={"Initiatives"} />
            <LeftAppBarIcons icon={"icon"} name={"Projects"} />
            <LeftAppBarIcons icon={"icon"} name={"View"} />
            <LeftAppBarIcons icon={"icon"} name={"Teams"} />
          </div>

          <div className="flex flex-col">
            <h1>Favourites</h1>
            <LeftAppBarIcons icon={"icon"} name={"Mobile App"} />
            <LeftAppBarIcons icon={"icon"} name={"3Q24 RoadMap"} />
            <LeftAppBarIcons icon={"icon"} name={"Projects"} />
            <LeftAppBarIcons icon={"icon"} name={"Docs"} />
          </div>

          <div className="flex flex-col">
            <h1>Your Team</h1>
            <LeftAppBarIcons icon={"icon"} name={"Product"} />
            <LeftAppBarIcons icon={"icon"} name={"Issue"} />
            <LeftAppBarIcons icon={"icon"} name={"Active"} />
            <LeftAppBarIcons icon={"icon"} name={"Backlog"} />
          </div>

        </div >
        {/*right side*/}
        < div className="flex flex-5/6 mt-6" >
          {/*Inbox*/}
          < div className="flex flex-col flex-1/3" >
            <div className="flex justify-between">
              <h1>Inbox</h1>
              <div className="flex gap-2">
                <h1>Icon</h1>
                <h1>Icon</h1>
              </div>
            </div>
            <ChatBar />
            <ChatBar />
            <ChatBar />
            <ChatBar />
            <ChatBar />
            <ChatBar />
            <ChatBar />
          </div >
          {/*Docs*/}
          < div className="flex justify-between flex-2/3" >
          </div >
        </div >
      </div >
    </div >
  )
}

export default Screen

