import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import List from "@/components/dates/List";

export default function Page() {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Dates"
                shortText=""
                homePageUrl="/"
                homePageText="Home"
                activePageText="Dates"
                bgImg="/images/own/slide3.jpg"
            />

            {/* <SpeakersOne /> */}

            <List heading={'Dates to Note'}/>

            <List heading={'Registrations'}/>

            <List heading={'Group Discounts'}/>


            <Footer />
        </>
    );
}
