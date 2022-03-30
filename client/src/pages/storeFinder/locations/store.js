import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./store.css";
import storeJson from "./storeJson.js";

function Store(props) {
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

  // Passes the id up a state level
  function chooseStore(id) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // props.callBack({id:id})
  }
  // Determines what types of store each dispensary is
  function determineStoreType(storeType) {
    if (storeType.Rec && storeType.Med) {
      return "Recreational and Medical";
    }
    if (storeType.Rec && !storeType.Med) {
      return "Recreational";
    }
    if (!storeType.Rec && storeType.Med) {
      return "Medical";
    }
    if (!storeType.Rec && !storeType.Med && storeType.Consumption) {
      return "Consumption Lounge";
    } else {
      return;
    }
  }

  // function to determine if a svg box should be drawn below a store entry
  // Does not draw one after the final store
  function determineEnd(storeArray, target) {
    if (storeArray[storeArray.length - 1].name === target.name) {
      return;
    } else {
      return (
        <div id="svgSeparator">
          <svg
            className="lineBox"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polyline
              strokeWidth="0.05"
              stroke="#d9ab73"
              fill="none"
              points="40,30 40,70"
            ></polyline>
            <polyline
              strokeWidth="0.05"
              stroke="#d9ab73"
              fill="none"
              points="60,70, 60,30 "
            ></polyline>
            <polyline
              stroke="#d9ab73"
              fill="none"
              points="40,30, 60,30 "
            ></polyline>
            <polyline
              stroke="#d9ab73"
              fill="none"
              points="40,70, 60,70 "
            ></polyline>
            <line
              stroke="#d9ab73"
              fill="none"
              x1="30"
              y1="50"
              x2="70"
              y2="50"
            ></line>
          </svg>
        </div>
      );
    }
  }

  // This function sorts an array containing all the stores so that they can be arranged by distance
  function organizeByDistance(templateArray, dirtyArray) {
    const organizedDistanceArray = [];
    for (let i = 0; i < templateArray.length; i++) {
      let target = templateArray[i].id;
      for (let j = 0; j < dirtyArray.length; j++) {
        if (Object.values(dirtyArray[j]).indexOf(target) > -1) {
          dirtyArray[j].distance = templateArray[i].distance;
          organizedDistanceArray.push(dirtyArray[j]);
        }
      }
    }
    return organizedDistanceArray;
  }

  // This will cause the stores to be organized by distance if the user location is known
  if (props.organizedCards.length > 1) {
    const organizedStore = organizeByDistance(props.organizedCards, storeJson);
    // make a component for each store in store.json after it has been organized
    return organizedStore.map((data) => (
      <div key={data.id}>
        <a href={"/locations/" + data.href}>
          <div id="buttonWrapper " onClick={() => chooseStore(data.id)}>
            <div className="yumaBorder">
              <div id="store" key={data.id}>
                <Container id="storeContainer">
                  <Row>
                    <Col id="logoColumn">
                      <img
                        src={`${process.env.PUBLIC_URL}${data.img}`}
                        alt={data.alt}
                      ></img>
                      <div className="reactButtonContainer">
                        <button className="storeButtonReact" href={data.href}>
                          {data.shop}
                        </button>
                      </div>
                    </Col>
                    <Col>
                      <div id="storeInfo">
                        <h4 id="distanceToStore">
                          {data.distance.toFixed(2)} miles
                        </h4>
                        <h4>{determineStoreType(data.type)}</h4>
                        <h4>{data.address1}</h4>
                        <h4>{data.address2}</h4>
                        <h4>{data.phone}</h4>
                      </div>
                    </Col>
                    <svg
                      className="line"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <line
                        strokeWidth="0.05"
                        stroke="#d9ab73"
                        fill="none"
                        x1="50"
                        y1="15"
                        x2="50"
                        y2="85"
                      ></line>
                    </svg>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
          {/* Why is this a comma? It needs it but why... (research) */}
          <div>{determineEnd(organizedStore, data)}</div>
        </a>
      </div>
    ));
  }

  // This will return the stores in a list as determined by their order in store.json
  else {
    // make a component for each store in store.json
    return storeJson.map((data) => (
      <div key={data.id}>
        <a href={"/locations/" + data.href}>
          <div id="buttonWrapper" onClick={() => chooseStore(data.id)}>
            <div className="yumaBorder">
              <div id="store" key={data.id}>
                <Container id="storeContainer">
                  <Row>
                    <svg
                      className="line"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <line
                        strokeWidth="0.05"
                        stroke="#d9ab73"
                        fill="none"
                        x1="50"
                        y1="15"
                        x2="50"
                        y2="85"
                      ></line>
                    </svg>

                    <Col id="logoColumn">
                      <img
                        src={`${process.env.PUBLIC_URL}${data.img}`}
                        alt={data.alt}
                      ></img>
                      <div className="reactButtonContainer">
                        <button className="storeButtonReact">
                          {data.shop}
                        </button>
                      </div>
                    </Col>

                    <Col>
                      <div id="storeInfo">
                        <h4>{determineStoreType(data.type)}</h4>
                        <h4>{data.address1}</h4>
                        <h4>{data.address2}</h4>
                        <h4>{data.phone}</h4>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </a>
        {/* Why is this a comma? It needs it but why... (research) */}
        <div>{determineEnd(storeJson, data)}</div>
      </div>
    ));
  }
}

export default Store;
