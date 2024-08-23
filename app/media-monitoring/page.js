import {
  CircleAlert,
  ChartColumnStacked,
  ChartLine,
  BookOpenText,
  Dot
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  const capabilities = [
    {
      id: 0,
      icon: "CircleAlert",
      title: "Compliance",
      text: "Compliance Checks to Reduce Mileage losses & Ensure booked spots played as scheduled.",
    },
    {
      id: 1,
      icon: "ChartColumnStacked",
      title: "Volume & Value Analysis",
      text: "Actual Ad Ex. & Frequency Analysis in relation to competitions.",
    },
    {
      id: 2,
      icon: "ChartLine",
      title: "Impact & Insight",
      text: "Key learnings that stands out and the Takeaways for future planning.",
    },
    {
      id: 3,
      icon: "BookOpenText",
      title: "Content & PR",
      text: "Daily Activities that have direct or indirect impact on Brand building efforts.",
    },
  ];
  return (
    <>
      <div className="mt-20">
        <div className="w-full h-72 bg-[url('/assets/mediamonitoringbg.jpeg')] bg-no-repeat bg-cover bg-center shadow mb-10" />
        <div className="px-6 md:px-16 mb-20">
          <div className="breadcrumbs text-sm">
            <ul className="text-black">
              <li>
                <Link className="" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/media-monitoring"
                  className="font-bold flex justify-center items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-800 transition ease-in" />
                  <span>Media Monitoring</span>
                </Link>
              </li>
            </ul>
          </div>
          <h1 className="font-notoserif font-bold text-black/50 text-3xl md:text-5xl max-w-lg">
            Media Monitoring
          </h1>
          <div className="my-10 flex justify-start gap-5">
            {capabilities.map((item) => (
              <div
                key={item.id}
                className="flex justify-start items-center gap-4"
              >
                <Dot
                  size={35}
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
