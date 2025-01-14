// import React, {useState} from 'react';
// import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps"
// import mapStyles from "./mapStyles"
// import storeJson from "../locations/storeJson"
// import './MapStyle.css'

// // This component creates all google maps and is heavily based on the react-google-maps library
// export default function Maps(props) {
//   const zoom = parseInt(props.zoom)
//   const center = props.center
//   const options = {
//     styles: mapStyles,
//     disableDefaultUI: true,
//     zoomControl: true,
//     clickableIcons: true
//   }

//   function Map() {
//     const[selectedStore, setSelectedStore] = useState(null)

//     return(
//       // Calls the react-google-maps library
//         <GoogleMap
//         defaultZoom={zoom}
//         defaultCenter={{lat: center.lat, lng: center.lng}}
//         options={options}
//         >
//         {storeJson.map((coordinates) => (
//           // Places markers on the map for each store

//           <Marker
//             key={coordinates.id}
//             position={{ lat: coordinates.lat, lng: coordinates.lng }}
//             onClick={() => {
//               setSelectedStore(coordinates)
//             }}
//           >
//             {selectedStore && selectedStore.id === coordinates.id && (
//               // Creates the window that pops up when a marker is clicked
//            <InfoWindow onCloseClick={() => setSelectedStore(null)}
//            >
//              <div className='infoWindow'>
//                <a class="mapStoreLink" href={selectedStore.href}>
//                 <img className='storeImage' src={`${process.env.PUBLIC_URL}${selectedStore.exteriorStore}`} alt=''></img>
//                 <img className='storeLogo' src={`${process.env.PUBLIC_URL}${selectedStore.logoPinch}`} alt=''></img>
//                 <h4 id='address'>{selectedStore.address1}</h4>
//                 <h4 id='address'>{selectedStore.address2}</h4>
//                 <h3 className='phone'>{selectedStore.phone}</h3>
//                </a>
//                {/* <h3 className='phone'><a className='phoneLink' href={selectedStore.phone}>{selectedStore.phone}</a></h3> */}
//              </div>
//            </InfoWindow>
//          )}
//           </Marker>
//         ))}
//         </GoogleMap>
//     )
// }
//   // A wrapper for the map
//    const WrappedMap = withGoogleMap(Map);
//     return(
//             <WrappedMap
//             googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
//             loadingElement={<div style={{height: props.windowSize}}/>}
//             containerElement={<div style={{height: props.windowSize}}/>}
//             mapElement={<div style={{height: props.windowSize}}/>}
//             className='stickyMap'
//             />
//     )
// }

import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import storeJson from "../locations/storeJson";
import "./MapStyle.css";

// This component creates all Google Maps and is based on the @react-google-maps/api library
export default function Maps(props) {
  const zoom = parseInt(props.zoom);
  const center = props.center;
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    clickableIcons: true,
  };

  const [selectedStore, setSelectedStore] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries: ["geometry", "drawing", "places"], // Include required libraries
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      zoom={zoom}
      center={{ lat: center.lat, lng: center.lng }}
      options={options}
      mapContainerStyle={{ height: props.windowSize, width: "100%" }}
    >
      {storeJson.map((coordinates) => (
        <Marker key={coordinates.id} position={{ lat: coordinates.lat, lng: coordinates.lng }} onClick={() => setSelectedStore(coordinates)}>
          {selectedStore && selectedStore.id === coordinates.id && (
            <InfoWindow onCloseClick={() => setSelectedStore(null)}>
              <div className="infoWindow">
                <a className="mapStoreLink" href={selectedStore.href}>
                  <img className="storeImage" src={`${process.env.PUBLIC_URL}${selectedStore.exteriorStore}`} alt="" />
                  <img className="storeLogo" src={`${process.env.PUBLIC_URL}${selectedStore.logoPinch}`} alt="" />
                  <h4 id="address">{selectedStore.address1}</h4>
                  <h4 id="address">{selectedStore.address2}</h4>
                  <h3 className="phone">{selectedStore.phone}</h3>
                </a>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
}
// Key Changes
// useJsApiLoader:

// Replaces withGoogleMap and withScriptjs for loading the Google Maps API.
// Handles loading the script and provides a isLoaded flag.
// mapContainerStyle:

// The GoogleMap component now requires an explicit mapContainerStyle for height and width.
// Updated GoogleMap Props:

// Use zoom and center directly (no defaultZoom or defaultCenter).
// Marker and InfoWindow Behavior:

// Works similarly, but ensure state (selectedStore) is managed properly.
