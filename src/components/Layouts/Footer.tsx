"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact Infomation</h3>
                {/* <span>
                  <i className="icofont-calendar"></i> February 24-26, 2025
                </span>

                <p className="location">
                  <i className="icofont-google-map"></i> San Francisco, CA
                </p> */}

                <Link href="/contact-us" className="contact-authority">
                  <i className="icofont-phone"></i> Contact Our Authority
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Social Connection</h3>
                <p>
                  Don&apos;t miss Link thing! Receive daily news You should
                  connect social area for Any Proper Updates Anytime.
                </p>

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="facebook"
                      target="_blank"
                    >
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      className="twitter"
                      target="_blank"
                    >
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="linkedin"
                      target="_blank"
                    >
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      className="instagram"
                      target="_blank"
                    >
                      <i className="icofont-instagram"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="copyright-area">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/own/logoWhite.png"
                      alt="logo"
                      width={387}
                      height={387}
                    />
                  </Link>
                </div>

                <ul>
                  <li>
                    <Link href="/abstract">Abstract</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact</Link>
                  </li>
                  <li>
                    <Link href="/Register">Register</Link>
                  </li>
                  <li>
                    <Link href="/dates">Dates</Link>
                  </li>
                  <li>
                    <Link href="/venue">Venue</Link>
                  </li>
                </ul>

                <p>
                  © All Rights Reserved by pharma R&D{" "}
                  {/* <a
                    href="https://hibootstrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HiBootstrap
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
