// additional stuff
import { priceCards } from "@/assets/priceCardInfos";

// components
import Container2 from "@/components/containers/container2";
import Container1 from "@/components/containers/container1";
import Hero1 from "@/components/heroes/hero1";
import Socials1 from "@/components/socialbuttons/socials1";
import Form1 from "@/components/forms/form1";
import Form2 from "@/components/forms/form2";
import Footer1 from "@/components/footers/footer1";
import Footer2 from "@/components/footers/footer2";
import Header1 from "@/components/headers/header1";
import Header2 from "@/components/headers/header2";
import Header3 from "@/components/headers/header3";
import PriceCard1 from "@/components/cards/priceCard1";
import Sidebar1 from "@/components/sidebars/sidebar1";
import Toggle1 from "@/components/toggles/toggle1";
import InfoPage from "@/components/sections/infopage";
import SkeletonBlock from "@/components/loading/skeletonblock";
import ImageCardSm from "@/components/cards/image-card-sm";
import CharCardSm from "@/components/cards/char-card";
import Glitch from "@/components/cards/glitch";

export default function Home() {
  return (
    <div className="text-black h-full bg-white">

      <div className="w-full h-full relative">
        <Header1 />
        <div className="h-full flex justify-center items-center">
          <Glitch src="/images/char1.png" width={300} height={389} />
        </div>
      </div>
    </div>
  )
}
