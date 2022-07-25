import './stateSelectModal.css'
  
function StateSelectModal(props) {
  return (
    <>
      <div id="stateModalContainer">
        <div className="stateModalContent">
          <div className="stateLogoContainer">
            <img src="/images/homeImages/yumawayLogoHome.png"></img>
          </div>

          <div className="stateModalHeadline">
            <div className="row">
              <div className="col-12">
                <div className="stateModalHeadline">
                  <p className="stateModalCopyPadding">
                    See Our Deals In Your State
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="stateModalButtons">
            <div className="row">
              {/* Colorado */}
              <div className="col-6">
                <a href="/colorado-deals/">
                  <button className="button">Colorado</button>
                </a>
              </div>
              {/* Michigan */}
              <div className="col-6">
                <a href="/michigan-deals/">
                  <button className="button">Michigan</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StateSelectModal;