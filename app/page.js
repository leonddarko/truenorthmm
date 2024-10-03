import { ChevronRight, CircleDot, Dot, Link2, MapPinCheck, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const brandImages = [
    { id: 0, image: "1xbet.png" },
    { id: 1, image: "cbg.png" },
    { id: 2, image: "cocacola.png" },
    { id: 3, image: "danone.png" },
    { id: 4, image: "glovo.png" },
    { id: 5, image: "jumia.png" },
    { id: 6, image: "kellogs.png" },
    { id: 7, image: "mastercard.png" },
    { id: 8, image: "mtn.jpg" },
    { id: 9, image: "promasidor.png" },
    { id: 10, image: "shalina.png" },
    { id: 11, image: "societegeneral.png" },
    { id: 12, image: "unilever.png" },
  ];

  const services = [
    {
      id: 0,
      heading: "Media Monitoring",
      list: [
        "Always-On Monitoring Platform",
        "AI-Enabled Real-time Reporting",
        "21 Countries",
        "1000+ Radio & TV Stations Monitored Daily",
      ],
      link: "/media-monitoring",
    },
    {
      id: 1,
      heading: "Audience Measurement",
      list: [
        "Recall Measurements",
        "All Media and Product survey (AMPS)",
        "TV Audience Measurement (TAM)",
        "Radio Audience Measurement (RAM)",
      ],
      link: "/audience-measurement",
    },
    {
      id: 2,
      heading: "Consumer Journeys",
      list: [
        "Smart Survey",
        "(CAPI, CATI & CAWI)",
        "Brand Health Tracker (BHT)",
        "Usage and Attitude Studies",
      ],
      link: "/consumer-journeys",
    },
  ];

  const coverage = [
    { id: 0, country: "Benin" },
    { id: 1, country: "Burkina Faso" },
    { id: 2, country: "Cameroon" },
    { id: 3, country: "Chad" },
    { id: 4, country: "Congo" },
    { id: 5, country: "Côte d'Ivoire" },
    { id: 6, country: "Gambia" },
    { id: 7, country: "Ghana" },
    { id: 8, country: "Guinea" },
    { id: 9, country: "Kenya" },
    { id: 10, country: "Madagascar" },
    { id: 11, country: "Mali" },
    { id: 12, country: "Mauritania" },
    { id: 13, country: "Niger" },
    { id: 14, country: "Nigeria" },
    { id: 15, country: "Senegal" },
    { id: 16, country: "Sierra Leone" },
    { id: 17, country: "Togo" },
    { id: 18, country: "Uganda" },
    { id: 19, country: "Zambia" },
  ];
  return (
    <>
      {/* Header */}
      <div
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
      </div>
      {/* Header */}

      {/* Brands  */}
      <div className="px-6 md:px-16 py-8">
        <h2 className="font-notoserif text-black/30 text-xl font-medium text-center pb-2">
          Brands That Trust Us
        </h2>

        <div className="hidden md:flex justify-center gap-8 ">
          {brandImages.map((item) => (
            <div key={item.id}>
              <Image
                className="inline-block"
                src={`/assets/brands/${item.image}`}
                width={66}
                height={66}
                alt="brandlogo"
              />
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="carousel carousel-center rounded-box space-x-4 p-4">
            {brandImages.map((item) => (
              <div key={item.id} className="carousel-item">
                <Image
                  className="inline-block"
                  src={`/assets/brands/${item.image}`}
                  width={66}
                  height={66}
                  alt="brandlogo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Brands  */}

      {/* Services  */}
      <div className="px-6 md:px-16 pb-10">
        <h2 className=" text-army-green font-notoserif font-bold text-3xl m-auto text-center max-w-md">
          Unlocking insights and driving growth through data-driven solutions.
        </h2>

        <div className="flex flex-col items-center md:flex-row justify-center flex-wrap gap-6 my-10">
          {services.map((item) => (
            <div
              key={item.id}
              className=" relative rounded-xl shadow-md bg-[url('/assets/mediamonitoringbg.jpeg')] bg-no-repeat bg-cover bg-bottom border"
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
                <Link href={item.link}>
                  <div className="absolute top-5 -right-5 p-2 rounded-full bg-white hover:bg-zinc-200 shadow -rotate-3">
                    <SquareArrowOutUpRight size={20} className=" text-army-green" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Services  */}

      <div className="px-6 md:px-16 py-10">
        <div className="flex justify-start items-center gap-3 mb-10">
          <div className="p-3 rounded-full bg-zinc-200 shadow">
            {/* <div className="w-1.5 h-1.5 rounded-full bg-green-800 transition ease-in" /> */}
            <MapPinCheck size={15} className="text-army-green" />
          </div>
          <span className=" text-black/50 font-notoserif font-semibold">
            Media Monitoring Coverage
          </span>
          <ChevronRight size={15} className="text-army-green" />
        </div>

        <div className="my-5 flex flex-wrap justify-center items-center gap-4">
          {coverage.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-zinc-200 shadow">
                <div className="w-1 h-1 rounded-full bg-army-green transition ease-in" />
              </div>
              <span className="text-black text-sm font-notosans font-medium">
                {item.country}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-around items-center gap-5">
          <h1 className=" font-notoserif font-bold text-4xl md:text-5xl text-black">
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
    </>
  );
}
