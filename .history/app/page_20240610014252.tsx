import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-[0rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
        <Navbar />
        <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem md:w-[35rem]">
          <Temperature />
        </div>
          <div className="flex flex-col"> </div>       
        </div>
    </main>
  );
}
