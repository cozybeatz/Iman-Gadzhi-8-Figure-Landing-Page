import Image from "next/image";
import Header from "./components/Header";
import Event from "./components/Event";
import Goal from "./components/Goal";
import BeCareful from "./components/BeCareful";
import Enroll from "./components/Enroll";
import Footer from "./components/Footer";
import PopupForm from "./components/PopupForm";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-stone-900 to-black">
      <Header />
      <Event />
      <Goal />
      <BeCareful />
      <Enroll />
      <Footer />
      <PopupForm />
    </main>
  );
}
