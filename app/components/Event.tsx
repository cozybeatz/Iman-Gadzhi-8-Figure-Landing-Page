import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Event() {
  return (
    <>
      <section className="flex flex-col justify-center items-center py-5 px-6 md:px-40 space-y-20 md:space-y-10 md:py-10">
        {/* SUB HEADING */}
        <Image
          className="w-7 opacity-40"
          src="/images/linebreak.png"
          width={250}
          height={250}
          alt="line break"
        />

        <section className="grid grid-cols-12 gap-10 md:gap-12 justify-items-center">
          <h1 className="col-span-12 text-center mx-auto font-medium text-gray-200 text-3xl leading-relaxed md:text-5xl uppercase w-full">
            This Event Is Not Only About Succeeding. But About Getting Rid Of
            What’s Been Holding You Back.
          </h1>
          {/* EVENTS */}
          <div className="md:col-span-4 col-span-12 text-center space-y-3">
            {/* SUB HEADING */}
            <Image
              className="rounded-3xl iman-sub-img border-white/10"
              src="/images/iman/iman1.webp"
              width={380}
              height={380}
              alt="iman1"
            />
            <h2 className="tracking-wider text-2xl font-bold uppercase">
              Identifying The Enemy
            </h2>
            <p
              className={`${inter.className} tracking-widest font-bold text-red-500 uppercase`}
            >
              January 15TH • 12 PM Est
            </p>
          </div>
          {/* EVENT 2 */}
          <div className="md:col-span-4 col-span-12 text-center space-y-3">
            {/* SUB HEADING */}
            <Image
              className="rounded-3xl iman-sub-img border-white/10"
              src="/images/iman/iman2.webp"
              width={380}
              height={380}
              alt="line break"
            />
            <h2 className="tracking-wider text-2xl font-bold uppercase">
              Identifying The Enemy
            </h2>
            <p
              className={`${inter.className} tracking-widest font-bold text-red-500 uppercase`}
            >
              January 15TH • 12 PM Est
            </p>
          </div>

          {/* EVENT 3 */}
          <div className="md:col-span-4 col-span-12 text-center space-y-3">
            {/* SUB HEADING */}
            <Image
              className="rounded-3xl iman-sub-img border-white/10"
              src="/images/iman/iman3.webp"
              width={380}
              height={380}
              alt="line break"
            />
            <h2 className="tracking-wider text-2xl font-bold uppercase">
              Identifying The Enemy
            </h2>
            <p
              className={`${inter.className} tracking-widest font-bold text-red-500 uppercase`}
            >
              January 15TH • 12 PM Est
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
