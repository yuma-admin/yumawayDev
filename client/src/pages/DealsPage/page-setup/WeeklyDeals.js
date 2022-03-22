import React, {useState, useEffect} from "react";
import Ukraine from "../Images/UkraineDonation.png";

function CouponGrid(props) {

    console.log(props.cssGridTemplate)

    return(
    <>    
    <div className={props.cssGridTemplate}>
        {props.couponImages.map((coupon, index) => (
            
            <div key={index} className="gridItem" id="gridId1">
                    <a href="/locations">
                        <img src={coupon.imgUrl} alt="Cannabis Weekly Coupon"/>
                    </a>
            </div>
        ))}
        <div className="gridItem" id="gridId1">
            <a href="https://razomforukraine.org/" target="_blank">
                <img src={Ukraine} alt="Ukraine Donation Advertisement"/>
            </a>
        </div>
    </div>
        

    <div id="mobileView">
        
            <div className="gridItem" id="gridId1">
                <a href="/locations">
                    <img src={props.topRight} alt="Cannabis Coupon Mobile"/>
                </a>
            </div> 
    </div>

    </>
    )
}

export default CouponGrid; 

