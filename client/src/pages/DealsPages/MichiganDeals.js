// import "./deals.css"
import Carousel from 'react-bootstrap/Carousel'

// Deals Data
import dealsData from "./updateDealsHere/michiganDealsData"

// THIS CODE BUILDS THE PAGE BASED ON THE NUMBER OF IMAGES IN THE JSON ABOVE
if (dealsData.length > 10){
    const dealsRow1 = "col-3"
    const dealsRow2 = "col-4"
    const dealsRow3 = "col-4"
    const dealsRow4 = "col-4"
}
// if (dealsData.length > )

const weeklyCouponsUpdated = dealsData // All Deals Except Carousel
// const weeklyCouponsUpdatedMobile = dealsData;
// const weeklyCouponsFirstRow = dealsData.slice(2,6);
// const weeklyCouponsSecondRow = dealsData.slice(6,9);
// const weeklyCouponsThirdRow = dealsData.slice(9,12);
// const weeklyCouponsFourthRow = dealsData.slice(12,15);

function MichiganDeals() {

    return (
        <>

        {/* DESKTOP VIEW */}
        <div className="container dealContainer" id="desktopAndTabletView">

            {/* STATE SELECTOR (DESKTOP) */}
            <div className="row">
                <div className="col-12">
                    <div className="stateSelector">
                        <h3 className="currentState">Michigan Deals</h3>
                        <div className="selectableStates">
                            <a href="/colorado-deals"><h4>Colorado Deals</h4></a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* CAROUSEL */}
            <div id="firstRow">
                <div className="row"> 
                    
                    <div className="col-9">
                        <div className="carouselContainer">
                            
                            {/* CAROUSEL SHOP BUTTON AND LOGO (DESKTOP)*/}
                            <div className="col-5 heroButtonBackground">
                                
                                    <div className="buttonLogoContainer">
                                        <img src="/images/deals/michiganDeals/carousel/cannabay-OrangeLogo.png" alt="Cannabay Logo"/>
                                        <a href="/locations" className="newDealButton">
                                        Shop 
                                        </a>
                                        
                                    </div>
                                
                            </div>

                            {/* CAROUSEL IMAGE(S) (DESKTOP) */}
                            <div id="mainCarouselContent">
                                <div className="carousel" data-bs-ride="carousel" data-bs-wrap="true">
                                        
                                        {/* <div className="heroButtonBackground"></div> */}
                                        
                                        <Carousel 
                                            controls={false} 
                                            interval={false} 
                                            wrap={false}
                                            indicators={false}
                                        >    
                                            <Carousel.Item>
                                            
                                                <a href="/locations">
                                                    <img src="/images/deals/michiganDeals/carousel/michiganHero-compressed.jpg" 
                                                    className="carouselImage" 
                                                    className=" carouselImage" 
                                                    alt="Cannabay Coupon of the Week"
                                                    />
                                                </a>
                                                    
                                            </Carousel.Item>
                                                
                                        </Carousel>
                                </div>
                            </div>
                            
                        </div> 
                    </div>  
                    
                    {/* REFER 5 FRIENDS IMAGE (DESKTOP) */}
                    <div className="col-3 ">
                        <div className="rightTopColumn">
                            
                                <div className="topRightCouponContainer" id="upperTopCouponContainer">
                                    <a href="/locations">
                                        <img src='/images/deals/michiganDeals/refer5Friends.jpg' alt="Refer 5 Friends, Receive $50 Store Credit"/>
                                    </a>
                                </div>    
                            
                        </div>
                    </div>

                </div>

                <div className="row" id="weeklyCouponRows">
                
                    {/* ALL WEEKLY UPDATED COUPONS (DESKTOP) */}
                    {weeklyCouponsUpdated.map((coupon, index) => (
                        <div key={index} className="col-6">

                            <div className="weeklyCoupon">
                                <a href="/locations">
                                    <img src={coupon.imgUrl} alt="Michigan Marijuana Coupon One"/>
                                </a>
                            </div>
                    

                        </div>
                    ))}

                </div>
            </div>
            <div id="bottomRow"></div>
        </div>


        
        {/* MOBILE VIEW */}
        <div className="container dealContainer" id="mobileView">

            {/* STATE SELECTOR (MOBILE)*/}
            <div className="row">
                <div className="col-12">
                    <div className="stateSelector">
                        <h3 className="currentState">Michigan Deals</h3>
                        <div className="selectableStates">
                            <a href="/colorado-deals"><h4>Colorado Deals</h4></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* CAROUSEL (MOBILE)*/}
            <div id="firstRow">
                <div className="row">
                    <div className="col-12">

                        {/* CAROUSEL SHOP BUTTON AND LOGO (MOBILE)*/}
                        <div className="carouselContainer">
                            
                            <div className="col-5 heroButtonBackground">
                                <div className="heroButtonContainer">
                                    <img className="heroDealsLogo" src='/images/deals/michiganDeals/carousel/cannabay-OrangeLogo.png' alt="Cannabay Logo"/>
                                    <a href="/locations" className="newDealButton">
                                    Shop 
                                    </a>
                                </div>                                
                            </div>

                            {/* CAROUSEL COUPONS (MOBILE) */}
                            <div id="mainCarouselContent">
                                
                                    {/* <div className="heroButtonBackground"></div> */}
                                    <Carousel 
                                    controls={false} 
                                    interval={false} 
                                    wrap={false}
                                    indicators={false}
                                    >    
                                        <Carousel.Item>
                                        
                                            <a href="/locations">
                                                <img src="/images/deals/michiganDeals/carousel/michiganHero-compressed.jpg" 
                                                className="carouselImage" 
                                                alt="Cannabay Coupon of the Week"
                                                />
                                            </a>
                                                
                                        </Carousel.Item>
                                        
                                    </Carousel>
                            </div>
                            
                        </div> 
                    </div>
                </div>
            </div>

            {/* ALL WEEKLY COUPONS THAT GET UPDATED */}
            {weeklyCouponsUpdated.map((coupon, index) => (
            <div key={index} id="secondRow">
                <div className="row">
                    <div className="col-12">
                        <div className="topRightCouponContainer">
                            <a href="/locations">
                                <img src={coupon.imgUrl} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            ))}

            {/* FINAL 'REFER 5 FRIENDS' IMAGE */}
            <div id="secondRow">
                <div className="row">
                    <div className="col-12">
                        <div className="topRightCouponContainer">
                            <a href="/locations">
                                <img src="/images/deals/michiganDeals/refer5friends.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </>
    )
}

export default MichiganDeals
