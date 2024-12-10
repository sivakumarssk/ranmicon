"use client";

import React from "react"; 

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-phone"></i>
            </div>

            <div className="content" style={{height:'120px'}}>
              <h4>Phone / Fax</h4>
              <p>+1-469-854-2280/81</p>
              <p>+1-844-395-41025</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-email"></i>
            </div>

            <div className="content" style={{height:'120px'}}>
              <h4>E-mail</h4>
              <p>pharma-rnd@uniscigroup.net</p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-world"></i>
            </div>

            <div className="content" style={{height:'120px'}}>
              <h4>Location</h4>
              <p>USG United Scientific Group,
A non-profit organization
8105, Suite 112, Rasor Blvd, Plano
TX 75024, USA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
