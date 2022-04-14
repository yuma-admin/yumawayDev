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
                  <h1>Weed And War</h1>

                  <div className="offerCopy">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <div>
                      <a
                        href="https://www.chabad.org/special/campaigns/ukraine/donate.htm"
                        target="_blank"
                        className="mainNavItem"
                      >
                        <img
                          className="donateImg"
                          src="/images/donate/donateButton.png"
                        />
                      </a>
                    </div>
                    <a
                      href="https://www.chabad.org/special/campaigns/ukraine/donate.htm"
                      target="_blank"
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
