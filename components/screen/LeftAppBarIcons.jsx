import { IoIosApps } from "react-icons/io";

const LeftAppBarIcons = ({icon,name}) => {
  return (
    <div className="w-full flex p-2 justify-start gap-2 items-center bg-black hover:bg-gray-800 rounded-lg">
      <IoIosApps color="gray"></IoIosApps>
      <h1 className="text-gray-400">{name}</h1>
    </div>
  )
}

export default LeftAppBarIcons
