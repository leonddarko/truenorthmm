import { Users2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="mt-20 px-6 md:px-16 py-10">
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
        <div className="md:px-16 text-center">
          <Users2 size={15} className="text-black/50 m-auto" />
          <h1 className="font-notoserif font-bold text-black text-5xl">
            Meet Our Team
          </h1>
          <div className="max-w-xl m-auto font-notosans font-normal text-sm text-black/70">
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum auctor
              bibendum iaculis viverra adipiscing. Eros aenean consequat auctor
              inceptos, mi class.{" "}
            </p>
          </div>

          <div className="my-10">
            <Image
              className="rounded shadow-lg m-auto"
              src="/assets/team/akinwale.png"
              alt="Maverick Research Logo"
              width={250}
              height={250}
            />

            <div className="mt-5">
              <span className=" font-notoserif font-normal text-sm text-black">
                Managing Principal
              </span>
              <h1 className=" font-notoserif font-bold text-black text-4xl">
                Akinwale Adams
              </h1>

              <div className="flex justify-center items-center gap-4 my-2">
                <Link href="https://www.linkedin.com/" target="_blank">
                  <i className="fab fa-linkedin-in text-army-green transition-all"></i>
                </Link>
                <Link
                  href="mailto:info@truenorthmonitoring.com"
                  target="_blank"
                >
                  <i className="fa fa-envelope text-army-green transition-all"></i>
                </Link>
              </div>

              <p className="font-notosans font-normal text-black mb-2.5">
                Akinwale Adams is a Serial Entrepreneur who is never afraid to
                start something new. A firm believer of the Ubuntu Philosophy,
                Social Democrat and Technophile. With 14+ years of work
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
      </div>
    </>
  );
}
