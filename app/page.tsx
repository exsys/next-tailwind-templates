// additional stuff
import { priceCards } from "@/assets/priceCardInfos";

// components
import Container2 from "@/components/containers/container2";
import Container1 from "@/components/containers/container1";
import Hero1 from "@/components/heroes/hero1";
import Socials1 from "@/components/socials/socials1";
import SignIn1 from "@/components/forms/signin1";
import SignUp1 from "@/components/forms/signup1";
import Footer1 from "@/components/footers/footer1";
import Footer2 from "@/components/footers/footer2";
import Header1 from "@/components/headers/header1";
import Web3Header from "@/components/headers/web3-header";
import Header3 from "@/components/headers/header3";
import PriceCard1 from "@/components/cards/priceCard1";
import Sidebar1 from "@/components/sidebars/sidebar1";
import Toggle1 from "@/components/toggles/toggle1";
import InfoPage from "@/components/sections/infopage";
import SkeletonBlock from "@/components/loading/skeletonblock";
import ImageCardSm from "@/components/cards/image-card-sm";
import CharCardSm from "@/components/cards/char-card-sm";
import Glitch from "@/components/effects/glitch";
import GlassCard1 from "@/components/cards/glass-card1";
import GlassCard2 from "@/components/cards/glass-card2";
import Hero2 from "@/components/heroes/hero2";
import Testimonials1 from "@/components/sections/testimonials1";
import Contact1 from "@/components/forms/contact1";
import Contact2 from "@/components/forms/contact2";
import ServiceCard from "@/components/cards/service-card";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import ProjectCard from "@/components/cards/project-card";
import { PROJECTS } from "@/assets/projects";

export default function Home() {
  return (
    <div className="text-black h-full bg-white bg-bottom">
      <div className="w-full h-full relative">
        <Header1 />
        <div className="header-padding flex justify-center">
          <Toggle1 />
        </div>
      </div>
    </div>
  )
}
