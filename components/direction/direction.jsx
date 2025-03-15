import { IoMdSunny } from "react-icons/io"

const Direction = () => {
  return (
    <div className="w-[1000px] flex items-start justify-center flex-col">
      <div className="flex items-center" >
        <div className="w-5 h-2 bg-green-500 rounded-full"></div>
        <h1 className="ml-1 text-sm font-semibold">Project and long term Planning {">"}</h1>
      </div>
      <h1 className="text-5xl mt-4 font-bold">Set up product direction</h1>
      <div className="w-80 text-wrap font-semibold mt-8">
        <h1 className="inline">Align your team around a unified product timeline.</h1>
        <h1 className="inline text-gray-500">Plan, manage, and track all product initiatives with Linear’s visual planning tools.</h1>
      </div>

      <div className="flex justify-center items-center h-100 w-full">
        <h1>This is a placeholder for img</h1>
      </div>

      <div className="h-120 flex " style={{
        borderTop: "4px groove #1a1a1a",
        borderBottom: "4px groove #1a1a1a",
      }}>
        <div className="flex-1/2 p-15" style={{
          borderRight: "2px groove #1a1a1a",

        }}>
          <h1 className="font-semibold text-2xl">Manage projects end-to-end</h1>
          <h1 className="font-semibold text-gray-400 mt-4 text-md">Consolidate specs, milestones, tasks, and other documentation in one centralized location.</h1>
          <div className="flex justify-center items-center h-50">PlaceHolder</div>
        </div>
        <div className="flex-1/2 p-15">
          <h1 className="font-semibold text-2xl">Project updates</h1>
          <h1 className="font-semibold text-gray-400 mt-4 text-md">Communicate progress and project health with built-in project updates.</h1>
          <div className="flex justify-center items-center h-50">PlaceHolder</div>
        </div>
      </div>

      <div className="flex p-20 mt-20 w-full justify-between" style={{
        borderBottom: "4px groove #1a1a1a",
      }}>
        <div className="flex flex-col">
          <h1 className="font-semibold text-2xl">Ideate and specify</h1>
          <h1 className="font-semibold text-2xl">what to build next</h1>
          <div className="flex items-center justify-start mt-3">
            <div className="bg-green-500 h-6 w-1 rounded-full" />
            <div className="ml-4 font-bold">Collaborative Document</div>
          </div>

          <div className="flex items-center justify-start mt-3">
            <div className="bg-gray-600 h-6 w-1 rounded-full" />
            <div className="ml-4 text-gray-600 font-bold">Text-to-issue Commands</div>
          </div>

          <div className="flex items-center justify-start mt-3">
            <div className="bg-gray-600 h-6 w-1 rounded-full" />
            <div className="ml-4 text-gray-600 font-bold">Inline Comments</div>
          </div>

        </div>
        <div className="h-full justify-center items-center mr-30">
          PlaceHolder
        </div>
      </div>
    </div>
  )
}

export default Direction

