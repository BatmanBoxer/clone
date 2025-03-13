import ChatBar from "./ChatBar"
import LeftAppBarIcons from "./LeftAppBarIcons"

const Screen = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex h-[700px] w-[1400px] gap-8 overflow-x-auto bg-black border-white " style={{ transform: "skew(16deg,-4deg) translateX(100px)" }}>
        {/*left side*/}
        <div className="flex flex-col flex-1/6">
          {/*top*/}
          <div className="flex justify-between">
            <div className="flex gap-1">
              <div className="h-5 w-5 rounded-full bg-black"></div>
              <div className="h-5 w-5 rounded-full bg-black"></div>
              <div className="h-5 w-5 rounded-full bg-black"></div>
            </div>
            <div className="flex gap-2">
              <h1>{"<-"}</h1>
              <h1>{"->"}</h1>
            </div>

            <div >
              <h1>time</h1>
            </div>
          </div>
          {/*App Bar*/}
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div>Linear</div>
              <div>Icon</div>
            </div>
            <div className="flex gap-2">
              <div>Icon</div>
              <div>Icon</div>
            </div>
          </div>
          {/*Inbox and Issues and others*/}
          <div className="flex flex-col">
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

        </div>
        {/*right side*/}
        <div className="flex flex-5/6">
          {/*Inbox*/}
          <div className="flex flex-col flex-1/3">
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
          </div>
          {/*Docs*/}
          <div className="flex justify-between flex-2/3">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Screen

