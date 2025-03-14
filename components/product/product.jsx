
const Product = () => {
  return (
    <div className="w-[1000px]">
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex-1/2 font-semibold text-6xl text-start">
          <div>Made for modern</div>
          <div>product teams</div>
        </div>
        <div className="flex-1/2 font-semibold text-gray-500  p-10 text-sm mt-4">
          Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft. Make the switch
        </div>
      </div>

      <div className="flex gap-2 mt-10">

        <div className="relative">
          <img className="w-fit h-[380px] rounded-4xl" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/fc435ee2-fabf-4f10-5a37-d89874f4bf00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none" />
          <div className="absolute w-full bottom-5 flex items-center justify-between px-7">
            <div className="font-semibold text-xl">
              <h1>Purpose-built for</h1>
              <h1>product development</h1>
            </div>
            <div className="flex items-center justify-center p-3 w-10 h-10 rounded-full text-3xl text-gray-500" style={{
              border: "1px groove #2a2a2a"
            }}>+</div>
          </div>
        </div>

        <div className="relative">
          <img className="w-fit h-[380px] rounded-4xl" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/0e6d3edd-cd37-4bf8-c1bf-b93960169400/f=auto,dpr=2,q=95,fit=scale-down,metadata=none" />
          <div className="absolute w-full bottom-5 flex items-center justify-between px-7">
            <div className="font-semibold text-xl">
              <h1>Designed to move fast</h1>
            </div>
            <div className="flex items-center justify-center p-3 w-10 h-10 rounded-full text-3xl text-gray-500" style={{
              border: "1px groove #2a2a2a"
            }}>+</div>
          </div>

        </div>

        <div className="relative">
          <img className="w-fit h-[380px] rounded-4xl" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/99eeb9b8-3d99-4191-0081-9f302d26f400/f=auto,dpr=2,q=95,fit=scale-down,metadata=none" />
          <div className="absolute w-full bottom-5 flex items-center justify-between px-7">
            <div className="font-semibold text-xl">
              <h1>Crafted to perfection</h1>
            </div>
            <div className="flex items-center justify-center p-3 w-10 h-10 rounded-full text-3xl text-gray-500" style={{
              border: "1px groove #2a2a2a"
            }}>+</div>
          </div>

        </div>

      </div>
      <div></div>
    </div>
  )
}

export default Product
