// additional stuff
import { priceCards } from "@/assets/priceCardInfos";

// components
import Container2 from "@/components/sections/container2";
import Container1 from "@/components/sections/container1";
import Hero1 from "@/components/sections/hero1";
import Socials1 from "@/components/design/socials1";
import Form1 from "@/components/forms/form1";
import Form2 from "@/components/forms/form2";
import Footer1 from "@/components/layout/footer1";
import Footer2 from "@/components/layout/footer2";
import Header1 from "@/components/layout/header1";
import Header2 from "@/components/layout/header2";
import Header3 from "@/components/layout/header3";
import PriceCard1 from "@/components/design/priceCard1";
import Sidebar1 from "@/components/layout/sidebar1";
import Toggle1 from "@/components/utilities/toggle1";
import InfoPage from "@/components/sections/infopage";
import SkeletonBlock from "@/components/layout/skeletonblock";

export default function Home() {
  return (
    <div className="text-white h-full">
      
      <div className="w-full h-full relative">
        <Header1 />
        <SkeletonBlock />
      </div>
    </div>
  )
}
