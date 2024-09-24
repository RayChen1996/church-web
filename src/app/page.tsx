import Image from "next/image";

import Carousel from "@/components/pages/Carousel";
import DailyBible from "@/components/pages/DailyBible";
import About from "@/components/pages/About";
import History from "@/components/pages/History";
import Schedule from "@/components/pages/Schedule";
import JoinUsForm from "@/components/pages/JoinUsForm";

export default function Home() {
  return (
    <main className=" flex-1 min-h-dvh bg-white">
      <Carousel />
      <DailyBible />
      <About />
      <History />
      <Schedule />
      <JoinUsForm />
    </main>
  );
}
