import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import PricingTable from "@/components/Pricing/PricingTable";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner 
        pageTitle="Register"
        shortText="Get Your Pass"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Register"
        bgImg="/images/main-bg4.jpg"
      />

      <PricingTable />
 
      <Footer />
    </>
  );
}
