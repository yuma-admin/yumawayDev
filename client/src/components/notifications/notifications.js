import React, {useState} from "react";

const Notifications = () => {

    return (
        <div style={{ 
            backgroundColor: "#d9ab73", padding: "0.5rem", textAlign: "center" }}>
            <div style={{ margin: "0 auto", color: "rgb(24,24,24)", borderTop: "1px solid rgb(24,24,24)", borderBottom: "1px solid rgb(24,24,24)" , padding: "0px" }}>
                {/* <p style={{fontSize: 20}}>ANNOUNCEMENT</p> */}
                <p>ANNOUNCEMENT! We are REBRANDING to Gardens Dispensary and launching a BRAND NEW site in the near future! Please be on the look our for our changes in the coming days!</p>
            </div>
        </div>
    );
}

export default Notifications;