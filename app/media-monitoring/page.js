import {
  CircleAlert,
  ChartColumnStacked,
  ChartLine,
  BookOpenText,
  Dot,
  ChevronRight,
  MonitorCheck,
  CheckCircle,
  BrainCircuit,
  ChartBarBig,
} from "lucide-react";
import Breadcrumbs from "../ui/breadcrumbs";
import Image from "next/image";


export default function Page() {

  const questions = [
    {
      id: 0,
      q1: "How do I engage all available facilities and avenues to deliver the highest values to my clients / brands?",
      q2: "How do I justify the value for money spent on marketing communication?",
      title: "Manage",
    },
    {
      id: 1,
      q1: "How do I confirm that media houses are respecting the rules of their licenses?",
      q2: "How can I confirm that my campaign actually met the objectives of the plan?",
      title: "Control",
    },
    {
      id: 2,
      q1: "How do I know and harness emerging opportunities?",
      q2: "How do I know what my competitors are doing  to enable me strategize effectively?",
      title: "Explore",
    },
  ]

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

  const capabilitiesII = [
    {
      id: 0,
      icon: MonitorCheck,
      title: "AD Verification",
      text: "Updated daily and viewable on our portal, As-Run Log shows exactly when and where your spots aired on a daily basis.",
    },
    {
      id: 1,
      icon: CheckCircle,
      title: "AD Reconciliation & Compliance",
      text: "Proof-of-performance audits of your ad buys to document media compliance with your instructions for live reads/ad libs, sponsorship credits, correct use of scripts and creatives or any programming detail.",
    },
    {
      id: 2,
      icon: BrainCircuit,
      title: "Competitor Intelligence",
      text: "With results updated daily, Spot-check reports give you a current view of any brand's share of spending or activity within its product category.",
    },
    {
      id: 3,
      icon: ChartBarBig,
      title: "Category Deep Dive",
      text: "Category-level insight and analysis of competitor ad placement, spending, media mix, and messaging. The most direct and cost-effective way to get a macro view of a product category's competitive landscape.",
    },
    {
      id: 4,
      icon: BookOpenText,
      title: "Brand Tracking & Measurement",
      text: "Never be caught off guard by breaking news. Our media alerts and BAR sends instant alerts or daily compilations of all your media mentions and that of competitors (Solicited and Unsolicited). We also archive your media content to a passworded archive daily.",
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

          <div className="my-5 font-notosans font-normal text-black/70
          flex justify-between items-center
          ">
            <div className="max-w-4xl">
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
            </div>

            <Image
              className=" opacity-10 hidden md:block"
              src="/TrueNorthLogoSq.jpg"
              width={180}
              height={180}
              alt="True North Logo"
            />
            {/* <button className="btn-sm bg-army-green rounded-full transition ease-in-out font-notosans font-semibold text-white flex items-center gap-2 shadow-sm">
              Book A Demo
              <ChevronRight size={15} className=" text-white" />
            </button> */}
          </div>


          <div className="mt-20">

            <div className="flex justify-center">
              <div className="max-w-sm text-center">
                <div className="text-black/70 font-notoserif font-medium ">
                  Measure, Monitor & Maximize Your Media Investment across WEC - Africa
                </div>
                <span className=" text-xs text-red-700 font-medium">Your one stop shop for </span>
                <div className="font-bold text-black text-lg font-notoserif">
                  RADIO, TV, OOH, PRESS & DIGITAL
                </div>
              </div>
            </div>

            {/* <div className=" bg-black w-1 h-1 rounded-full my-2.5" /> */}

            <div className="mt-10 flex flex-wrap flex-col md:flex-row justify-between gap-5">

              {questions && questions.map((item) => (
                <>
                  <div key={item.id} className="flex justify-end items-center gap-5">
                    <ChevronRight
                      size={20}
                      className="text-red-700"
                    />
                    <span className="text-xs text-black/70">{item.title}</span>

                    <div className="flex justify-start items-center gap-4 max-w-xs font-notosans">
                      <div className=" flex flex-col gap-2">
                        <div className="text-black/70">
                          {item.q1}
                        </div>
                        <div className="font-bold text-black text-lg font-notoserif">
                          {item.q2}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}

            </div>

          </div>


          <div className="mt-20">

            <div className="flex justify-center">
              <div className="max-w-sm text-center">
                <div className="text-black/70 font-notoserif font-medium ">
                   Details of Our Media Monitoring Offering
                </div>
                <span className=" text-xs text-red-700 font-medium">
                TNM has created new and innovative ways of monitoring, measuring, and analyzing YOUR paid and earned media through the below segmentation.
                </span>
              </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row justify-start items-start gap-5">
              {capabilitiesII.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-start items-start gap-4"
                >
                  <item.icon
                    size={50}
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
      </div >
    </>
  );
}
