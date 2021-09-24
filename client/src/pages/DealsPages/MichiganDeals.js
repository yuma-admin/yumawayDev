import "./deals.css"

// Deals Data
import dealsData from "./updateDealsHere/michiganDealsData"

const heroCoupons = dealsData[0]
const secondaryDeals = dealsData[1]
const weeklyCouponsFirstRow = dealsData.slice(2,6);
const weeklyCouponsSecondRow = dealsData.slice(6,9);
const weeklyCouponsThirdRow = dealsData.slice(9,12);
const weeklyCouponsFourthRow = dealsData.slice(12,15);
const mobileAllExceptHero = dealsData.slice(1);

function MichiganDeals() {

    return (
        <>

        <div className="container dealContainer" id="desktopAndTabletView">

            {/* STATE SELECTOR */}
            <div className="row">
                <div className="col-12">
                    <div className="col-3 stateSelector">
                        <h3 className="currentState">Michigan Deals</h3>
                        <div className="selectableStates">
                            <a href="/colorado-deals"><h4>Colorado Deals</h4></a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* HERO CAROUSEL */}
            <div className="row" id="firstRow"> 
                
                <div className="col-9">

                    {/* HERO SHOP BUTTON */}
                    <div className="dealHeroImageContainer">
        
                        <div className="col-4">
                            
                            <div className="michiganHeroButtonContainer">
                                <img className="michiganHeroDealsLogo" src="/images/deals/michiganDeals/cannabay-OrangeLogo.png" alt="Cannabay Logo"/>
                                <a href="/locations" className="newDealButton">
                                Shop 
                                </a>
                            </div>
                            
                        </div>

                        {/* HERO SHOP BUTTON */}
                        <div id="mainTopCarousel">
                            <div id="topCarousel" className="carousel" data-bs-ride="carousel" data-bs-wrap="true">
                                <div className="carousel-inner">
                                    
                                    <div className="michiganHeroButtonBackground"></div>
                                    <div className="carousel-item active" data-interval="3000">
                                        
                                            <div className="d-block w-100">
                                                <a href="/locations">
                                                    <img src={heroCoupons.imgUrl} className=" carouselImage" alt="Cannabay Coupon of the Week"/>
                                                </a>
                                            </div>
                                                                                    
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div> 
                </div>  
                
                <div className="col-3 ">
                    <div className="rightTopColumn">
                        
                            <div className="topRightCouponContainer" id="upperTopCouponContainer">
                                <a href="/locations">
                                    <img src={secondaryDeals.imgUrl} alt="Refer 5 Friends, Receive $50 Store Credit"/>
                                </a>
                            </div>    
                        
                    </div>
                </div>

            </div>

            <div className="row" id="fourthRow">
            
                {weeklyCouponsFirstRow.map((coupon, index) => (
                    <div key={index} className="col-3">

                        <div className="fourthRowCoupon">
                            <a href="/locations">
                                <img src={coupon.imgUrl} alt="Michigan Marijuana Coupon One"/>
                            </a>
                        </div>
                

                    </div>
                ))}

            </div>

            <div className="row" id="fourthRow">
            
                {weeklyCouponsSecondRow.map((coupon, index) => (
                    <div key={index} className="col-4">

                        <div className="fourthRowCoupon">
                            <a href="/locations">
                                <img src={coupon.imgUrl} alt="Michigan Marijuana Coupon One"/>
                            </a>
                        </div>
                

                    </div>
                ))}

            </div>

            <div className="row" id="fourthRow">
            
                {weeklyCouponsThirdRow.map((coupon, index) => (
                    <div key={index} className="col-4">

                        <div className="fourthRowCoupon">
                            <a href="/locations">
                                <img src={coupon.imgUrl} alt="Michigan Marijuana Coupon One"/>
                            </a>
                        </div>
                

                    </div>
                ))}

            </div>
            <div className="row" id="fourthRow">
            
                {weeklyCouponsFourthRow.map((coupon, index) => (
                    <div key={index} className="col-4">

                        <div className="fourthRowCoupon">
                            <a href="/locations">
                                <img src={coupon.imgUrl} alt="Michigan Marijuana Coupon One"/>
                            </a>
                        </div>
                

                    </div>
                ))}

            </div>

            <div id="bottomRow"></div>
        </div>


        
        {/* MOBILE VIEW */}
        <div className="container dealContainer" id="mobileView">

            <div className="row">
                <div className="col-12">
                    <div className="stateSelector">
                        <h3 className="currentState">Michigan Deals</h3>
                        <div className="selectableStates">
                            <a href="/colorado-deals/"><h4>Colorado Deals</h4></a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="firstRow">
                <div className="row">
                    <div className="col-12">
                        <div className="dealHeroImageContainer">
            
                            <div className="col-5">
                                
                                <div className="michiganHeroButtonContainer">
                                    <img className="michiganHeroDealsLogo" src="/images/deals/michiganDeals/cannabay-OrangeLogo.png" alt="Cannabay Logo"/>
                                    <a href="/locations" className="newDealButton">
                                    Shop 
                                    </a>
                                </div>
                                
                            </div>

                            <div id="mainTopCarousel">
                                <div id="topCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-wrap="true">
                                    <div className="carousel-inner">

                                        <div className="michiganHeroButtonBackground"></div>
                                        <div className="carousel-item active" data-interval="3000">
                                            
                                                <div className="d-block w-100">
                                                    <a href="/locations">
                                                        <img src={heroCoupons.imgUrl} className=" carouselImage" alt="Michigan Cannabis Coupon One"/>
                                                    </a>
                                                </div>
                                                                                        
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div> 
                    </div>
                </div>
            </div>

            {mobileAllExceptHero.map((coupon, index) => (
            <div key={index} id="secondRow">
                <div className="row">
                    <div className="col-12">
                        <div className="topRightCouponContainer" id="upperTopCouponContainer">
                            <a href="/locations">
                                <img src={coupon.imgUrl} alt=""/>
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

export default MichiganDeals
