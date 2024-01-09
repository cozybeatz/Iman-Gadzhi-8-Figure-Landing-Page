"use client";

import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
import { togglePopupForm } from "../utils";

export default function Enroll() {
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
        <div className="text-center mx-auto font-medium text-gray-200 text-3xl leading-none md:text-5xl uppercase md:w-3/6">
          <span className="text-red-600 text-2xl">
            100% Online and free to join
          </span>
          <br></br>
          <span className="w-1/6">It all starts on January 15th</span>
        </div>
        <Image
          className="w-3/6 md:w-1/6"
          src="/images/timesup2.png"
          width={200}
          height={200}
          alt="times up"
        />
        <Image
          className="w-4/6 md:w-2/6"
          src="/images/timesup-text.png"
          width={400}
          height={400}
          alt="timesup text"
        />
        <div className="mx-auto space-y-8 md:w-4/6 text-center">
          <button
            onClick={togglePopupForm}
            className={`${inter.className} border rounded-md block tracking-normal p-4 bg-gradient-to-b from-sky-300 to-sky-900 cta mx-auto w-full md:w-1/2 uppercase font-bold hover:scale-110 transition duration-300`}
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
