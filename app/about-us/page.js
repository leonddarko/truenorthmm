import Image from "next/image";
import Link from "next/link";
import { Dot } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="mt-20 px-6 md:px-16 py-10">
        <div className="breadcrumbs text-sm">
          <ul className="text-black">
            <li>
              <Link className="" href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us" className="font-bold">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="md:px-16 text-center">
          <Image
            className=" m-auto"
            src="/TrueNorthLogoSq1.jpg"
            alt="Maverick Research Logo"
            width={30}
            height={30}
          />
          <span className="text-xs font-black text-black/60 font-notosans">
            TRUE NORTH MEDIA MONITORING LTD
          </span>
          <h1 className="text-5xl md:text-7xl font-notoserif font-semibold text-black">
            We are a technology-oriented <br /> Measurement and Media Monitoring
            company…
          </h1>

          <p className="mt-5 text-xl md:text-2xl text-black font-notosans">
            Maverick is an emerging leader in the global market research & media
            monitoring industry, with expertise in Ghana and the West Africa
            sub-region. We stand apart from the competition by harnessing the
            power of Artificial Intelligence and other cutting edge technologies
            in addition to the best minds in the industry to provide you with
            real-time insights for your business.
          </p>
        </div>
      </div>

      <div className="w-full h-72 bg-[url('/assets/mediamonitoringbg.jpeg')] bg-no-repeat bg-cover bg-center shadow mb-10" />

      <div className="px-6 md:px-16 mb-20">
        <div className="md:px-16 text-center">
          <p className="text-black/70 font-notosans">
            With 80+ years of combined experience across Ghana & West Africa in
            media and market research, marketing communications, brand
            management and strategy;
          </p>

          <p className="mt-2.5  text-black font-notosans font-black">
            We use media and market research to deliver INSIGHTS.
          </p>
          <p className="mt-2.5  text-black font-notosans font-black">
            We empower clients to EXECUTE with data driven insights.
          </p>
          <p className="mt-2.5  text-black font-notosans font-black">
            We measure the IMPACT on performance in real time across West and
            East Africa.
          </p>
          <p className="mt-5 text-black/70 font-notosans">
            Maverick is an independent media monitoring company, auditing the
            broadcast of all media Digital & Traditional (Radio, Television,
            Prints, Outdoor, Online and Social Media). We are a full
            technology-driven organization providing data in a searchable and
            archival format with the benefit of self- analysis.
          </p>

          <Dot size={50} className="text-green-800 my-2.5 mx-auto" />

          <h2 className="text-black text-xl md:text-2xl font-notoserif font-bold max-w-2xl mx-auto text-center">
            Our mission is to create the hub/repertoire of CREDIBLE, PROMPT,
            FOOLPROOF data and insight to drive better business decisions and
            performance across Africa.
          </h2>
          <div className="flex flex-wrap justify-around mt-5">
            <div className=" text-center md:text-right">
              <span className="text-xs font-black text-black/80 font-notosans">
                OUR VISION
              </span>
              <p className="max-w-md text-black/70 font-notosans">
                To become Africa&apos;s most credible source of media/marketing
                data and insight to drive better business ROI
              </p>
            </div>

            <div className="text-center md:text-left">
              <span className="text-xs font-black text-black/80 font-notosans">
                OUR VALUES
              </span>
              <p className="max-w-md text-black/70 font-notosans">
                Our goal is to fulfill every client demand in the most unique,
                efficient, accurate and most credible and in a timely manner to
                the best of our ability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
