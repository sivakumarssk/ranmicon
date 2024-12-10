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
  bgColor: string;
}

const SpeakersMemberData: SpeakersMember[] = [
  {
    image: "/images/own/e1.jpeg",
    name: "Kenneth A. Jacobson",
    designation: "Senior Investigator National Institutes of Health Bethesda, MD",
    socialLinks: [
      {
        iconName: "icofont-facebook",
        url: "https://facebook.com/",
        bgColor: "#4267b2",
      },
      {
        iconName: "icofont-twitter",
        url: "https://twitter.com/",
        bgColor: "#38A1F3",
      },
      {
        iconName: "icofont-instagram",
        url: "https://instagram.com/",
        bgColor:
          "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
      },
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
        bgColor: "#0077B5",
      },
    ],
  },
  {
    image: "/images/own/e2.jpeg",
    name: "Tobias Funk",
    designation: "VP, Technology Development TripleRing Technologies San Francisco, CA",
    socialLinks: [
      {
        iconName: "icofont-facebook",
        url: "https://facebook.com/",
        bgColor: "#4267b2",
      },
      {
        iconName: "icofont-twitter",
        url: "https://twitter.com/",
        bgColor: "#38A1F3",
      },
      {
        iconName: "icofont-instagram",
        url: "https://instagram.com/",
        bgColor:
          "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
      },
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
        bgColor: "#0077B5",
      },
    ],
  },
  {
    image: "/images/own/e3.jpeg",
    name: "Rick G. Schnellmann",
    designation: "Dean & Professor of Pharmacology and Toxicology, The University of Arizona, Tucson, AZ",
    socialLinks: [
      {
        iconName: "icofont-facebook",
        url: "https://facebook.com/",
        bgColor: "#4267b2",
      },
      {
        iconName: "icofont-twitter",
        url: "https://twitter.com/",
        bgColor: "#38A1F3",
      },
      {
        iconName: "icofont-instagram",
        url: "https://instagram.com/",
        bgColor:
          "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
      },
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
        bgColor: "#0077B5",
      },
    ],
  },
  {
    image: "/images/own/e4.jpeg",
    name: "Bin Zhang",
    designation: "Director & Professor Icahn School of Medicine Mount Sinai, NY",
    socialLinks: [
      {
        iconName: "icofont-facebook",
        url: "https://facebook.com/",
        bgColor: "#4267b2",
      },
      {
        iconName: "icofont-twitter",
        url: "https://twitter.com/",
        bgColor: "#38A1F3",
      },
      {
        iconName: "icofont-instagram",
        url: "https://instagram.com/",
        bgColor:
          "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
      },
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
        bgColor: "#0077B5",
      },
    ],
  },
  {
    image: "/images/own/e5.jpeg",
    name: "Maurizio Pellecchia",
    designation: "Professor & Director UCR School of Medicine Riverside, CA",
    socialLinks: [
      {
        iconName: "icofont-facebook",
        url: "https://facebook.com/",
        bgColor: "#4267b2",
      },
      {
        iconName: "icofont-twitter",
        url: "https://twitter.com/",
        bgColor: "#38A1F3",
      },
      {
        iconName: "icofont-instagram",
        url: "https://instagram.com/",
        bgColor:
          "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
      },
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
        bgColor: "#0077B5",
      },
    ],
  },
  {
    image: "/images/own/e6.jpeg",
    name: "Sabrina M Johnson",
    designation: "President and CEO Daré Bioscience, Inc. San Diego, CA",
    socialLinks: [
      {
        iconName: "icofont-facebook",
        url: "https://facebook.com/",
        bgColor: "#4267b2",
      },
      {
        iconName: "icofont-twitter",
        url: "https://twitter.com/",
        bgColor: "#38A1F3",
      },
      {
        iconName: "icofont-instagram",
        url: "https://instagram.com/",
        bgColor:
          "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
      },
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
        bgColor: "#0077B5",
      },
    ],
  },
  {
    image: "/images/own/e7.jpeg",
    name: "Marta Garcia Manrique",
    designation: "CPO-R&D Servier, Spain",
    socialLinks: [
      {
        iconName: "icofont-facebook",
        url: "https://facebook.com/",
        bgColor: "#4267b2",
      },
      {
        iconName: "icofont-twitter",
        url: "https://twitter.com/",
        bgColor: "#38A1F3",
      },
      {
        iconName: "icofont-instagram",
        url: "https://instagram.com/",
        bgColor:
          "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
      },
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
        bgColor: "#0077B5",
      },
    ],
  },
  {
    image: "/images/own/e8.jpeg",
    name: "Priya Hays",
    designation: "CEO, Hays Documentation Specialists, LLC, San Mateo, CA",
    socialLinks: [
      {
        iconName: "icofont-facebook",
        url: "https://facebook.com/",
        bgColor: "#4267b2",
      },
      {
        iconName: "icofont-twitter",
        url: "https://twitter.com/",
        bgColor: "#38A1F3",
      },
      {
        iconName: "icofont-instagram",
        url: "https://instagram.com/",
        bgColor:
          "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
      },
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
        bgColor: "#0077B5",
      },
    ],
  },
];

const Speakerskey: React.FC = () => {
  return (
<>
<div className="speakers-area ptb-120 pb-0">
  <div className="container">
    <div className="section-title">
      <span>Listen to the Keynote Speakers</span>
      <h2>Who&apos;s Keynote Speakers</h2>
      <div className="bar"></div>

      <div className="bg-title" style={{fontSize:'110px',right:'5%'}}>Keynote Speakers</div>

      
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
  <div style={{display:'flex',justifyContent:'center',alignItems:'center', 
    paddingTop:'30px'}}>
  <Link href="/speakers/KeynoteSpeakers" className="btn btn-primary">
        View More 
      </Link>
  </div>
</>


  );
};

export default Speakerskey;
