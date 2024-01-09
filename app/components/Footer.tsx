import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col justify-center items-center py-5 px-6 md:px-40 space-y-10 md:py-10">
        <div
          className={`${inter.className} text-gray-400 text-xs text-center space-y-4`}
        >
          <p>Contact Us | Privacy Policy | Terms & Conditions</p>
          <p>
            This site is not a part of the Facebook website or Facebook Inc.
            Additionally, This site is NOT endorsed by Facebook in any way.
            FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
          <p>©2023 educate.io. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
