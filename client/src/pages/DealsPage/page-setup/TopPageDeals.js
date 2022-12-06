import React, {useState, useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel'

function TopPageDeals(props) {

    return(
    <>
        <div id="desktopAndTabletView">
            <div className="row">
                
                <div className="col-9">    
                    <div className="carouselContainer">
            

                        {/* CAROUSEL SHOP BUTTON AND LOGO (DESKTOP) */}
                        {/* <div className="col-5 heroButtonBackground">
                                <div className="buttonLogoContainer">
                                    <img className="heroDealsLogo" 
                                        src="/images/deals/coloradoDeals/carousel/YumaWay_Horizontal_BlackGold_Solid.png" 
                                        alt="YumaWay Logo" 
                                    />
                                    <a href="/locations" className="newDealButton">
                                        Shop 
                                    </a>
                                </div>
                        </div> */}

                        {/* CAROUSEL COUPON IMAGES (DESKTOP) */}
                        <div id="mainCarouselContent">
                            <Carousel 
                                controls={false} 
                                interval={4000} 
                                wrap={true}
                                touch={true}
                                fade={false}
                            >    
                                {props.carouselData.map((coupon, index) => (
                                    <Carousel.Item key={index}>
                                    
                                        <a href="/locations">
                                            <img src={coupon.imgUrl}  
                                            className="carouselImage" 
                                            alt="Primary Cannabis Coupon One"
                                            />
                                        </a>
                                            
                                    </Carousel.Item>
                                    
                                ))}
                                    
                            </Carousel>
                        </div>       
                    </div>  
                </div>    
            
                <div className="col-3">
                    <div className="rightTopColumn">
                        
                            <div className="topRightCouponContainer" id="upperTopCouponContainer">
                                <a href="/locations">
                                    <img src={props.topRight} alt="Cannabis Coupon One"/>
                                </a>
                            </div>    

                    </div>
                </div>
            </div>
        </div>

        <div id="mobileView">

            <div className="row">
                <div className="col-12">
                    <div className="carouselContainer">
                        
                        <div className="col-5 heroButtonBackground">
                                <div className="buttonLogoContainer">
                                    <img src="/images/deals/coloradoDeals/carousel/YumaWay_Horizontal_BlackGold_Solid.png" alt="YumaWay Logo"/>
                                    <a href="/locations" className="newDealButton">
                                    Shop 
                                    </a>
                                </div>
                        </div>
                        <div id="mainCarouselContent">
                            {/* <div className="heroButtonBackground"></div> */}
                                <Carousel 
                                    controls={false} 
                                    interval={4000} 
                                    wrap={true}
                                    indicators={false}
                                >    
                                    {props.carouselData.map((coupon, index) => (
                                    <Carousel.Item key={index}>
                                    
                                        <a href="/locations">
                                            <img src={coupon.imgUrl}  
                                            className="carouselImage" 
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
    </>
    )
}

export default TopPageDeals;