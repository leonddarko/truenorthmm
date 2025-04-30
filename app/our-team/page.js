import Link from "next/link";
import Image from "next/image";
import { Users } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="mt-20 w-full h-72 bg-[url('/assets/mediamonitoringbg.jpeg')] bg-no-repeat bg-cover bg-center shadow" />
      <div className="px-6 md:px-16 py-10">

        {/* Breadcrumbs */}
        <div className="breadcrumbs text-sm">
          <ul className="text-black">
            <li>
              <Link className="" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/our-team" className="font-bold">
                Our Team
              </Link>
            </li>
          </ul>
        </div>
        {/* Breadcrumbs */}


        <div className="md:px-16 text-center">
          <i className="fa fa-users text-black m-auto"></i>
          <h1 className="font-notoserif font-bold text-black text-5xl">
            Meet Our Team
          </h1>
          <div className="max-w-xl m-auto font-notosans font-normal text-sm text-black/70 mb-10">
            {/* <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum auctor
              bibendum iaculis viverra adipiscing. Eros aenean consequat auctor
              inceptos, mi class.
            </p> */}
          </div>

          <Image
            className="rounded-full m-auto z-10 relative"
            src="/assets/team/mradams.PNG"
            alt="Mr Adams, Akinwale"
            width={250}
            height={250}
          />

          <div className="rounded-2xl px-16 py-32 bg-zinc-50 relative -top-24 shadow-md">
            <div className=" font-notoserif font-normal text-xs text-black/50">
              Managing Principal
            </div>
            <h1 className=" font-notoserif font-bold text-black text-4xl">
              Akinwale Adams
            </h1>
            <div className=" font-notosans font-normal text-sm text-black">
              MBA, PMP	15+ years in Media Monitoring & Start-Up Growth
            </div>

            <Link className="my-2 inline-block" href="https://www.linkedin.com/in/adams-akinwaleola-54879b31/" target="_blank">
              <i className="fab fa-linkedin-in text-army-green"></i>
            </Link>

            <p className="font-notosans font-normal text-black mb-2.5">
              Akinwale Adams is a Serial Entrepreneur who is never afraid to
              start something new. A firm believer of the Ubuntu Philosophy,
              Social Democrat and Technophile. With 15+ years of work
              experience covering Business Development, Go to Market Strategy
              Development and Execution, Media and Marketing Research, Media
              Monitoring and General Management, he has extensive experience
              across West & Central Africa building businesses from scratch.
            </p>

            <p className="font-notosans font-normal text-black mb-2.5">
              Founder and Managing Partner, ForteCate, Co-Founder & Group
              Managing Director, Maverick Media Monitoring. Prior to this
              role, Adams led Media Trak Chana, as well as Media Monitoring
              Services Ltd. (Ghana & Cote d&apos;Ivoire) delivering monthly
              Media Compliance & Evaluation for brands as well as Audience
              Measurement data cum products survey for the markets.
            </p>

            <p className="font-notosans font-normal text-sm text-black">
              Adams is a member of the Nigerian Institute of Management (NIM)
              & Chartered Institute of Marketing Ghana (CIMG). He holds an MBA
              specializing in Marketing management from LAUTECH, Nigeria.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
