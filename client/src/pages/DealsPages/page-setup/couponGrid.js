// import dealsData from "../updateDealsHere/TestingDealsData"
// import "../deals.css"

function coupon4Grid(props) {

    return(
    <>
    <div class="grid-container">
        {dealsData.map((coupon, index) => (
            <div key={index} class="`grid-item + {index}`">
                <img src={coupon.imgUrl} />
            </div>
        ))
        }
    </div>
            {/* <div className={props.bootstrapData}>

                <div className="weeklyCoupon">
                    <a href="/locations">
                        <img src={props.couponImage} alt="Cannabis Coupon Three"/>
                    </a>
                </div>

            </div> */}
        
        
    </>
    )
}

export default coupon4Grid; 

