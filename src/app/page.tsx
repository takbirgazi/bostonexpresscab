import Hero from "@/components/HomeComponents/Hero/Hero";
import HeroMobile from "@/components/HomeComponents/Hero/HeroMobile";
import HomeContent from "@/components/HomeComponents/HomeContent/HomeContent";
import OurServices from "@/components/HomeComponents/OurServices/OurServices";
import PopularCities from "@/components/HomeComponents/PopularCities/PopularCities";
import Rents from "@/components/HomeComponents/Rents/Rents";
import Reviews from "@/components/HomeComponents/Reviews/Reviews";
import SpecializedFeatures from "@/components/HomeComponents/SpecializedFeatures/SpecializedFeatures";
import 'aos/dist/aos.css';

export const metadata = {
  title: "Boston Express Cab - Logan Airport Car & Taxi Service | Boston Taxi",
  description:
    "Call Boston Carb at +16172306362 and book your affordable Logan Airport taxi/Boston car service and Boston cab service with child seats. We have been providing the most trusted and reliable taxi service in Boston, MA.",
  keywords:
    "boston taxi service,boston airport taxi,car service to logan, airport car boston,boston car service, boston taxi, airport minivan service,airport shuttle boston,boston airport transportation",
};

export default function Home() {
  return (
    <div className="bg-[#ffffff]">
      <div className="hidden md:block">
        <Hero />
      </div>
      <div className="md:hidden block">
        <HeroMobile />
      </div>
      <div className="max-w-[1250px] mx-auto px-4">
        <HomeContent />
        <OurServices />
        <SpecializedFeatures />
      </div>
      <PopularCities />
      <div className="max-w-[1250px] mx-auto px-4">
        <Reviews />
        <Rents />
      </div>
    </div>
  );
}
