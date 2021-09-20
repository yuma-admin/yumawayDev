import { BiSlider } from "react-icons/bi";
import Carousel from 'react-bootstrap/Carousel'
import "./deals.css"


function ColoradoDeals() {

    // useEffect(() => {
    //     // If User Has LegalAge Cookie, Remove Modal
    //     slide.bs.carousel
    // })

    return (
        <>
        <div className="container dealContainer" id="desktopAndTabletView">
        
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
                            >    
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/coloradoDeals/A_heroHalfOunce-fullPhoto-noshade.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon One"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/coloradoDeals/hero420Joints-fullPhoto-noshade.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon Two"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/coloradoDeals/heroConcentrates-fullPhoto-half-GRAM.png" 
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
                                    <img src="/images/coloradoDeals/TheClear20-off.png" alt="Cannabis Coupon One"/>
                                </a>
                            </div>    
                        
                        
                            <div className="topRightCouponContainer" id="lowerTopCouponContainer">
                                <a href="/locations">
                                    <img src="/images/coloradoDeals/keef-4-for-4-20.png" alt="Cannabis Coupon Two"/>
                                </a>
                            </div>
                        
                    </div>
                </div>
        
            </div>

            <div className="row" id="fourthRow">
        
                <div className="col-3">
        
                    <div className="fourthRowCoupon">
                        <a href="/locations">
                            <img src="/images/coloradoDeals/20-half-ounce.png" alt="Cannabis Coupon Three"/>
                        </a>
                    </div>
        
                </div>
        
                <div className="col-3">
                    <div className="fourthRowCoupon">
                        <a href="/locations">
                            <img src="/images/coloradoDeals/6-dollar-joint.png" alt="Cannabis Coupon Five" />
                        </a>
                    </div>
                </div>
        
                <div className="col-3">
                    <div className="fourthRowCoupon">
                        <a href="/locations">
                            <img src="/images/coloradoDeals/rosinCoupon-tiny.png" alt="Cannabis Coupon Six"/>
                        </a>
                    </div>
                </div>
        
                <div className="col-3">
                    <div className="fourthRowCoupon">
                        <a href="/locations">
                            <img src="/images/coloradoDeals/flowerCoupon-3-types.png" alt="Cannabis Coupon Six" />
                        </a>
                    </div>
                </div>
        
            </div>
        
            <div id="bottomRow"></div>
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
                        <div className="dealHeroImageContainer">
            
                            <div className="col-5">
                                
                                <div className="heroButtonContainer">
                                    <img className="heroDealsLogo" src="/images/coloradoDeals/YumaWay_Horizontal_BlackGold_Solid.png" alt="YumaWay Logo"/>
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
                                indicators={false}
                            >    
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/coloradoDeals/A_heroHalfOunce-fullPhoto-noshade.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon One"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/coloradoDeals/hero420Joints-fullPhoto-noshade.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon Two"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/coloradoDeals/heroConcentrates-fullPhoto-half-GRAM.png" 
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

            <div id="secondRow">
                <div className="row">
                    <div className="col-12">
                        <div className="topRightCouponContainer" id="upperTopCouponContainer">
                            <a href="/locations">
                                <img src="/images/coloradoDeals/keef-4-for-4-20.png" alt="Cannabis Coupon Mobile Two"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="secondRow">
                <div className="row">
                    <div className="col-12">
                        <div className="topRightCouponContainer" id="upperTopCouponContainer">
                            <a href="/locations">
                                <img src="/images/coloradoDeals/TheClear20-off.png" alt="Cannabis Coupon Mobile Three"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="secondRow">
                <div className="row">
                    <div className="col-12">
                        <div className="topRightCouponContainer" id="upperTopCouponContainer">
                            <a href="/locations">
                                <img src="/images/coloradoDeals/6-dollar-joint.png" alt="Cannabis Coupon Mobile Four"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="secondRow">
                <div className="row">
                    <div className="col-12">
                        <div className="topRightCouponContainer" id="upperTopCouponContainer">
                            <a href="/locations">
                                <img src="/images/coloradoDeals/20-half-ounce.png" alt="Cannabis Coupon Mobile Five"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        
            <div id="secondRow">
                <div className="row">
                    <div className="col-12">
                        <div className="topRightCouponContainer" id="upperTopCouponContainer">
                            <a href="/locations">
                                <img src="/images/coloradoDeals/rosinCoupon-tiny.png" alt="Cannabis Coupon Mobile Six"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="secondRow">
                <div className="row">
                    <div className="col-12">
                        <div className="topRightCouponContainer" id="upperTopCouponContainer">
                            <a href="/locations">
                                <img src="/images/coloradoDeals/flowerCoupon-3-types.png" alt="Cannabis Coupon Mobile Six"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        
            
        </div>
    
    
    </>
    
    )
    
}
    
    
export default ColoradoDeals;