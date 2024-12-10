import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import SpeakersTwo from "@/components/Speakers/SpeakersTwo";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Keynote Speakers"
        shortText=""
        homePageUrl="/"
        homePageText="Home"
        activePageText="Keynote Speakers"
        bgImg="/images/main-bg5.jpg"
      />

      <SpeakersTwo />

      <Footer />
    </>
  );
}
