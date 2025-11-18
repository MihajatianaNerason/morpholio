import Image from "next/image";

export default function AnnualSection() {
  return (
    <div>
      <div className="flex flex-col gap-10 items-center px-10 pt-11 pb-32">
        <p>33RD ANNUAL LANTERN FESTIVAL</p>
        <h3 className="text-5xl text-center font-semibold">
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
          className="w-full h-[600px]"
        />
      </div>
    </div>
  );
}
