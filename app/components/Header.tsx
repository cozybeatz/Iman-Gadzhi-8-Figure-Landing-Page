"use client";

import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
import { togglePopupForm } from "../utils";

export default function Header() {
  return (
    <>
      <header
        id="header"
        className="reveal-element bg-cover flex flex-col md:flex-row items-center justify-between md:space-y-0 md:space-x-4 mb-20"
      >
        <div className="basis-full text-center md:text-center">
          <div className="relative w-full pt-20 px-6 md:px-20 h-1/6">
            <Image
              className="absolute w-2/5 md:w-max z-40 top-6 translate-x-2/3 md:translate-x-0 md:left-12"
              src="/images/timesup.png"
              width={240}
              height={240}
              alt="timesup"
            />
            <Image
              className="absolute top-0 left-0 w-full h-4/6 object-cover"
              src="/images/bg.jpg"
              width={600}
              height={600}
              alt="s star"
            />
            <Image
              className="relative z-20 mx-auto w-full md:w-3/5"
              src="/images/hero.webp"
              width={600}
              height={600}
              alt="s star"
            />
          </div>

          <div className="space-y-6 tracking-wider px-6 md:px-0">
            <div className="relative z-40 -mt-8 md:-mt-16 bg-white/10 rounded-full border border-white w-max mx-auto py-1.5 md:py-1 px-16 font-light text-sm md:text-xl uppercase tracking-widest">
              January 15th to 22nd
            </div>
            <div className="md:w-1/2 w-full mx-auto space-y-4">
              {/* HEADER/HOOK */}
              <h1 className="mx-auto font-medium text-gray-200 text-4xl leading-none md:text-5xl uppercase">
                How To Create The Year Of Your Dreams And Turn Your Life Around
                In 2024...
              </h1>
              {/* SUBHEADING */}
              <div className="mx-auto space-y-6">
                <p className={`${inter.className} tracking-normal font-medium`}>
                  If by January 15th you haven{"'"}t yet taken action on your
                  New Years resolutions, you{"'"}ll be part of the{" "}
                  <strong>99.7% that fail in 2024.</strong> That{"'"}s why from
                  <strong> January 15th to 22nd</strong> I{"'"}
                  ll show you how to make the most out of your time and
                  accomplish your goals for 2024.
                </p>
                <button
                  className={`${inter.className} border rounded-xl block tracking-normal p-4 bg-gradient-to-b from-sky-300 to-sky-900 cta mx-auto w-full md:w-1/2 uppercase font-semibold hover:scale-110 transition duration-300`}
                  onClick={togglePopupForm}
                >
                  Save My Spot Now
                </button>
                <small
                  className={`${montserrat.className} tracking-normal text-gray-400 mt-2`}
                >
                  You{"'"}ll get the confirmation in your email inbox
                </small>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
