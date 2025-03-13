const TopAppBar = () => {
  return (
    <div className={`flex justify-between items-center w-[900px]`} >
      <div>Linear</div>
      <div className="flex justify-around">
        <div>Product</div>
        <div>Resource</div>
        <div>Pricing</div>
        <div>Customers</div>
        <div>Blog</div>
        <div>Contact</div>
      </div>
      <div className="flex">
        <div>Login</div>
        <div>SignUp</div>
      </div>
    </div>
  )
}

export default TopAppBar
