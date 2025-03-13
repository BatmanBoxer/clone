const ChatBar = () => {
  return (
    <div className="flex bg-black items-center w-full justify-between hover:bg-gray-800">
      <div className="w-[20px] h-[20px] rounded-full bg-green-500"></div>
      <div className="flex flex-col">
          <div className="font-bold text-xl">batman</div>
          <div className="font-light text-md">Random msg</div>
      </div> 
      <div>
        Icon
      </div>
    </div>
  )
}

export default ChatBar
