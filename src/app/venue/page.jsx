import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import List from "@/components/dates/List";
import './Page.css'

export default function Page() {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Accommodation"
                shortText=""
                homePageUrl="/"
                homePageText="Home"
                activePageText="Accommodation"
                bgImg="/images/own/slide3.jpg"
            />

            {/* <SpeakersOne /> */}

            <div className="venueMain">
                <div>
                    <h4>LODGING</h4>
                    <p>Lodging Packages (when selected with conference registration) are available with a special room rate at Double Tree by Hilton.
                        The special room rates will be available until the group block is sold out. For more information, please contact the conference coordinator.
                        <br />The Hotel staff will only provide general information about the hotel and guest rooms; and are not responsible for any specific details about the conference. Guest room confirmation numbers will be provided to the registrants periodically on successful completion of the registration and accommodation bookings.</p>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p><span style={{ fontWeight: '700' }}>Note 1 : </span>  Please mention the &quot;United Scientific Group&quot; name, if you wish to contact hotel reception.</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p><span style={{ fontWeight: '700' }}>Note 2 : </span>  The discounted hotel stay rates are restricted only for one day before and / or after the event dates (based on the availability). The complimentary packages are valid only on the event dates.</p>
                    </div><div style={{ display: 'flex', alignItems: 'center' }}>
                        <p><span style={{ fontWeight: '700' }}>Note 3 : </span>  Lodging Package only includes the room rent charges and rest all incidentals would be charged extra. Hotel reception would convey all the complimentary services if any at the time of check-in.</p>
                    </div>
                </div>

                <div>
                    <h5 style={{
                        textAlign: 'center', paddingBlock: '5px',
                        background: '#dd5a40', color: 'white'
                    }}>Address to the Hotel</h5>

                    <p><span style={{ fontWeight: '700', fontSize: '20px' }}>DoubleTree by Hilton</span><br></br>
                        San Francisco Airport,<br></br>
                        835 Airport Blvd, Burlingame,<br></br>
                        CA 94010, United States,<br></br>
                        Phone: +1 650-344-5500</p>

                    <div >
                        <button style={{
                            marginRight: '20px', background: '#031b58',
                            color: 'white', padding: '12px', border: 'none'
                        }}>Submit Abstrat 👉</button>
                        <button style={{
                            background: '#cc3201',
                            color: 'white', padding: '12px', border: 'none'
                        }}>Register 👉</button>
                    </div>

                    <div className="imgCon">

                        <img className="imgVenue"
                            src="/images/own/h1.jpg" alt="accomidation" />
                        <img className="imgVenue"
                            src="/images/own/h2.jpg" alt="accomidation" />
                        <img className="imgVenue"
                            src="/images/own/h3.jpg" alt="accomidation" />

                    </div>
                </div>


                <div>
                    <h5 style={{
                        textAlign: 'center', paddingBlock: '5px',
                        background: '#dd5a40', color: 'white'
                    }}>Directions to the Venue</h5>

                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.622846018029!2d-122.36282592427443!3d37.58749787203314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f76267d4e5085%3A0x6b0fcd75a3d901fb!2sNorthpark%20Apartments!5e0!3m2!1sen!2sin!4v1732778223374!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}
