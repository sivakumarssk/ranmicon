"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { menus } from "../../../libs/menus";
import axios from "axios";

interface HomeData {
  logo: string;
  // Add other properties you expect from the API response
}

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const [homeData, setHomeData] = useState<HomeData | null>(null); 

  const homeApi = async (): Promise<void> => {
    try {
      const response = await axios.get("https://admin.emdcconference.com/api/");
      // console.log(response,'ghnfgh');
      setHomeData(response.data);
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.error || "An error occurred");
    }
  };



  // console.log(homeData);
  
  useEffect(()=>{
    homeApi()
  },[])

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="elkevent-nav">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container" style={{maxWidth:'1350px'}}>
            <Link href="/" className="navbar-brand">
              <Image
                src={homeData?.logo ? `https://admin.emdcconference.com${homeData.logo}` : '/images/own/proxima.png'}
                alt="logo"
                width={257}
                height={257}
              />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                {menus.map((menuItem) => (
                  <MenuItem key={menuItem.label} {...menuItem} />
                ))}
              </ul>

              {/* others-options */}
              <div className="others-option">
                <ul>
                  <li>
                    <Link href="/Register" className="btn btn-primary">
                      Register Now
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
