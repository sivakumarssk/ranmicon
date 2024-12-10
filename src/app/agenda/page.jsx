import React from 'react';
import PdfViewer from './PdfViewer';
import Navbar from '@/components/Layouts/Navbar';
import PageBanner from '@/components/Common/PageBanner';
import Footer from '@/components/Layouts/Footer';
import './page.css'

const Page = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Agenda"
                shortText="Get Your Tickets"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Agenda"
                bgImg="/images/own/slide2.jpg"
            />

            <div className='pdfCon'>
                <PdfViewer pdfUrl="/images/own/sivakumar_software_Developer_6months.pdf/" />
            </div>


            <Footer />
        </>
    );
};

export default Page;
