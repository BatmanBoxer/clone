
const LeftAppBarIcons = ({icon,name}) => {
  return (
    <div className="w-full flex justify-start gap-2 items-center bg-black hover:bg-gray-800 rounded-lg">
      <h1>{icon}</h1>
      <h1>{name}</h1>
    </div>
  )
}

export default LeftAppBarIcons
