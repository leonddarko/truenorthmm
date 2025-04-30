"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import _ from "lodash"
import ToastAlert from "../ui/toast";

export default function Page() {
  const [sending, setsending] = useState(false)
  const [messagesent, setmessagesent] = useState(false)
  const [internalerror, setinternalerror] = useState(false)


  const handleSubmit = async (event) => {
    event.preventDefault();
    setsending(true);

    // await new Promise((resolve) => setTimeout(resolve, 1000));

    let fname = _.upperFirst(event.target.fname.value);
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    // fname = fname.toUpperCase()

    const data = {
      fname,
      email,
      subject,
      message
    }
    // console.log(data);

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/sendmessage";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    const result = await response.json();
    console.log(result);

    if (result.okay) {
      setsending(false)
      setmessagesent(true)
      event.target.reset();
    } else if (result.error) {
      setsending(false)
      setinternalerror(true)
    }
  };

  return (
    <>
      <div className="mt-20 w-full h-72 bg-[url('/assets/mediamonitoringbg.jpeg')] bg-no-repeat bg-cover bg-center shadow" />

      <div className="px-6 md:px-16 py-20">
        <h1 className="font-notoserif font-bold text-black text-4xl">
          Contact Us
        </h1>
        <p className=" font-notosans font-normal text-sm text-black">
          Right on time, the first time.
        </p>

        <div className="mt-10 flex flex-wrap justify-end md:justify-between items-start gap-5">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-3 mb-5">
              <input
                type="text"
                placeholder="Full Name"
                name="fname"
                className="input w-full rounded-full bg-zinc-200 shadow-sm focus:outline-none focus:border-none font-medium text-black"
                required
              />

              <input
                type="text"
                placeholder="Email Address"
                name="email"
                className="input w-full rounded-full bg-zinc-200 shadow-sm focus:outline-none focus:border-none font-medium text-black"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="input w-full rounded-full bg-zinc-200 shadow-sm mb-5 focus:outline-none focus:border-none font-medium text-black"
              required
            />

            <textarea
              className="textarea rounded-t-3xl bg-zinc-200 w-full focus:outline-none focus:border-none mb-5 font-medium text-black"
              placeholder="Message here..."
              name="message"
              rows={3}
              required
            ></textarea>

            <div className="flex justify-start items-center">
              {sending === false && (
                <button
                  type="submit"
                  className="btn-sm bg-army-green text-white rounded-full shadow-sm flex items-center gap-2"
                >
                  Send
                  <Send size={15} className="text-white" />
                </button>
              )}

              {sending === true && (
                <button
                  type="submit"
                  className="btn-sm bg-army-green text-white rounded-full shadow-sm flex items-center gap-2"
                >
                  Sending...
                  <span className="loading loading-spinner loading-xs text-red-green"></span>
                </button>
              )}
            </div>



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

      <ToastAlert
        stateVar={messagesent}
        textColor="text-army-green"
        text="Message sent."
        onClick={() => setmessagesent(false)}
        iconHint="success"
      />

      <ToastAlert
        stateVar={internalerror}
        textColor=" text-red-500"
        text="Something went wrong. Try again."
        onClick={() => setinternalerror(false)}
        iconHint="internalerror"
      />
    </>
  );
}
