import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomeDefault/MainBanner";
import AboutUsContent from "@/components/HomeDefault/AboutUsContent";
import WhyUs from "@/components/Common/WhyUs";
import Speakers from "@/components/HomeDefault/Speakers";
import EventSchedules from "@/components/HomeDefault/EventSchedules";
import FunFact from "@/components/Common/FunFact";
import Register from "@/components/HomeDefault/Register";
import Partner from "@/components/Common/Partner";
import LatestNews from "@/components/HomeDefault/LatestNews";
import BuyTicket from "@/components/Common/BuyTicket";
import Subscribe from "@/components/Common/Subscribe";
import Footer from "@/components/Layouts/Footer";
import Topics from "@/components/HomeDefault/Topics";
import Speakerskey from "@/components/HomeDefault/Speakerskey";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <AboutUsContent />

      <Topics/>

      <WhyUs />
      

      <EventSchedules />

      <Speakerskey />
      
      <Speakers />


      {/* <FunFact /> */}

      <Register />

      {/* <Partner /> */}

      {/* <LatestNews /> */}

      {/* <BuyTicket /> */}

      {/* <Subscribe /> */}

      <Footer />
    </>
  );
}
