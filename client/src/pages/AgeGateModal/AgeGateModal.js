import React, { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import './ageGateModal.css'
  
function AgeGateModal(props) {

    return (
      <>
      <div id="ageGateModalContainer">

        <div className="ageLogoContainer">
          <img className="ageLogo" src="/images/homeImages/yumawayLogoHome.png"></img>
        </div>

        <div className="ageGateHeadline">
          <div className="row">
            <div className="col-12">      
              <div className="ageGateHeadline">
                Are you age 21 or older? Or do you own a medical card?
              </div>
            </div>
          </div>
        </div>
      
        <div className="ageGateButtons">
          <div className="row">
            <div className="col-12">      
              <button id="yesAgeGate" className="ageHover"
              onClick={props.yesButton}
              >
                Yes
              </button>
              <button id="noAgeGate" className="ageHover">
                No
              </button>
            </div>
          </div>
        </div>


      <div className="termsAndConditions">
        <div className="row">
          <div className="col-12">      
            <div className="">
              I agree to the terms and conditons by entering this website.
            </div>
          </div>
        </div>
      </div>


      </div>
      </>
  );
}

export default AgeGateModal;