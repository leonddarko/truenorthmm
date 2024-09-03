import { Mail, SendHorizonal } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialicons = [
    {
      id: 0,
      icon: "fab fa-linkedin-in",
    },
    {
      id: 1,
      icon: "fab fa-instagram",
    },
    {
      id: 2,
      icon: "fab fa-facebook-f",
    },
  ];
  return (
    <div className="flex flex-col flex-wrap md:flex-row justify-between items-center md:items-start px-6 md:px-16 py-10 bg-black/90 gap-10">
      <div className="flex items-center">
        <div className="text-center md:text-left">
          <div className="mb-8">
            <p className="font-extrabold font-notoserif text-sm text-white mb-1.5">
              NEWSLETTER
            </p>
            <p className="font-notosans font-light text-xs text-white/50  max-w-xs mb-4">
              Enter your e-mail address and subscribe to our newsletter.
            </p>

            <label className="input flex items-center gap-2 bg-white rounded-full shadow-sm">
              {/* <Mail size={20} className="text-green-800" /> */}
              <input
                type="text"
                className="grow text-black"
                placeholder="Email"
              />
              <button className="btn bg-black/90 text-white btn-sm rounded-full">
                <SendHorizonal size={15} />
              </button>
            </label>
          </div>

          <p className="font-bold font-notoserif text-md text-white">
            TRUE NORTH MEDIA <br /> MONITORING LTD
          </p>
          <span className="text-xs text-white/30">
            Copyright © {new Date().getFullYear()} - All right reserved
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        <div className="flex flex-col gap-2.5 text-white text-center md:text-left">
          <h6 className="font-extrabold font-notoserif text-md">SERVICES</h6>
          <Link href="/media-monitoring">
            <p className=" font-notosans font-light text-xs hover:underline">
              Media Monitoring
            </p>
          </Link>
          <Link href="/audience-measurement">
            <p className=" font-notosans font-light text-xs hover:underline">
              Audience Measurement
            </p>
          </Link>

          <Link href="/consumer-journeys">
            <p className=" font-notosans font-light text-xs hover:underline">
              Consumer Journeys
            </p>
          </Link>
        </div>

        <div className="flex flex-col gap-2.5 text-white text-center md:text-left">
          <h6 className="font-extrabold font-notoserif text-md">COMPANY</h6>
          <Link href="/about-us">
            <p className=" font-notosans font-light text-xs hover:underline">
              About Us
            </p>
          </Link>
          <Link href="/faqs">
            <p className=" font-notosans font-light text-xs hover:underline">
              FAQs
            </p>
          </Link>
          <Link href="/our-team">
            <p className=" font-notosans font-light text-xs hover:underline">
              Our Team
            </p>
          </Link>
        </div>

        <div className="flex flex-col gap-2.5 text-white text-center md:text-left">
          <h6 className="font-extrabold font-notoserif text-md">CONTACT US</h6>
          <p className=" font-notosans font-light text-xs">7 Okantar Ankrah</p>
          <p className=" font-notosans font-light text-xs mb-2.5">
            Chantan, Accra
          </p>

          <p className=" font-notosans font-light text-xs">
            (+233) 541 180 487
          </p>
          <p className=" font-notosans font-light text-xs">
            info@truenorthmonitoring.com
          </p>
          {/* <p className=" font-notosans font-light text-xs">
            FAQs
          </p> */}
        </div>
        <div className="flex justify-between items-center gap-5">
          {socialicons.map((item) => (
            <div key={item.id}>
              <i className={`${item.icon} text-army-green`}></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
