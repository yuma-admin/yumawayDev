import React, {useState, useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel'

function CouponGrid(props) {
  return (
    <>
    <div className="row">
        <div className="col-12">
            <div id="grid-container">

                {/* CAROUSEL */}
                <div id="gridId1">
                    <div className="carouselContainer">
                    
                        {/* BUTTON/LOGO */}
                        <div className="col-5 heroButtonBackground">
                            <div className="buttonLogoContainer">
                            <img
                                className="heroDealsLogo"
                                src="/images/deals/coloradoDeals/carousel/YumaWay_Horizontal_BlackGold_Solid.png"
                                alt="YumaWay Logo"
                            />
                            <a href="/locations" className="newDealButton">
                                Shop
                            </a>
                            </div>
                        </div>

                        {/* COUPON IMAGES */}
                        
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
                                <img
                                src={coupon.imgUrl}
                                className="carouselImage"
                                alt="Primary Cannabis Coupon One"
                                />
                            </a>
                            </Carousel.Item>
                        ))}
                        </Carousel>
                    </div>
                </div>

                {/* TOP-RIGHT COUPON */}
                <div className="topRightCouponContainer" id="gridId2">
                    <a href="/locations">
                        <img src={props.topRight} alt="Cannabis Coupon One"/>
                    </a>
                </div>

                {/* WEEKLY COUPONS */}
                {props.gridData.map((coupon, index) => (
                        <div key={index} className="gridId3">
                            <a href="/locations">
                            <img src={coupon.imgUrl} alt="Cannabis Coupon Three" />
                            </a>
                        </div>
                ))}
        
            </div>
        </div>  

        {/* <div className="row" id="mobileView">
            <div className="col-12">
                <div className="grid-item">
                <a href="/locations">
                    <img src={props.topRight} alt="Cannabis Coupon Mobile Two" />
                </a>
                </div>
            </div>
        </div> */}

    </div>
    </>
  );
}

export default CouponGrid;
