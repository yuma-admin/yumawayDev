import { Data } from '@react-google-maps/api'
import Carousel from 'react-bootstrap/Carousel'
import "./deals.css"

const fs = require('fs')

// Deals Data
import dealsData from "./updateDealsHere/ColoradoDealsData"

function ColoradoDeals() {

// Organize Coupons
const weeklyCouponsChange = dealsData.slice(5);


    return (
        <>
        <div className="container dealContainer" id="desktopAndTabletView">
        
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
                        
                <div className="col-9">
                    
                    <div className="dealHeroImageContainer">
         
                        <div className="col-4">
                            
                            <div className="heroButtonContainer">
                                <img className="heroDealsLogo" 
                                    src="/images/coloradoDeals/YumaWay_Horizontal_BlackGold_Solid.png" 
                                    alt="YumaWay Logo" 
                                />
                                <a href="/locations" className="newDealButton">
                                    Shop 
                                </a>
                            </div>
                            
                        </div>

                        {/* REACT CAROUSEL */}

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
                                        <img src="/images/deals/coloradoDeals/heroFlower.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon One"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/deals/coloradoDeals/hero420Joints.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon Two"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/deals/coloradoDeals/heroConcentrates.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon Three"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                    
                            </Carousel>
                        </div>
                        
                        
                    </div> 
                </div>  
                        
                <div className="col-3 ">
                    <div className="rightTopColumn">
                        
                            <div className="topRightCouponContainer" id="upperTopCouponContainer">
                                <a href="/locations">
                                    <img src={dealsData[3].imgUrl} alt="Cannabis Coupon One"/>
                                </a>
                            </div>    
                        
                        
                            <div className="topRightCouponContainer" id="lowerTopCouponContainer">
                                <a href="/locations">
                                    <img src={dealsData[4].imgUrl} alt="Cannabis Coupon Two"/>
                                </a>
                            </div>
                        
                    </div>
                </div>
        
            </div>

            <div className="row" id="fourthRow">

                {weeklyCouponsChange.map((coupon) => (
                    <div className="col-3">
        
                        <div className="fourthRowCoupon">
                            <a href="/locations">
                                <img src={coupon.imgUrl} alt="Cannabis Coupon Three"/>
                            </a>
                        </div>
        
                    </div>
                ))} 
        
            </div>
        
            <div id="bottomRow"></div>
        </div>
    
    
    </>
    
    )
    
}
    
    
export default ColoradoDeals;