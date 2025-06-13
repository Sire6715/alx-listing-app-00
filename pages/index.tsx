import Pills from "@/components/common/Pills";
import Card from "@/components/common/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { Quicksand } from "next/font/google";
import Hero from "@/components/common/Hero";


const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export default function Home() {
  return (
    <div className={quicksand.className}>
      <div className=" flex justify-start items-center ml-4 py-4 px-4 overflow-x-auto no-scrollbar">
        <Pills
          pillText={[
            "All",
            "Top Villa",
            "Free Reschedule",
            "Book Now Pay Later",
            "Best Price Guarantee",
            "Self CheckIn",
            "Instant Book",
          ]}
          style={
            "text-[13.78px] leading-[13px] px-8 py-2 rounded-full mr-2 mb-2 pill_style "
          }
        />
      </div>

      <div className="Hero w-full flex justify-center items-center">
        <Hero />
      </div>

      
      <div className="">
        <Card property={PROPERTYLISTINGSAMPLE} />
      </div>
      
    </div>
  );
}
