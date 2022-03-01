import React, {useState, useEffect} from "react";
import "./newDealsCSS.css"

// Meta Data
import { Helmet } from 'react-helmet';

// IMPORT PAGE SECTIONS
import StateSelector from './page-setup/StateSelector'
import TopPageDeals from './page-setup/TopPageDeals'
import CouponGrid from './page-setup/WeeklyDeals'

// IMPORT LOGIC FUNCTIONS
import dealsDataController from "./page-setup/logic/dealsDataController"
import dealsGridController from "./page-setup/logic/dealsGridBuilder"

// PAGE START
function CSSGrid() {
    
    // Jane's Tracking Script
    const janescript = document.createElement("script");
    janescript.async = true;
    janescript.src =     
    `document.addEventListener("click", function(e) {
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
    document.head.appendChild("janescript");
    
    // Sets Data Based on State Selected and Logic Functions (Above)
    const [stateSelected, setStateSelected] = useState("");
    const [carouselDeals,setCarouselDeals] = useState([""]);
    const [topRightCoupon, setTopRightCoupon] = useState("")
    const [weeklyDeals, setWeeklyDeals] = useState([""]);
    const [cssGridTemplate, setCssGridTemplate] = useState([""]);

    useEffect(() => {

        // Determines Page Setup Based on State Location Selected
        const chosenStateDealData = dealsDataController()
        // Builds CSS Grid Based on Number of Weekly Coupons for that State
        const chosenCssGrid = dealsGridController(chosenStateDealData.chosenWeeklyDeals.length)

        // Sets All Data Based on Above Logic
        setStateSelected(chosenStateDealData.stateData)
        setCarouselDeals(chosenStateDealData.chosenCarousel)
        setTopRightCoupon(chosenStateDealData.chosenTopRightCoupon)
        setWeeklyDeals(chosenStateDealData.chosenWeeklyDeals)
        setCssGridTemplate(chosenCssGrid)

    }, [])

    return (
        <>
        <Helmet>
            <title>Yuma Way 
            | Browse Our Current Deals</title>
            <meta charset="utf-8" />
            <meta name="description" content="Browse Our Current Deals for Both Colorado & Michigan Locations"></meta>
        </Helmet>
        <div className="dealContainer">
        
            {/* STATE SELECTOR  (Dropdown Menu) */}
            <div id="dealsStateSelectorSection">
                <StateSelector stateSelectedData={stateSelected} />
            </div> 

            {/* TOP OF PAGE (Main Carousel and Right Column) */}   
            <div id="dealsTopPageSection">  
                <TopPageDeals carouselData={carouselDeals} topRight={topRightCoupon} />
            </div>

            {/* WEEKLY DEALS (UPDATED EVERY WEEK) */}
            {/* SEE updateDealsHere folder for details */}
            <div id="dealsWeeklyUpdate">
                <CouponGrid 
                    topRight={topRightCoupon}
                    carouselData={carouselDeals} 
                    couponImages={weeklyDeals} 
                    cssGridTemplate={cssGridTemplate} 
                />
            </div>
        
        </div>
    

    </>
    
    )
    
}
    
    
export default CSSGrid;