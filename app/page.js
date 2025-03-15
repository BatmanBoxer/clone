import Marginer from "@/components/common/marginer";
import Companies from "@/components/companies/companies";
import Description from "@/components/description/description";
import Direction from "@/components/direction/direction";
import Product from "@/components/product/product";
import Screen from "@/components/screen/screen";
import TopAppBar from "@/components/topappbar/TopAppBar";
import { containersize } from "@/constants";

export default function Home() {
  return (
    <div className="overflow-hidden p-4" style={{}}>
      {/* Part One */}
      <Marginer>
        <TopAppBar className={containersize} />
      </Marginer>
      <div className="flex items-center justify-center mt-20 ">
        <Description />
      </div>
      <div className="mt-14 bg-transparent">
        <Screen />
      </div>
      <div className="mt-24 flex items-center justify-center">
        <Companies />
      </div>
      <div className="flex items-center justify-center  mt-10">
        <Product />
      </div>

      {/* Part Two */}
      <div
        className="flex justify-center items-center mt-40 p-4"
        style={{
          transform: "translateX(-15px)",
          width: "100vw",
          background: "linear-gradient(to bottom, #121212 50%, #000000 100%)",
        }}
      >
        <div className="mt-40">
          <Direction/>
        </div>
      </div>
    </div>
  );
}
