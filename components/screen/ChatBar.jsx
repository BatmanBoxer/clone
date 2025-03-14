import {BiAlarm} from 'react-icons/bi'

const ChatBar = ({title,msg}) => {
  return (
    <div className="flex items-center w-full justify-between hover:bg-gray-800 p-2">
      <div className="flex items-center gap-3">
        <div className="w-[30px] h-[30px] rounded-full"> <img
          src='https://preview.redd.it/batman-profile-pics-v0-qrz10k9s6fid1.jpg?width=542&format=pjpg&auto=webp&s=2f848b2d6644cbb03e0116e28755cd7e0a63319a' /></div>
        <div className="flex flex-col">
          <div className="font-semibold text-md text-gray-400">{title}</div>
          <div className="font-light text-sm text-gray-500">{msg}</div>
        </div>
      </div>
      <div>
        <BiAlarm/>
      </div>
    </div>
  )
}

export default ChatBar
