"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import { ChevronDown, FileSpreadsheet } from "lucide-react";

export default function NavigationBar() {
  const pathname = usePathname();

  const socialicons = [
    {
      id: 0,
      icon: "fab fa-linkedin-in",
    },
    {
      id: 1,
      icon: "fab fab fa-facebook-f",
    },
    {
      id: 2,
      icon: "fab fab fa-twitter",
    },
  ];

  const navlinks = [
    {
      id: 0,
      path: "/",
      link: "Home",
    },
    {
      id: 1,
      path: "/about-us",
      link: "About Us",
    },
    {
      id: 2,
      path: "/our-team",
      link: "Our Team",
    },
    {
      id: 3,
      path: "/contact-us",
      link: "Contact Us",
    },
    {
      id: 4,
      path: "",
      link: "Blog",
    },
  ];
  return (
    <>
      <div className=" w-full flex justify-between py-4 px-6 md:px-16 fixed top-0 bg-white z-[50] opacity-95 shadow-sm">
        {/* Logo and socials */}
        <div className="flex justify-start items-center gap-4">
          <div className="flex items-center gap-0.5">
            <div className="dropdown dropdown-bottom p-0">
              <div
                tabIndex={0}
                role="button"
                className=" inline-block p-2 rounded-full shadow bg-zinc-200 hover:bg-zinc-300 hover:text-black"
              >
                <ChevronDown
                  className=" text-black/50"
                  size={20}
                  strokeWidth={2}
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow-md mt-2 bg-zinc-100"
              >
                {navlinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className=" font-notosans font-bold text-zinc-700 hover:bg-zinc-200 hover:text-green-800 flex items-center"
                    >
                      <div
                        className={`w-1 h-1 rounded-full bg-green-800 transition ease-in ${
                          pathname === item.path ? "block" : "hidden"
                        }`}
                      />
                      {item.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/" className="flex items-center gap-0.5">
              <Image
                src="/TrueNorthLogoSq1.jpg"
                alt="Maverick Research Logo"
                width={50}
                height={50}
              />

              <span className="font-extrabold font-notoserif text-md text-black">
                TRUENORTH
              </span>
            </Link>
          </div>

          {socialicons.map((item) => (
            <div key={item.id}>
              <i className={`${item.icon} text-green-800 text-sm`}></i>
            </div>
          ))}
        </div>

        <div className="flex justify-start items-center gap-4 font-notoserif text-black">
          {/* Navigation Links */}
          {navlinks.map((item) => (
            <div
              key={item.id}
              className="hidden md:flex justify-center items-center gap-2 p-1 rounded-3xl"
            >
              <div
                className={`w-1.5 h-1.5 rounded-full bg-green-800 transition ease-in ${
                  pathname === item.path ? "block" : "hidden"
                }`}
              />
              <Link href={item.path}>
                <span className=" font-bold text-sm font-notosans text-zinc-700 hover:text-zinc-950 transition-all">
                  {item.link}
                </span>
              </Link>
            </div>
          ))}
          <Link href="/mmmreport">
            <span className=" font-bold text-sm font-notosans text-green-700 hover:text-green-800 transition-all bg-zinc-100 hover:bg-zinc-200 px-3 py-2 rounded-full shadow flex items-center gap-2">
              MM Reports
              <FileSpreadsheet size={15} />
            </span>
          </Link>
          {/* Navigation Links */}
        </div>
      </div>
      <Script src="https://kit.fontawesome.com/dcd356c426.js" />
    </>
  );
}
