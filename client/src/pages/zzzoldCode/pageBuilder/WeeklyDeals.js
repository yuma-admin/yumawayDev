import React, {useState, useEffect} from "react";

function CouponGrid(props) {

    console.log(props.cssGridTemplate)

    return(
    <>    
    <div className={props.cssGridTemplate}>
        {props.couponImages.map((coupon, index) => (
            
            <div key={index} className="gridItem" id="gridId1">
                    <a href="/locations">
                        <img src={coupon.imgUrl} alt="Cannabis Coupon Three"/>
                    </a>
            </div>
        ))}
    </div>
        

    <div id="mobileView">
        
            <div className="grid-item">
                <a href="/locations">
                    <img src={props.topRight} alt="Cannabis Coupon Mobile Two"/>
                </a>
            </div> 
        
    </div>

    </>
    )
}

export default CouponGrid; 

