import Marginer from "@/components/common/marginer";
import Companies from "@/components/companies/companies";
import Description from "@/components/description/description";
import Product from "@/components/product/product";
import Screen from "@/components/screen/screen";
import TopAppBar from "@/components/topappbar/TopAppBar";
import { containersize } from "@/constants";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Marginer>
        <TopAppBar className={containersize} />
      </Marginer>
      <div className="flex items-center justify-center mt-20 ">
        <Description />
      </div>
      <div className="mt-14 bg-transparent">
        <Screen />
      </div >
      <div className="mt-24 flex items-center justify-center">
        <Companies />
      </div>
      <div className="flex items-center justify-center ">
        <Product/>
      </div>
    </div>
  );
}

