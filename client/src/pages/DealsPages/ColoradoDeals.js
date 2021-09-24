import Carousel from 'react-bootstrap/Carousel'
import "./deals.css"

const fs = require('fs')

// Deals Data
import dealsData from "./updateDealsHere/ColoradoDealsData"
// Organize Coupons
const heroCoupons = dealsData.slice(0,3);
const secondaryDeals = dealsData.slice(3,4)
const weeklyCouponsChange = dealsData.slice(4);
const mobileAllExceptHero = dealsData.slice(3);

function ColoradoDeals() {

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
            
            
            <div className="row" id="firstRow"> 
                 
                {/* HERO CAROUSEL */}       
                <div className="col-9">
                    
                    <div className="dealHeroImageContainer">
         
                        {/* SHOP BUTTON */}
                        <div className="col-4">
                            
                            <div className="heroButtonContainer">
                                <img className="heroDealsLogo" 
                                    src="/images/deals/coloradoDeals/YumaWay_Horizontal_BlackGold_Solid.png" 
                                    alt="YumaWay Logo" 
                                />
                                <a href="/locations" className="newDealButton">
                                    Shop 
                                </a>
                            </div>
                            
                        </div>

                        {/* CAROUSEL */}

                        <div id="mainTopCarousel">
                        <div className="heroButtonBackground"></div>
                            <Carousel 
                                controls={false} 
                                interval={4000} 
                                wrap={true}
                                touch={true}
                                fade={false}
                            >    

                            {heroCoupons.map((coupon, index) => (
                                <Carousel.Item key={index}>
                                
                                    <a href="/locations">
                                        <img src={coupon.imgUrl} 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon One"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                            ))} 
                                    
                            </Carousel>
                        </div>
                        
                        
                    </div> 
                </div>  
                        
                {/* HERO RIGHT COLUMN */}
                <div className="col-3 ">
                    <div className="rightTopColumn">
                        
                        {secondaryDeals.map((coupon, index) => (
                            <div key={index} className="topRightCouponContainer" id="upperTopCouponContainer">
                                <a href="/locations">
                                    <img src={coupon.imgUrl} alt="Cannabis Coupon One"/>
                                </a>
                            </div>    
                        ))} 

                    </div>
                </div>
        
            </div>

            {/* ALL OTHER COUPONS */}
            <div className="row" id="fourthRow">

                {weeklyCouponsChange.map((coupon, index) => (
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

        {/* MOBILE VIEW */}
        
        <div className="container dealContainer" id="mobileView">
    
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
            
            <div id="firstRow">
                <div className="row">
                    <div className="col-12">
                        {/* HERO SHOP BUTTON */}
                        <div className="dealHeroImageContainer">
            
                            <div className="col-5">
                                
                                <div className="heroButtonContainer">
                                    <img className="heroDealsLogo" src="/images/deals/coloradoDeals/YumaWay_Horizontal_BlackGold_Solid.png" alt="YumaWay Logo"/>
                                    <a href="/locations" className="newDealButton">
                                    Shop 
                                    </a>
                                </div>
                                
                            </div>

                        {/* HERO CAROUSEL */}
                        <div id="mainTopCarousel">
                        <div className="heroButtonBackground"></div>
                            <Carousel 
                                controls={false} 
                                interval={4000} 
                                wrap={true}
                                indicators={false}
                            >    
                            {heroCoupons.map((coupon, index) => (
                                <Carousel.Item key={index}>
                                
                                    <a href="/locations">
                                        <img src={coupon.imgUrl} 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon One"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                            ))}
                                
                                    
                            </Carousel>
                        </div>
                            
                        </div> 
                    </div>
                </div>
            </div>

            {/* ALL MOBILE COUPONS NOT IN CAROUSEL */}
            {mobileAllExceptHero.map((coupon, index) => (
                <div key={index} id="secondRow">
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
            
        </div>
    
    
    </>
    
    )
    
}
    
    
export default ColoradoDeals;