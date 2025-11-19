import { playfair } from "@/public/fonts/config/config";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#7AA4AD] p-10 flex flex-col items-center gap-44">
      <div className="w-full md:px-2.5 flex flex-col gap-20 md:flex-row md:justify-between">
        <div className="font-bold">
          <p>Westwood Crest Middle School</p>
          <p>2415 Candyland Lane</p>
          <p>Los Angeles, CA 90025</p>
        </div>
        <div className="font-bold">
          <p>PAPER LANTERNS &copy; 2025</p>
          <p>HELLO@MOOD.COM</p>
          <p>646.555.1234</p>
        </div>
        <div className="flex gap-3">
          <Facebook fill="black" />
          <Instagram />
        </div>
      </div>
      <div>
        <h2
          className={`text-[#FBEAD6] ${playfair.className} text-7xl font-extrabold text-center scale-y-50 md:text-[180px] `}
        >
          PAPER <br /> LANTERNS
        </h2>
      </div>
    </div>
  );
}
