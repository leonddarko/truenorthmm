"use client";

import { Send } from "lucide-react";

export default function Page() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const fname = event.target.fname.value;
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    console.log(fname);
    console.log(email);
    console.log(subject);
    console.log(message);

  };

  return (
    <>
      <div className="mt-20 w-full h-72 bg-[url('/assets/mediamonitoringbg.jpeg')] bg-no-repeat bg-cover bg-center shadow" />

      <div className="px-6 md:px-16 py-20">
        <h1 className="font-notoserif font-bold text-black text-4xl">
          Contact Us
        </h1>
        <p className=" font-notosans font-normal text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-10 flex flex-wrap justify-end md:justify-between items-start gap-5">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-3 mb-5">
              <input
                type="text"
                placeholder="Full Name"
                name="fname"
                className="input input-ghost w-full rounded-full bg-zinc-200 shadow-sm focus:outline-none focus:border-none"
              />

              <input
                type="text"
                placeholder="Email Address"
                name="email"
                className="input input-ghost w-full rounded-full bg-zinc-200 shadow-sm focus:outline-none focus:border-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="input input-ghost w-full rounded-full bg-zinc-200 shadow-sm mb-5 focus:outline-none focus:border-none"
            />

            <textarea
              className="textarea textarea-ghost rounded-t-3xl bg-zinc-200 w-full focus:outline-none focus:border-none mb-5"
              placeholder="Message"
              name="message"
              rows={3}
            ></textarea>

            <button
              type="submit"
              className="btn-sm bg-army-green text-white rounded-full shadow-sm flex items-center gap-2"
            >
              Send
              <Send size={15} className="text-white" />
            </button>
          </form>
          <div className="flex flex-col gap-2.5 text-black font-notosans font-medium text-right">
            <h1 className="font-notoserif font-bold text-black text-2xl">
              Get in touch
            </h1>
            <p className="text-xs">7 Okantar Ankrah</p>
            <p className="text-xs mb-2.5">Chantan, Accra</p>
            <p className="text-xs">(+233) 541 180 487</p>
            <p className="text-xs">info@truenorthmonitoring.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
