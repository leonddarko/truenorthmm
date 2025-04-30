import { MapPinCheck, MoveUpRight, RadioTower, AppWindowMac, MonitorCheck, Dot, MoveRight, MonitorCog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { brandImages, services, coverage } from "./lib/data";
import EmblaCarousel from "./ui/carousel";
import AutoEmblaCarousel from "./ui/autocarousel";

export default function Home() {

  const insightsstrategy = [
    {
      id: 0,
      icon: RadioTower,
      strategy: "Ads played on TV and Radio",
    },
    {
      id: 1,
      icon: MonitorCog,
      strategy: "True North platform monitoring real-time and providing competitor intelligence, compliance and ad-spend"
    },
    {
      id: 2,
      icon: MonitorCheck,
      strategy: "Client receives daily view of category-relevant ads and insights for on-time strategy building"
    }
  ]

  return (
    <>
      {/* Header */}
      {/* <div
        className="px-6 md:px-16 pb-16 h-screen flex justify-start items-end z-0 bg-black
      bg-[url('/assets/mediamonitoringbg.jpeg')] bg-no-repeat bg-cover bg-top rounded-b-3xl shadow"
      >
        <div>
          <h1 className="text-white font-notoserif text-5xl md:text-7xl font-bold max-w-3xl">
            Monitoring. Evaluation and Measurement.
          </h1>
          <p className="text-white font-notosans font-medium">
            Right on time, the first time.
          </p>
        </div>
      </div> */}
      {/* Header */}

      <AutoEmblaCarousel />

      {/* Brands  */}
      <div className="px-6 md:px-16 py-8">
        <h2 className="font-notoserif text-black/30 text-xl font-medium text-center pb-2">
          Brands That Trust Us
        </h2>

        <EmblaCarousel />

      </div>
      {/* Brands  */}

      {/* Services  */}
      <div className="px-6 md:px-16 pb-10">
        <h2 className=" text-army-green font-notoserif font-bold text-3xl m-auto text-center max-w-md">
          Unlocking insights and driving growth through data-driven solutions.
        </h2>

        <div className="flex flex-col items-center md:flex-row justify-center flex-wrap gap-6 my-10">

          {services.map((item) => (
            <Link key={item.id} href={item.link}>
              <div
                className=" relative rounded-xl shadow-md bg-[url('/assets/mediamonitoringbg.jpeg')] bg-no-repeat bg-cover bg-bottom border hover:-rotate-3 transition-all"
              >
                {/* border border-l-green-800 */}
                <div className="rounded-t-lg p-5 bg-white/85">
                  <h1 className=" font-notoserif font-black text-black text-3xl">
                    {item.heading}
                  </h1>
                </div>
                <div className="p-5 bg-white rounded-b-lg border border-gray-200">
                  {item.list.map((item) => (
                    <p
                      key={item}
                      className=" font-notosans font-medium text-black"
                    >
                      {item}
                    </p>
                  ))}
                  <div className="absolute top-5 -right-5 p-2 rounded-full bg-white hover:bg-zinc-200 shadow -rotate-3">
                    <MoveUpRight size={20} className=" text-army-green" />
                  </div>
                </div>
              </div>
            </Link>

          ))}
        </div>
      </div>
      {/* Services  */}

      <div className="px-6 md:px-16 py-10">
        <div className="flex flex-col justify-center items-center gap-3 mb-8">
          <div className="p-3 rounded-full bg-zinc-200 shadow animate-bounce">
            {/* <div className="w-1.5 h-1.5 rounded-full bg-green-800 transition ease-in" /> */}
            <MapPinCheck size={15} className="text-army-green" />
          </div>
          <span className=" text-black/50 font-notoserif font-semibold">
            Media Monitoring Coverage
          </span>
        </div>

        <div className="my-5 flex flex-wrap justify-center items-center gap-4 mb-8">
          {coverage.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-zinc-200 shadow">
                <div className="w-1 h-1 rounded-full bg-army-green transition ease-in animate-ping" />
              </div>
              <span className="text-black text-sm font-notosans font-medium">
                {item.country}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-around items-center gap-5">
          <h1 className=" font-notoserif font-bold text-4xl md:text-5xl text-black text-center md:text-left">
            Our <br /> Media Monitoring
            <br />
            Footprint in Africa
          </h1>
          <Image
            src="/assets/MapChart_Africa.png"
            width={700}
            height={700}
            alt="Map of Africa"
          />
        </div>
      </div>

      <div className="px-6 md:px-16 pb-10 my-40">
        <h2 className=" text-black/50 font-notoserif font-medium m-auto text-center max-w-md">
          Unparalleled Market Insight Delivered In Seconds.
        </h2>

        <div className="flex flex-col items-center md:flex-row justify-center flex-wrap gap-6 my-10">

          {insightsstrategy.map((item, index) => (
            <>
              <div key={item.id} className="flex justify-center items-center">
                <div className="p-3 bg-army-green rounded-full flex justify-center items-center z-10">
                  <item.icon size={20} className="text-white" />
                </div>
                <div className=" flex justify-center items-center text-center relative right-4 text-xl shadow-sm bg-zinc-50 text-black font-notosans font-medium max-w-52 h-62 p-6 rounded-2xl">
                  {item.strategy}
                </div>
                {index !== insightsstrategy.length - 1 && (
                    <MoveRight size={30} className="text-black" />
                )}
              </div>
            </>
          ))}


        </div>

      </div>
    </>
  );
}
