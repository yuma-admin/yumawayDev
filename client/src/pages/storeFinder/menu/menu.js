import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./menu.css";

//Meta Data
import { Helmet } from "react-helmet";

function Menu(props) {
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

  // This function will return an embedded i heart jane menu with the matching store ID
  const { id } = useParams();
  console.log("useParams - line 32 - id", id);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        // Load iHeartJane script first
        await loadScript(`https://api.iheartjane.com/v1/stores/${id}/embed.js`);

        // Load Surfside scripts overrides
        window.surfRetailOverrides = {
          accountId: "39ed7",
          channelId: "bf9bc",
          siteId: "511b5",
          platform: "iheartjane",
          storeId: id,
          headerPlacementId: "ib07h",
        };

        // Create and append the overlay script
        await loadScript("//cdn.surfside.io/ads/1.0.0/renderers/overlay.js");

        // Create and append the main retail script with necessary data attributes
        const retailScript = document.createElement("script");
        retailScript.id = "surf-retail-script";
        retailScript.src = "//cdn.surfside.io/ads/1.0.0/r.js";
        retailScript.dataset.accountid = "39ed7";
        retailScript.dataset.siteid = "511b5";
        document.body.appendChild(retailScript);
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    loadScripts();
  }, [id]);

  // ! Original iHeartJane script (11/8/24) - left here incase we ever need to reference/revert
  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = `https://api.iheartjane.com/v1/stores/${id}/embed.js`;
  //   script.async = true;

  //   document.body.appendChild(script);
  // }, 0);

  // This function sends the user back to the Store Finder page
  let history = useHistory();

  function backClick() {
    history.push("/");
  }

  return (
    <>
      <Helmet>
        <title>Yuma Way | Browse Our Current Products</title>
      </Helmet>
      <div className="container-fluid">
        <div onClick={backClick} className="menuBackButtonBar">
          Back
        </div>
        <div class="test" id="jane-frame-script"></div>
      </div>
    </>
  );
}
export default Menu;
