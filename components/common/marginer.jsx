
const Marginer = ({ children }) => {
  return (
    <div className="sticky top-0 z-800 bg-black flex items-center justify-center " style={{
      borderBottom: "0.1px groove #141414",
    }}>
      {children}
    </div>
  )
}

export default Marginer

