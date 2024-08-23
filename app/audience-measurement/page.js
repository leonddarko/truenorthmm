import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="mt-20">
        <div className="w-full h-72 bg-[url('/assets/mediamonitoringbg.jpeg')] bg-no-repeat bg-cover bg-center shadow mb-10" />
        <div className="px-6 md:px-16">
          <div className="breadcrumbs text-sm">
            <ul className="text-black">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link
                  href="/audience-measurement"
                  className="font-bold flex justify-center items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-800 transition ease-in" />
                  <span>Audience Measurement</span>
                </Link>
              </li>
            </ul>
          </div>
          <h1 className="font-notoserif font-bold text-black/50 text-3xl md:text-5xl max-w-lg">
            Audience Measurement Includes...
          </h1>
        </div>
      </div>
    </>
  );
}
