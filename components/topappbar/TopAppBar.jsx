const TopAppBar = () => {
  return (
    <div className={`flex sticky top-0 z-100 justify-between items-center w-[1000px] p-5 cursor-default`} >
      <div className="font-semibold text-md"><img src="wordmark-light.png" className="h-5"/></div>
      <div className="flex justify-around gap-5 text-gray-500 font-light text-sm">
        <div>Product</div>
        <div>Resource</div>
        <div>Pricing</div>
        <div>Customers</div>
        <div>Blog</div>
        <div>Contact</div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <div className="text-gray-500 font-light text-sm hover:bg-gray-800 py-1 px-3 rounded-lg">Log in</div>
        <div className="text-black font-light text-sm bg-gray-300 py-1 px-3 rounded-lg">Sign up</div>
      </div>
    </div>
  )
}

export default TopAppBar
