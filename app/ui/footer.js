import Image from "next/image";

export default function Footer() {
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
  return (
    <div className="flex flex-wrap justify-between items-center px-6 md:px-16 py-10 bg-zinc-200">
      <div className="flex items-center">
        <div className="">
          <p className="font-extrabold font-notoserif text-md text-black">
            TRUE NORTH MEDIA <br /> MONITORING LTD
          </p>
          <span className="text-xs text-black/60">
            Copyright © {new Date().getFullYear()} - All right reserved
          </span>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        {socialicons.map((item) => (
          <div key={item.id}>
            <i className={`${item.icon} text-black text-sm`}></i>
          </div>
        ))}
      </div>
    </div>
  );
}
