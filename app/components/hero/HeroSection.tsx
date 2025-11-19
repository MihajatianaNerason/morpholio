import Image from "next/image";
import sunHead from "../../../public/images/sun_head.png";
import sunHeadMobile from "../../../public/images/sun_head_mobil.png";
import badge from "../../../public/images/Badge.png";
import badge2 from "../../../public/images/Badge-2.png";
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
          <Image
            src={sunHead}
            alt="Hero Image"
            width={500}
            height={300}
            className="hidden md:block"
          />
          <Image
            src={sunHeadMobile}
            alt="Hero Image"
            width={400}
            height={200}
            className="md:hidden"
          />
          <Image
            src={badge}
            alt="Hero Image"
            width={400}
            height={200}
            className="w-[197px] h-[197px] absolute -right-[100px] lg:-right-[150px] -bottom-6 md:block hidden"
          />
          <Image
            src={badge2}
            alt="Hero Image"
            width={200}
            height={100}
            className="w-[100px] h-[100px] absolute right-0 -bottom-6 md:hidden "
          />
        </div>
      </div>
      <div className="mt-6">
        <div>
          <h1
            className={`text-center ${playfair.className} text-black/85 scale-y-50 font-extrabold text-[60px] leading-[60px] md:text-[110px] md:leading-[100px] lg:text-[150px] lg:leading-[140px]`}
          >
            PAPIER <br /> LANTERNS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
