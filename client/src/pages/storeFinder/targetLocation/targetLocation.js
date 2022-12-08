import React from "react";
import { Container, Row } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./targetLocation.css";
import storeJson from "../locations/storeJson.js";
import { BiLeftArrow } from "react-icons/bi";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import DayCard from "./dayCard/dayCard";
import { Link, useHistory } from "react-router-dom";

// Meta Data
import { Helmet } from "react-helmet";

// Selects the target store's information from the json file
function TargetLocation(props) {
  //Jane's Tracking Script
  const janescript = document.createElement("script");
  janescript.async = true;
  janescript.src = `document.addEventListener("click", function(e) {
        var linkNode = e.srcElement.href ? e.srcElement : e.srcElement.parentNode;
    if(linkNode.localName !== "a" || linkNode.href.endsWith("#")) return;
    
    e.preventDefault();
    var currentQuery = location.search.substr(1);
    var url = new URL(linkNode.href);
    url.search += (url.search.indexOf('?') > -1 ? '&' : '?') + currentQuery;
    var dst = e.target;
    if (dst.target) {
  window.open(url.toString(), dst);
    } else {
  location.assign(url.toString());
    }
  })`;
  document.head.appendChild(janescript);

  const filteredStore = storeJson.filter((store) => store.id === props.id);

  // function to return google map directions to the store
  function getDirections() {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${filteredStore[0].escapedUrlAddress}`,
      "_blank"
    );
  }

  // function to determine how many buttons to draw on the top of the page
  // Based on store type and always includes directions
  function determineButtonNumber() {
    if (filteredStore[0].type.Rec && filteredStore[0].type.Med) {
      return (
        <div>
          <Link to={`/menu/${filteredStore[0].type.Rec}`}>
            <button
              onClick={() => {
                chooseMenu(filteredStore[0].type.Rec);
              }}
              className="tri button"
            >
              SHOP REC
            </button>
          </Link>
          <Link to={`/menu/${filteredStore[0].type.Med}`}>
            <button
              onClick={() => {
                chooseMenu(filteredStore[0].type.Med);
              }}
              className="tri button"
            >
              SHOP MED
            </button>
          </Link>
          <button
            onClick={() => {
              getDirections();
            }}
            className="tri button"
          >
            DIRECTIONS{" "}
          </button>
          {filteredStore[0].vip && (
          <Link to={`{filteredStore[0].vip}`}>
            <button
              onClick={() => {
                chooseMenu(filteredStore[0].vip);
              }}
              className="tri button"
            >
              Rewards
            </button>
          </Link>
          )}
        </div>
      );
    }
    if (filteredStore[0].type.Rec && !filteredStore[0].type.Med) {
      return (
        <div>
          <Link to={`/menu/${filteredStore[0].type.Rec}`}>
            <button
              onClick={() => {
                chooseMenu(filteredStore[0].type.Rec);
              }}
              className="duo button"
            >
              SHOP REC
            </button>
          </Link>
          <button
            onClick={() => {
              getDirections();
            }}
            className="duo button"
          >
            DIRECTIONS
            {filteredStore[0].vip && (
          <Link to={`{filteredStore[0].vip}`}>
            <button
              onClick={() => {
                chooseMenu(filteredStore[0].vip);
              }}
              className="tri button"
            >
              Rewards
            </button>
          </Link>
          )}
          </button>
        </div>
      );
    }
    if (!filteredStore[0].type.Rec && filteredStore[0].type.Med) {
      return (
        <div>
          <Link to={`/menu/${filteredStore[0].type.Med}`}>
            <button
              onClick={() => {
                chooseMenu(filteredStore[0].type.Med);
              }}
              className="duo button"
            >
              SHOP MED
            </button>
          </Link>
          <button
            onClick={() => {
              getDirections();
            }}
            className="duo button"
          >
            DIRECTIONS
          </button>
          {filteredStore[0].vip && (
          <Link to={`{filteredStore[0].vip}`}>
            <button
              onClick={() => {
                chooseMenu(filteredStore[0].vip);
              }}
              className="tri button"
            >
              Rewards
            </button>
          </Link>
          )}
        </div>
      );
    }
    if (
      !filteredStore[0].type.Rec &&
      !filteredStore[0].type.Med &&
      filteredStore[0].type.Consumption
    ) {
      return (
        <div>
          <button
            onClick={() => {
              consumptionMenu();
            }}
            className="tri button"
          >
            VISIT US
          </button>
          <button
            onClick={() => {
              getDirections();
            }}
            className="tri button"
          >
            DIRECTIONS
          </button>
          <button
            onClick={() => {
              shopCBD();
            }}
            className="tri button"
          >
            SHOP CBD
          </button>
        </div>
      );
    } else {
    }
  }
  // Resets store id in previous state to false
  let history = useHistory();

  function goBack() {
    props.callBack({ id: "" });
    history.push("/locations");
  }

  // sends back state information to app.js to open the menu component
  function chooseMenu(id) {
    props.menuChosen({ menu: id });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  // Coffee Joint only specific external window opening
  const consumptionMenu = () => {
    window.open("https://thecoffeejointco.com/");
  };
  const shopCBD = () => {
    window.open("https://thecoffeejointcbd.com/");
  };

  // Returns standardized jsx for the selected store
  return (
    <div>
      <Helmet>
        <title>Yuma Way Locations | Find A Location Nearest You</title>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Find the nearest Colorado or Michigan Yuma Way location! Shop in-store or order online."
        ></meta>
      </Helmet>
      <Container className="containerPadding stickyContainer">
        <Row>
          <div className="backDiv">
            <button
              strokeWidth={0}
              onClick={() => goBack()}
              className="backButton"
            >
              <BiLeftArrow
                className="backArrow"
                size={28}
                outline="0"
                strokeWidth="0"
              />
            </button>
          </div>
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}${filteredStore[0].logoPinch}`}
            alt={filteredStore[0].alt}
          ></img>
        </Row>
        <Row>
          {/* THIS IS WHERE BUTTONS APPEAR */}
          <div className="buttonContainer">{determineButtonNumber()}</div>
        </Row>
      </Container>
      <Container className="containerPadding">
        <div className="storeLocation">
          <img
            className="storeImage"
            src={`${process.env.PUBLIC_URL}${filteredStore[0].exteriorStore}`}
            alt={filteredStore[0].exAlt}
          ></img>
        </div>
        <div className="phoneAndAddress">
          <div className="innerPhoneAndAddress">
            <div className="locationIcon">
              <FaMapMarkerAlt size={56}></FaMapMarkerAlt>
            </div>
            <h4
              className="hoverAddress"
              onClick={() => {
                getDirections();
              }}
            >
              {filteredStore[0].address1}
            </h4>
            <h4
              className="hoverAddress"
              onClick={() => {
                getDirections();
              }}
            >
              {filteredStore[0].address2}
            </h4>
            <div className="phoneIcon">
              <FaPhoneAlt size={56}></FaPhoneAlt>
            </div>
            <h4 className="phoneNumber">
              <a className="phoneLink" href={filteredStore[0].phoneLink}>
                {filteredStore[0].phone}
              </a>
            </h4>
            <div className="socialMediaContainer">
              <a href={filteredStore[0].facebook} target="_blank">
                <img
                  className="socialIcon"
                  src="/images/icons/facebook-icon-50px.png"
                />
              </a>
              <a href={filteredStore[0].instagram} target="_blank">
                <img
                  className="socialIcon"
                  src="/images/icons/instagram-icon-50px.png"
                />
              </a>
              <a href={filteredStore[0].twitter} target="_blank">
                <img
                  className="socialIcon"
                  src="/images/icons/twitter-icon-50px.png"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="hoursContainer">
          <h4>Hours</h4>
          <div className="storeTimes">
            <DayCard store={filteredStore}></DayCard>
          </div>
        </div>
        <div>
          <img
            className="storeImage"
            src={`${process.env.PUBLIC_URL}${filteredStore[0].interiorStore}`}
            alt={filteredStore[0].inAlt}
          ></img>
        </div>
        <div className="storeDescription">
          <h4> About Us</h4>
          <p>{filteredStore[0].storeDescription}</p>

          {/* Render VIP program button if location contain "vip" href in storeJson */}
          {filteredStore[0].vip && (
            <a href={filteredStore[0].vip} target="_blank">
              <button>VIP Program Login/Join</button>
            </a>
          )}
          
        </div>
      </Container>
    </div>
  );
}

export default TargetLocation;
