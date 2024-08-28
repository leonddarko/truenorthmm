"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const crumbs = [
    // { id: 0, name: "Home", path: "/" },
    { id: 1, name: "Media Monitoring", path: "/media-monitoring" },
    { id: 2, name: "Audience Measurement", path: "/audience-measurement" },
    { id: 3, name: "Consumer Journeys", path: "/consumer-journeys" },
  ];
  return (
    <>
      <div className="breadcrumbs text-sm">
        <ul className="text-black">
          {crumbs.map((item) => (
            <li key={item.id}>
              <Link
                className=" flex justify-start item-center gap-2"
                href={item.path}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full bg-army-green transition ease-in ${
                    pathname === item.path ? "inline-block" : "hidden"
                  }`}
                />
                <span
                  className={`${
                    pathname === item.path
                      ? " font-notosans font-bold text-black"
                      : ""
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
