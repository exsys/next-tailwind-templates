import Container2 from "@/components/sections/container2";
import Container1 from "@/components/sections/containers1";
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

import { priceCards } from "@/assets/priceCardInfos";

export default function Home() {
  return (
    <div className="text-white">
      <Header3 />
      <PriceCard1 priceCard={priceCards[0]} />
    </div>
  )
}
