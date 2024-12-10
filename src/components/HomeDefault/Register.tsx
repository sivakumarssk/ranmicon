"use client";

import React from "react";
import Link from "next/link"; 

const Register: React.FC = () => {
  return (
    <>
      <div className="pricing-area ptb-120 bg-image">
        <div className="container">
          <div className="section-title">
            <span>Register Plan</span>
            <h2>
              Register <b>Now</b>
            </h2>

            <div className="bg-title">Register</div>

            <div className="bar"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-table-box">
                <div className="pricingTable-header">
                  <h3 className="title">ACADEMIC PASS</h3>
                  <div className="price-value">
                    <sup>$</sup>899
                  </div>
                </div>

                <ul className="pricing-content">
                  <li>Welcome Coffee</li>
                  <li>Access to All Talks and Posters</li>
                  <li>Conference Material</li>
                  <li>Lunch, Tea / Coffee Breaks</li>
                  <li>WiFi in Meeting Rooms</li>
                </ul>

                <Link href="/Register" className="btn btn-primary">
                  Register Now
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table-box">
                <div className="pricingTable-header">
                  <h3 className="title">INDUSTRY PASS</h3>
                  <div className="price-value">
                    <sup>$</sup>999
                  </div>
                </div>

                <ul className="pricing-content">
                  <li>Welcome Coffee</li>
                  <li>Access to All Talks and Posters</li>
                  <li>Conference Material</li>
                  <li>Lunch, Tea / Coffee Breaks</li>
                  <li>WiFi in Meeting Rooms</li>
                </ul>

                <Link href="/Register" className="btn btn-primary">
                Register Now
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table-box">
                <div className="pricingTable-header">
                  <h3 className="title">STUDENT PASS</h3>
                  <div className="price-value">
                    <sup>$</sup>549
                  </div>
                </div>

                <ul className="pricing-content">
                  <li>Welcome Coffee</li>
                  <li>Access to All Talks and Posters</li>
                  <li>Conference Material</li>
                  <li>Lunch, Tea / Coffee Breaks</li>
                  <li>WiFi in Meeting Rooms</li>
                </ul>

                <Link href="/Register" className="btn btn-primary">
                Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
