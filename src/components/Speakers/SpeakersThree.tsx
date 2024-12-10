"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SpeakersMember {
  image: string;
  name: string;
  designation: string;
  socialLinks: SocialLink[];
}

interface SocialLink {
  iconName: string;
  url: string;
}

const SpeakersMemberData: SpeakersMember[] = [
  {
    image: "/images/speakers1.jpg",
    name: "James Anderson",
    designation: "Founder & CEO",
    socialLinks: [
      {
        iconName: "icofont-facebook",
        url: "https://facebook.com/",
      },
      {
        iconName: "icofont-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "icofont-instagram",
        url: "https://instagram.com/",
      },
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/speakers2.jpg",
    name: "Steven Smith",
    designation: "Lead Designer",
    socialLinks: [
      {
        iconName: "icofont-facebook",
        url: "https://facebook.com/",
      },
      {
        iconName: "icofont-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "icofont-instagram",
        url: "https://instagram.com/",
      },
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/speakers3.jpg",
    name: "Lucy Mandana",
    designation: "Developer Expert",
    socialLinks: [
      {
        iconName: "icofont-facebook",
        url: "https://facebook.com/",
      },
      {
        iconName: "icofont-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "icofont-instagram",
        url: "https://instagram.com/",
      },
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/speakers4.jpg",
    name: "David Warner",
    designation: "Senio Visual Designer",
    socialLinks: [
      {
        iconName: "icofont-facebook",
        url: "https://facebook.com/",
      },
      {
        iconName: "icofont-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "icofont-instagram",
        url: "https://instagram.com/",
      },
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/speakers5.jpg",
    name: "Alberta Amelia",
    designation: "Lead Designer",
    socialLinks: [
      {
        iconName: "icofont-facebook",
        url: "https://facebook.com/",
      },
      {
        iconName: "icofont-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "icofont-instagram",
        url: "https://instagram.com/",
      },
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/speakers6.jpg",
    name: "Abbie Edie",
    designation: "Lead Designer",
    socialLinks: [
      {
        iconName: "icofont-facebook",
        url: "https://facebook.com/",
      },
      {
        iconName: "icofont-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "icofont-instagram",
        url: "https://instagram.com/",
      },
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
];

const SpeakersThree: React.FC = () => {
  return (
    <>
    <div className="speakers-area ptb-120 pb-180" >
      <div className="container">
        <div className="section-title">
          <span>Listen to the Committe</span>
          <h2>Who&apos;s Committe</h2>
          <div className="bar"></div>

          <div className="bg-title">Committe</div>

          
        </div>
      </div>

      <div className="row m-0">
        {SpeakersMemberData &&
          SpeakersMemberData.slice(0, 8).map((value, i) => (
            <div className="col-lg-3 col-sm-6 p-0" key={i}>
              <div className="single-speakers">
                <Image
                  src={value.image}
                  alt="Experts"
                  width={800}
                  height={800}
                />

                <div className="speakers-content">
                  <h3>{value.name}</h3>
                  <span>{value.designation}</span>
                </div>

                {/* <ul>
                  {value.socialLinks.map((value, i) => (
                    <li key={i}>
                      <a
                        href={value.url}
                        target="_blank"
                        style={{
                          background: `${value.bgColor}`,
                        }}
                      >
                        <i className={value.iconName}></i>
                      </a>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  </>
  );
};

export default SpeakersThree;
