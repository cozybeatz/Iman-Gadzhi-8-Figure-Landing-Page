"use client";

import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
import { togglePopupForm } from "../utils";

export default function BeCareful() {
  return (
    <>
      <section className="flex flex-col justify-center items-center py-5 px-6 md:px-40 space-y-10 md:py-10">
        {/* SUB HEADING */}
        <Image
          className="w-7 opacity-40"
          src="/images/linebreak.png"
          width={250}
          height={250}
          alt="line break"
        />
        <h1 className="text-center mx-auto font-medium text-gray-200 text-3xl leading-loose md:text-6xl uppercase md:w-5/6">
          <span className="text-red-600">Be careful when you enroll:</span>{" "}
          <br></br>
          You have a high chance of changing your life after the 15th January
        </h1>
        <div className="mx-auto space-y-8 md:w-4/6 text-center leading-loose">
          <p
            className={`${inter.className} tracking-normal font-semibold text-center text-red-500`}
          >
            If you are satisfied with your life the way it is now, I highly
            suggest that you don’t watch the event, since it can drastically
            change the way you approach your year in 2024.
          </p>
          <p
            className={`${inter.className} tracking-normal font-semibold text-center`}
          >
            Now, if you’re one of those who decided to thrive and do things
            differently, all I have to say is that time’s up.
          </p>
          <p
            className={`${inter.className} tracking-normal font-semibold text-center`}
          >
            <em>
              On the 15th I will reveal to you how to actually make progress in
              2024, get rid of the bad habits, and start off the year running a
              winning business a step ahead of making $10.000 a month.{" "}
            </em>
          </p>
          <button
            onClick={togglePopupForm}
            className={`${inter.className} border rounded-xl block tracking-normal p-4 bg-gradient-to-b from-sky-300 to-sky-900 cta mx-auto w-full md:w-1/2 uppercase font-bold hover:scale-110 transition duration-300`}
          >
            I want to thrive in 2024
          </button>
          <small
            className={`${montserrat.className} font-light tracking-normal text-gray-300 mt-2`}
          >
            You{"'"}ll get the confirmation in your email inbox
          </small>
        </div>
      </section>
    </>
  );
}
