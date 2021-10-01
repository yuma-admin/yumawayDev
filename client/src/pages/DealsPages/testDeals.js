import react, {useState, useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./deals.css"

const fs = require('fs')

// Deals Data
import dealsData from "./updateDealsHere/TestingDealsData"

function DealsPage() {

const [pageGrid, setPageGrid] = useState("");

// Organize Coupons
// 1) If no coupons: return no rows under carousel
// 2) If 1 coupon: return 2 boxes in sidebar
// 3) If 2 coupons: return 2 boxes in Row 1 below carousel
// 4) If 3 coupons: return 3 boxes in Row 1
// 5) If 4 coupons: return 4 boxes in Row 1
// 6) If 5 coupons: return 3 boxes in Row 1, 2 boxes in Row 2
// 7) If 6 coupons: return 3 coupons in Row 1, 3 coupons in Row 2
// 8) If 7 coupons: return 4 coupons in Row 1, 3 coupons in Row 2
// 9) If 8 coupons: return 4 coupons in Row 1, 4 coupons in Row 2
// 10) If 9 coupons: return 3 coupons in all three rows
// 11) If 10 coupons: return 4 coupons in the fi

const weeklyCouponsUpdated = dealsData

if (dealsData > 3) {
    console.log(dealsData)
    
}
    return (
        <>
        <div className="container dealContainer" id="desktopAndTabletView">
        
            {/* STATE SELECTOR */}
            <div className="row">
                <div className="col-12">
                    
                        <div className="col-3 stateSelector">
                            <h3 className="currentState">Colorado Deals</h3>
                            <div className="selectableStates">
                                <a href="/michigan-deals"><h4>Michigan Deals</h4></a>
                            </div>
                        </div>
                    
                </div>
            </div>
            
            
            <div className="row" id="carouselRow"> 
                 
                {/* CAROUSEL */}       
                <div className="col-9">
                    
                    <div className="dealHeroImageContainer">
         
                        {/* CAROUSEL SHOP BUTTON AND LOGO (DESKTOP) */}
                        <div className="col-4">
                            
                            <div className="heroButtonContainer">
                                <img className="heroDealsLogo" 
                                    src="/images/deals/coloradoDeals/carousel/YumaWay_Horizontal_BlackGold_Solid.png" 
                                    alt="YumaWay Logo" 
                                />
                                <a href="/locations" className="newDealButton">
                                    Shop 
                                </a>
                            </div>
                            
                        </div>

                        {/* CAROUSEL COUPON IMAGES (DESKTOP) */}
                        <div id="mainTopCarousel">
                            <div className="heroButtonBackground"></div>
                            <Carousel 
                                controls={false} 
                                interval={4000} 
                                wrap={true}
                                touch={true}
                                fade={false}
                            >    
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/deals/coloradoDeals/carousel/heroFlower.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon One"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/deals/coloradoDeals/carousel/hero420Joints.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon Two"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/deals/coloradoDeals/carousel/heroConcentrates.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon Three"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                    
                            </Carousel>
                                    
                        </div>
                        
                        
                    </div> 
                </div>  
                        
                {/* RIGHT COLUMN */}
                <div className="col-3 ">
                    <div className="rightTopColumn">
                        
                            <div className="topRightCouponContainer" id="upperTopCouponContainer">
                                <a href="/locations">
                                    <img src="/images/deals/coloradoDeals/constant-coupon.png" alt="Cannabis Coupon One"/>
                                </a>
                            </div>    

                    </div>
                </div>
        
            </div>

            {/* ALL WEEKLY UPDATED COUPONS (DESKTOP) */}
            <div id="weeklyCouponRows">
                <div className="row">
                    {weeklyCouponsUpdated.map((coupon, index) => 
                    (
                        <div key={index} className="col-4">

                            <div className="fourthRowCoupon">
                                <a href="/locations">
                                    <img src={coupon.imgUrl} alt="Cannabis Coupon Three"/>
                                </a>
                            </div>

                        </div>
                    ))} 
                </div>
            </div>
        </div>

        {/* MOBILE VIEW */}
        
        <div className="container dealContainer" id="mobileView">
    
            {/* STATE SELECTOR (MOBILE) */}
            <div className="row">
                <div className="col-12">
                    <div className="stateSelector">
                        <h3 className="currentState">Colorado Deals</h3>
                        <div className="selectableStates">
                            <a href="/michigan-deals"><h4>Michigan Deals</h4></a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* CAROUSEL */}
            <div id="firstRow">
                <div className="row">
                    <div className="col-12">


                        {/* CAROUSEL SHOP BUTTON AND LOGO (MOBILE)*/}
                        <div className="dealHeroImageContainer">
            
                            <div className="col-5">
                                
                                <div className="heroButtonContainer">
                                    <img className="heroDealsLogo" src="/images/deals/coloradoDeals/carousel/YumaWay_Horizontal_BlackGold_Solid.png" alt="YumaWay Logo"/>
                                    <a href="/locations" className="newDealButton">
                                    Shop 
                                    </a>
                                </div>
                                
                            </div>

                        {/* CAROUSEL IMAGE(S) */}
                        <div id="mainTopCarousel">
                        <div className="heroButtonBackground"></div>
                            <Carousel 
                                controls={false} 
                                interval={4000} 
                                wrap={true}
                                indicators={false}
                            >    
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/deals/coloradoDeals/carousel/heroFlower.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon One"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/deals/coloradoDeals/carousel/hero420Joints.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon Two"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/deals/coloradoDeals/carousel/heroConcentrates.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon Three"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                    
                            </Carousel>
                        </div>
                            
                        </div> 
                    </div>
                </div>
            </div>

            {/* ALL MOBILE COUPONS NOT IN CAROUSEL */}
            {weeklyCouponsUpdated.map((coupon, index) => (
                <div key={index} id="weeklyCouponRowsMobile">
                    <div className="row">
                        <div className="col-12">
                            <div className="topRightCouponContainer" id="upperTopCouponContainer">
                                <a href="/locations">
                                    <img src={coupon.imgUrl} alt="Cannabis Coupon Mobile Two"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
            {/* FINAL COUPON FROM RIGHT COLUMN */}
            <div id="secondRow">
                    <div className="row">
                        <div className="col-12">
                            <div className="topRightCouponContainer" id="upperTopCouponContainer">
                                <a href="/locations">
                                    <img src="/images/deals/coloradoDeals/constant-coupon.png" alt="Cannabis Coupon Mobile Two"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    
    
    </>
    
    )
    
}
    
export default DealsPage;