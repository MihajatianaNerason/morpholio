import Image from "next/image";

export default function AnnualSection() {
  return (
    <div>
      <div className="flex flex-col gap-10 items-center px-10 pt-11 pb-32">
        <p>33RD ANNUAL LANTERN FESTIVAL</p>
        <h3 className="text-3xl  text-center font-semibold md:text-5xlv">
          We invite you to our enchanting festival, where light, creativity, and
          tradition come together to illuminate the night sky in a breathtaking
          celebration of culture and artistry.
        </h3>
      </div>

      <div className="flex justify-center px-10 h-[750px]">
        <Image
          src={"/images/annual.png"}
          alt="Annual image"
          width={1200}
          height={600}
          className="w-full h-[600px] hidden lg:block"
        />

        <Image
          src={"/images/mid_annual.png"}
          alt="Annual image"
          width={800}
          height={500}
          className="w-[720px] h-[600px] hidden md:block lg:hidden"
        />

        <Image
          src={"/images/small_annual.png"}
          alt="Annual image"
          width={600}
          height={300}
          className="w-[295px] h-[600px] block md:hidden"
        />
      </div>
    </div>
  );
}
