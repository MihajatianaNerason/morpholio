import Image from "next/image";
import sunHead from "../../../public/images/sun_head.png";
import badge from "../../../public/images/Badge.png";
import { playfair } from "@/public/fonts/config/config";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen">
      <header className="flex justify-between h-[138px] p-6">
        <div>
          <h2 className="text-[#FBEAD6] text-[24px] font-bold bg-black/80 px-2 py-1">
            CREST MIDDLE
          </h2>
        </div>
        <div>
          <h2 className="text-[#FBEAD6] text-[24px] font-bold bg-black/80 px-2 py-1">
            CONTACT US
          </h2>
        </div>
      </header>
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image src={sunHead} alt="Hero Image" width={500} height={300} />
          <Image
            src={badge}
            alt="Hero Image"
            width={500}
            height={300}
            className="w-[197px] h-[197px] absolute -right-[150px] -bottom-6"
          />
        </div>
      </div>
      <div className="mt-6 p-10">
        <div>
          <h1
            className={`text-center ${playfair.className} font-extrabold text-[150px] leading-[140px]`}
          >
            PAPIER <br /> LANTERNS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
