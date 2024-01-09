"use client";

import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
import { togglePopupForm } from "../utils";

export default function Goal() {
  return (
    <>
      <section className="flex flex-col justify-center items-center py-20 px-6 md:px-40 space-y-20 md:space-y-10 md:py-10">
        {/* SUB HEADING */}
        <Image
          className="w-7 opacity-40"
          src="/images/linebreak.png"
          width={250}
          height={250}
          alt="line break"
        />

        <div className="mx-auto space-y-8 md:w-4/6 text-center font-medium leading-loose">
          <h1 className="text-center mx-auto font-medium text-gray-200 text-3xl leading-relaxed md:text-6xl uppercase md:w-4/6">
            Everything I Teach You Comes From What I Have Done.
          </h1>
          <p className={`${inter.className} tracking-normal text-center`}>
            After spending 8 years recording my own journey as a young
            entrepreneur, dropping out of high school, and growing my agency
            business to over 1 million dollars in revenue, I will show you the
            path you should follow to make 2024 the year of your life.
          </p>
          <p className={`${inter.className} tracking-normal text-center`}>
            Whether it is starting or growing a business, making your first
            10.000 a month, or even travelling to the place you’ve always
            wanted.
          </p>
          <p className={`${inter.className} tracking-normal text-center`}>
            It all requires that you use your time the best way you can.
          </p>
          <button
            onClick={togglePopupForm}
            className={`${inter.className} border rounded-xl block tracking-normal p-4 bg-gradient-to-b from-sky-300 to-sky-900 cta mx-auto w-full md:w-1/2 uppercase font-bold hover:scale-110 transition duration-300`}
          >
            I want to thrive in 2024
          </button>
          <small
            className={`${montserrat.className} tracking-normal font-light text-gray-300 mt-2`}
          >
            You{"'"}ll get the confirmation in your email inbox
          </small>
        </div>
      </section>
    </>
  );
}
