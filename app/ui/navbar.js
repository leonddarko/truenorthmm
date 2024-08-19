"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import { Binoculars, EllipsisVertical } from "lucide-react";

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
  ];
  return (
    <>
      <div className=" w-full flex justify-between py-6 px-6 md:px-16 fixed top-0 bg-white z-[50] opacity-95 shadow-sm">
        {/* Logo and socials */}
        <div className="flex justify-start items-center gap-4">
          <Link href="/">
            {/* <Image
              src="/assets/maverickresearchlogo.png"
              alt="Maverick Research Logo"
              width={156}
              height={134}
            /> */}

            <div className="flex items-center gap-0.5">
              {/* <Binoculars
                className=" text-green-800"
                size={30}
                strokeWidth={1}
              /> */}
              <span className="font-extrabold font-notoserif text-2xl text-green-800">
                TRUENORTH
              </span>
            </div>
          </Link>

          {socialicons.map((item) => (
            <div key={item.id}>
              <i className={`${item.icon} text-black text-sm`}></i>
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
                className={`w-1 h-1 rounded-full bg-green-800 transition ease-in ${
                  pathname === item.path ? "block" : "hidden"
                }`}
              />
              <Link href={item.path}>
                <span className=" font-bold text-sm font-notosans text-zinc-500 hover:text-zinc-950 transition-all">
                  {item.link}
                </span>
              </Link>
            </div>
          ))}
          {/* Navigation Links */}
          <span className=" inline-block p-2 rounded-full shadow md:hidden">
            <EllipsisVertical
              className=" text-black/50"
              size={20}
              strokeWidth={2}
            />
          </span>
        </div>
      </div>
      <Script src="https://kit.fontawesome.com/dcd356c426.js" />
    </>
  );
}
