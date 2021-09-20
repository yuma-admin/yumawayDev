import React, { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import './ageGateModal.css'
  
function AgeGateModal(props) {

    return (
      <>
      <div id="ageGateModalContainer">
        <div className="ageGateModalContent">

          <div className="ageLogoContainer">
            <img className="ageLogo" src="/images/homeImages/yumawayLogoHome.png">
            </img>
          </div>

          <div className="ageGateHeadline">
            <div className="row">
              <div className="col-12">      
                <div className="ageGateHeadline">
                  <p className="ageGateCopyPadding">Are you age 21 or older?</p>
                  <p className="ageGateCopyPadding">Or do you own a medical card?</p>
                </div>
              </div>
            </div>
          </div>
        
          <div className="ageGateButtons">
            <div className="row">
                 
              <div className="col-6">
                <button id="yesAgeGate" className="yesNoButton"
                onClick={props.yesButton}
                >
                  Yes
                </button>
              </div>
              <div className="col-6">
                <a href="/terms-of-use">
                  <button id="noAgeGate" className="yesNoButton"
                  onClick={props.noButton}
                  href="/terms-of-use"
                  >
                    No
                  </button>
                </a>
              </div>  
            </div>
          </div>


          <div className="termsAndConditions">
            <div className="row">
              <div className="col-12">      
                <div className="">
                  I agree to the <a href="terms-of-use">terms and conditons</a> by entering this website.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  </>
  );
}

export default AgeGateModal;