import Link from "next/link";
import Breadcrumbs from "../ui/breadcrumbs";
import { Target } from "lucide-react";

export default function Page() {
  const capabilities = [
    {
      id: 0,
      icon: Target,
      title: "Scelerisque",
      text: "Sociosqu eleifend senectus eget vivamus et dis nostra curabitur. Senectus magna platea sociosqu, nisl quis ac aliquet. ",
    },
    {
      id: 1,
      icon: Target,
      title: "Scelerisque",
      text: "Sociosqu eleifend senectus eget vivamus et dis nostra curabitur. Senectus magna platea sociosqu, nisl quis ac aliquet. ",
    },
    {
      id: 1,
      icon: Target,
      title: "Scelerisque",
      text: "Sociosqu eleifend senectus eget vivamus et dis nostra curabitur. Senectus magna platea sociosqu, nisl quis ac aliquet. ",
    },
  ];
  return (
    <>
      <div className="mt-20 ">
        <div className="w-full h-72 bg-[url('/assets/mediamonitoringbg.jpeg')] bg-no-repeat bg-cover bg-center shadow" />
        <div className="px-6 md:px-16 my-10 md:my-20">
          <Breadcrumbs />
          <div className="mt-5">
            <h1 className="font-notoserif font-bold text-black text-3xl md:text-5xl max-w-lg">
              Consumer Journeys
            </h1>
          </div>

          <div className="my-5 max-w-4xl font-notosans font-normal text-black/70">
            <p className="mb-2.5">
              Understanding customers&apos; real sentiments about your brand and
              product, identifying market gaps, measuring your employees&apos;
              engagement levels and demystifying market trends.
            </p>

            <p className="mb-2.5">
              We help you unearth &apos;the how&apos;, &apos;the why&apos; and
              explore the possibilities of &apos;what next&apos;.
            </p>

            <p className="mb-5">
            Our depth of experience, robust operational structure and strength of international network allows us to conduct research across the African continent whilst maintaining our track record of producing quality and accurate data to support our partners&apos; decision making.
            </p>
          </div>

          {/* <div className="mt-10 flex flex-col md:flex-row justify-start gap-5">
            {capabilities.map((item) => (
              <div
                key={item.id}
                className="flex justify-start items-center gap-4"
              >
                <item.icon
                  size={40}
                  strokeWidth={1}
                  className=" text-army-green"
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
          </div> */}

        </div>
      </div>
    </>
  );
}
