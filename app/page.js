import Marginer from "@/components/common/marginer";
import Description from "@/components/description/description";
import Screen from "@/components/screen/screen";
import TopAppBar from "@/components/topappbar/TopAppBar";
import { containersize } from "@/constants";

export default function Home() {
  return (
    <div>
      <Marginer>
        <TopAppBar className={containersize} />
      </Marginer>
      <div className="flex items-center justify-center mt-14">
        <Description />
      </div>
      <div>
        <Screen />
      </div>
    </div>
  );
}
