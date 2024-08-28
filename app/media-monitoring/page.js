import {
  CircleAlert,
  ChartColumnStacked,
  ChartLine,
  BookOpenText,
  Dot,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "../ui/breadcrumbs";

export default function Page() {
  const capabilities = [
    {
      id: 0,
      icon: CircleAlert,
      title: "Compliance",
      text: "Compliance Checks to Reduce Mileage losses & Ensure booked spots played as scheduled.",
    },
    {
      id: 1,
      icon: ChartColumnStacked,
      title: "Volume & Value Analysis",
      text: "Actual Ad Ex. & Frequency Analysis in relation to competitions.",
    },
    {
      id: 2,
      icon: ChartLine,
      title: "Impact & Insight",
      text: "Key learnings that stands out and the Takeaways for future planning.",
    },
    {
      id: 3,
      icon: BookOpenText,
      title: "Content & PR",
      text: "Daily Activities that have direct or indirect impact on Brand building efforts.",
    },
  ];
  return (
    <>
      <div className="mt-20">
        <div className="w-full h-72 bg-[url('/assets/mediamonitoringbg.jpeg')] bg-no-repeat bg-cover bg-center shadow" />
        <div className="px-6 md:px-16 my-10 md:my-20">
          <Breadcrumbs />
          <div className="mt-5">
            <h1 className="font-notoserif font-bold text-black text-3xl md:text-5xl max-w-lg">
              Media Monitoring
            </h1>
            <span className=" font-notosans font-normal text-black">
              See More, Do more...
            </span>
          </div>

          <div className="my-5 max-w-4xl font-notosans font-normal text-black/70">
            <p className="mb-2.5">
              Our media monitoring platform provides unparalleled insights into
              the media landscape, enabling our partners to stay ahead of the
              competition in a fast-changing market.
            </p>

            <p className="mb-2.5">
              We provide comprehensive monitoring of traditional and digital
              media including print, television, radio, OOH and online
              platforms.
            </p>

            <p className="mb-5">
              Our team of experienced analysts deliver accurate and timely data,
              enabling our partners to make informed decisions and optimize
              their media strategies.
            </p>

            <button className="btn-sm bg-army-green rounded-full transition ease-in-out font-notosans font-semibold text-white flex items-center gap-2 shadow-sm">
              Book A Demo
              <ChevronRight size={15} className=" text-white" />
            </button>
          </div>

          <div className="mt-10 flex flex-col md:flex-row justify-start gap-5">
            {capabilities.map((item) => (
              <div
                key={item.id}
                className="flex justify-start items-center gap-4"
              >
                <item.icon
                  size={40}
                  strokeWidth={1}
                  className="text-green-800"
                />
                <div>
                  <h1 className=" font-notoserif font-bold text-black text-lg">
                    {item.title}
                  </h1>
                  <p className="max-w-sm font-notosans text-black/70">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
