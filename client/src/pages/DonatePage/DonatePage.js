import React, { useState, useEffect } from "react";
import "./donatePageCSS.css";

// Meta Data
import { Helmet } from "react-helmet";

// IMPORT PAGE SECTIONS
import StateSelector from "../DealsPage/page-setup/StateSelector";
import TopPageDeals from "../DealsPage/page-setup/TopPageDeals";
import CouponGrid from "../DealsPage/page-setup/WeeklyDeals";

// IMPORT LOGIC FUNCTIONS
import dealsDataController from "../DealsPage/page-setup/logic/dealsDataController";
import dealsGridController from "../DealsPage/page-setup/logic/dealsGridBuilder";
import { BiCurrentLocation } from "react-icons/bi";
import ageGateLogic from "../../components/AgeGateModal/ageGateLogic";

// PAGE START
function CSSGrid() {
  // Jane's Tracking Script
  const janescript = document.createElement("script");
  janescript.async = true;
  janescript.src = `document.addEventListener("click", function(e) {
            var linkNode = e.srcElement.href ? e.srcElement : e.srcElement.parentNode;
        if(linkNode.localName !== "a" || linkNode.href.endsWith("#")) return;
        
        e.preventDefault();
        var currentQuery = location.search.substr(1);
        var url = new URL(linkNode.href);
        url.search += (url.search.indexOf('?') > -1 ? '&' : '?') + currentQuery;
        var dst = e.target;
        if (dst.target) {
        window.open(url.toString(), dst);
        } else {
        location.assign(url.toString());
        }
        })`;
  document.head.appendChild(janescript);

  // Sets Data Based on State Selected and Logic Functions (Above)
  const [stateSelected, setStateSelected] = useState("");
  const [carouselDeals, setCarouselDeals] = useState([""]);
  const [topRightCoupon, setTopRightCoupon] = useState("");
  const [weeklyDeals, setWeeklyDeals] = useState([""]);
  const [cssGridTemplate, setCssGridTemplate] = useState([""]);

  useEffect(() => {
    // Determines Page Setup Based on State Location Selected
    const chosenStateDealData = dealsDataController();
    // Builds CSS Grid Based on Number of Weekly Coupons for that State
    const chosenCssGrid = dealsGridController(
      chosenStateDealData.chosenWeeklyDeals.length
    );

    // Sets All Data Based on Above Logic
    setStateSelected(chosenStateDealData.stateData);
    setCarouselDeals(chosenStateDealData.chosenCarousel);
    setTopRightCoupon(chosenStateDealData.chosenTopRightCoupon);
    setWeeklyDeals(chosenStateDealData.chosenWeeklyDeals);
    setCssGridTemplate(chosenCssGrid);
  }, []);

  return (
    <>
      <Helmet>
        <title>Yuma Way | Donate for Ukraine</title>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Want to help Ukrainian refugees? Join us to donate and support the cause"
        ></meta>
        <link rel="canonical" href="http://yumaway.com/donate"></link>
      </Helmet>

      <section class="about">
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="aboutHeader">
                <div class="centeredImageContainer">
                  <img
                    src="/images/donate/supportUkraine.jpg"
                    alt="Donate for Ukraine"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="aboutPeople aboutYumaBorder">
                <div class="textContainer">
                  <div className="offerCopy">
                    <h1>420 – 2022 Celebration – FLOWER POWER</h1>

                    <p>
                      Russia launched a full-scale military invasion into
                      Ukraine on February 24, 2022, fighting has caused many
                      civilian deaths and pushed millions of Ukrainians to flee
                      to neighboring countries—the majority of whom have arrived
                      in Poland, a NATO country where U.S. troops are preparing
                      to offer assistance to refugees. Some refugees made it to
                      the US. Yuma Way is a cannabis company that is owned and
                      managed by the American Citizens that are Ukrainian
                      immigrants. Our thoughts and prayers are with Ukraine and
                      Ukrainian people.
                      <br />
                      <a
                        target="_blank"
                        href="https://www.westword.com/marijuana/ukraine-fundraiser-cannabis-keef-yuma-way-colorado-13878468"
                      >
                        We would like to raise awareness and help the people of
                        Ukraine.
                      </a>
                      <br />
                      <br />
                      <strong style={{ color:"red" }}>
                        During the month of October for $1 from sale of Wana
                        gummies will be donated to Ukrainian causes, and Yuma
                        Way will match that donation.
                      </strong>
                      <br />
                      <br />
                      STOP THE WAR $1 from every purchase Blue Razz Cola will be
                      donated to United for Ukraine Fund by Keef Cola, and Yuma
                      Way will match that donation for Blue Razz Cola sales in
                      all Yuma Way stores. Here are some ways to help:
                      <br />
                      <br />
                      1) Come to the Denver Capitol building every Saturday at
                      noon to show your support.
                      <br />
                      2) Donate to Ukrainian causes at sites such as:
                      <br />
                      <a
                        target="_blank"
                        href="https://www.ukrainiansofcolorado.org/#:~:text=We%20are%20Ukrainians%20of%20Colorado,through%20social%20functions%20and%20events."
                      >
                        www.ukraniansofcolorado.com
                      </a>
                      .
                      <br />
                      3) Through churches such as
                      <br />
                      <a
                        target="_blank"
                        href="https://bethelrussianchurch.org/"
                      >
                        www.bethel.community
                      </a>
                      <br />
                      4)Jewish Chabad organization
                      <br />
                      <a
                        target="_blank"
                        href="https://www.chabad.org/special/campaigns/ukraine/donate.htm"
                      >
                        https://www.chabad.org/special/campaigns/ukraine/donate.htm
                      </a>
                      <br />
                    </p>

                    <a
                      target="_blank"
                      href="https://www.chabad.org/special/campaigns/ukraine/donate.htm"
                      className="mainNavItem"
                    >
                      <img
                        className="donateUkraineImg"
                        src="/images/donate/donateUkraine.png"
                        alt="Donate for Ukraine"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="aboutImageContainer">
                <img
                  src="/images/about/aboutPageImageThree.jpg"
                  alt="Cannabis Joint on a Chessboard"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CSSGrid;
