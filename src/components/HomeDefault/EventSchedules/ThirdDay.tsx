"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const ThirdDay: React.FC = () => {
  return (
    <>
      <Accordion>
      <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">

              </div>

              <div className="schedule-info">
                <h3>Session-III</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>Tom Cruise</span> CEO of EnvyTheme
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 07:00AM - 10:00AM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          {/* <AccordionItemPanel>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took Link galley of
              type and scrambled it to make Link type specimen book.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Hall 121, Building C/A , King Street ,{" "}
                  <span>USA</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel> */}
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author author-multi">

              </div>

              <div className="schedule-info">
                <h3>Networking Break</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>Leonardo DiCaprio</span> of USA Inc
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 10:00AM - 10:15AM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          {/* <AccordionItemPanel>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took Link galley of
              type and scrambled it to make Link type specimen book. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took Link galley of type and
              scrambled it to make Link type specimen book.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Hall 132, Building C , King Street ,{" "}
                  <span>USA</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel> */}
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author author-multi">
              </div>

              <div className="schedule-info">
                <h3>Session-III</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>Robert Downey</span> of USA Inc
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 10:15AM - 12:55PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          {/* <AccordionItemPanel>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took Link galley of
              type and scrambled it to make Link type specimen book. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took Link galley of type and
              scrambled it to make Link type specimen book.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Hall 1, Building C , King Street ,{" "}
                  <span>USA</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel> */}
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author author-multi">

              </div>

              <div className="schedule-info">
                <h3>Networking Lunch</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>Brad Pitt</span> of USA Inc
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 12:55PM - 13:25PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          {/* <AccordionItemPanel>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took Link galley of
              type and scrambled it to make Link type specimen book. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took Link galley of type and
              scrambled it to make Link type specimen book.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Hall 1, Building C , King Street ,{" "}
                  <span>USA</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel> */}
        </AccordionItem>


        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">

              </div>

              <div className="schedule-info">
                <h3>Session-IV</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>Tom Cruise</span> CEO of EnvyTheme
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 13:25PM - 16:05PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          {/* <AccordionItemPanel>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took Link galley of
              type and scrambled it to make Link type specimen book.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Hall 121, Building C/A , King Street ,{" "}
                  <span>USA</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel> */}
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author author-multi">

              </div>

              <div className="schedule-info">
                <h3>Networking Break</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>Leonardo DiCaprio</span> of USA Inc
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 16:05PM - 16:20PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          {/* <AccordionItemPanel>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took Link galley of
              type and scrambled it to make Link type specimen book. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took Link galley of type and
              scrambled it to make Link type specimen book.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Hall 132, Building C , King Street ,{" "}
                  <span>USA</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel> */}
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author author-multi">

              </div>

              <div className="schedule-info">
                <h3>Session-IV</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>Robert Downey</span> of USA Inc
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 16:20PM - 18:00PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          {/* <AccordionItemPanel>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took Link galley of
              type and scrambled it to make Link type specimen book. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took Link galley of type and
              scrambled it to make Link type specimen book.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Hall 1, Building C , King Street ,{" "}
                  <span>USA</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel> */}
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author author-multi">
              </div>

              <div className="schedule-info">
                <h3>Departures</h3>

                <ul>
                  {/* <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>Brad Pitt</span> of USA Inc
                  </li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> 18:00PM - 18:30PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          {/* <AccordionItemPanel>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took Link galley of
              type and scrambled it to make Link type specimen book. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took Link galley of type and
              scrambled it to make Link type specimen book.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Hall 1, Building C , King Street ,{" "}
                  <span>USA</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel> */}
        </AccordionItem>

      </Accordion>
    </>
  );
};

export default ThirdDay;
