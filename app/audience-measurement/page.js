import Link from "next/link";
import { Target, UserRoundCheck } from "lucide-react";
import Breadcrumbs from "../ui/breadcrumbs";

export default function Page() {
  const capabilities = [
    {
      id: 0,
      icon: UserRoundCheck,
      title: "Reach Right",
      text: "Reaching and Rating Audiences correctly… Multiplicity of Platforms and Audience Fragmentation.",
    },
    {
      id: 1,
      icon: Target,
      title: "Effectiveness",
      text: "Effectiveness evaluation of every placed versus aired spot.",
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
              Audience Measurement
            </h1>
          </div>

          <div className="my-5 max-w-4xl font-notosans font-normal text-black/70">
            <p className="mb-2.5">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Velit neque
              diam lobortis accumsan lobortis. Fringilla sodales nam; ut curae
              scelerisque habitant quis. Maecenas vel volutpat porta senectus
              ullamcorper.
            </p>

            <p className="mb-2.5">
              Venenatis parturient tortor natoque felis donec hac ultricies ac.
              Rhoncus nisi ante magna enim suspendisse aenean duis. Ipsum arcu
              sollicitudin metus semper massa blandit ullamcorper phasellus.
            </p>

            <p className="mb-5">
              Sociosqu eleifend senectus eget vivamus et dis nostra curabitur.
              Senectus magna platea sociosqu, nisl quis ac aliquet. Eleifend
              lacus laoreet amet arcu accumsan placerat curabitur massa.
            </p>
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
          </div>
        </div>
      </div>
    </>
  );
}
