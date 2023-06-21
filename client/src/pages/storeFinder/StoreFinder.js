import React, {useState, useEffect} from "react";
import './storeFinder.css'
import Store from './locations/store'
import { Container, Row, Col} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Search from './search/search'
import Maps from './map/Maps'
import  TargetLocation from './targetLocation/targetLocation'
import storeJson from './locations/storeJson'
import {useParams} from 'react-router-dom'

// import Meta Data
import { Helmet } from 'react-helmet';


function StoreFinder(props) {

    //Jane's Tracking Script
    const janescript = document.createElement("script");
    janescript.async = true;
    janescript.src =     
    `document.addEventListener("click", function(e) {
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

    // Removes a store menu if its there
    const element = document.getElementById('menu-div')
    if (element){
        element.parentNode.removeChild(element);
    }

    // Id state 
    const [id, setId] = useState({
        id:""
    })    

    // Store distance state
    const [storeDistance,setStoreDistance] = useState({
        stores: [],
        zoom:null,
        center:null
    })

    // Default Map API information state
    const [mapParams,setMapParams] = useState({
        zoom:'5',
        center:{lat: 39.8283, lng: -98.5795}
    })
        
    // This Checks to see if a store should be pre-selected
    const {store} = useParams()
    
     
    useEffect(() => {

        if(store){

            // Converts /StoreName/ Route to ID Number
            let storeNumber;
            console.log(store)
                
            switch (store) {
              case "cherrypeak":
                storeNumber = "1671";
                break;
              case "twinpeaks":
                storeNumber = "1691";
                break;
              case "cannacity":
                storeNumber = "1525";
                break;
              case "berkeleydispensary":
                storeNumber = "1693";
                break;
              case "1136yuma":
                storeNumber = "17";
                break;
              case "cannabay":
                storeNumber = "2600";
                break;
              case "coffeejoint":
                storeNumber = "1";
                break;
              case "lowellgardens":
                storeNumber = "3456";
                break;
              case "courtsidegardens":
                storeNumber = "4371";
                break;
              case "urbangardens":
                storeNumber = "4404";
                break;
              case "stadiumgardens":
                storeNumber = "0000";
                break;
              case "releafonvine":
                storeNumber = "5125";
                break;
              case "parkhillgardens":
                storeNumber = "5084";
                break;
              case "morrisongardens":
                storeNumber = "4440";
                break;
              case "yumawaynj":
                storeNumber = "0517";
                break;

                break;
              default:
                storeNumber = "";

                return storeNumber;
            }
            
            const found = storeJson.find( ({ id }) => id === storeNumber)
                
                if (found) {
                    setId({id:storeNumber})
                }
                return 
        }
        
    },[store])


    // Has a specific store been selected state
    const [menuChosen,setMenuChosen] = useState({
        menu:''
    })

    console.log(menuChosen)

    // This triggers whenever the id or storeDistance state changes
    // This will then update the map zoom and centering 
    useEffect(() => {
        if(id.id){
            const filteredStores = storeJson.filter(store => store.id === id.id)
            setMapParams({...mapParams,zoom:'14',center:{lat:filteredStores[0].lat,lng:filteredStores[0].lng}})
        }
        if(!id.id && !storeDistance.zoom){
            setMapParams({...mapParams,zoom:'5',center:{lat: 39.8283, lng: -98.5795}})
        }
        if(storeDistance.zoom && storeDistance.center && !id.id){
            setMapParams({...mapParams,zoom:storeDistance.zoom, center: storeDistance.center})
        }
        
    },[id, storeDistance] )

    // Whenvever a menu is chosen this will update the storeId state
    useEffect(() => {
        if(menuChosen.menu){
            props.callBack({storeId:menuChosen.menu})
        }
    },[menuChosen])
  
    // If there is no id return the search component, the store component in locations, and a map component
    if(!id.id){
        return(
            <div className="storePageHeight">
            <Helmet>
                <title>Yuma Way Locations | Find A Location Nearest You</title>
                <meta charset="utf-8" />
                <meta name="description" content="Find the nearest Colorado, Michigan, California, or New Jersey Yuma Way location! Shop in-store or order online."></meta>
                <meta name="keywords" content="Yuma, Yuma Way, Dispensaries, Denver Dispensaries, Michigan Dispensaries, Saginaw Dispensaries, Bay City Dispensaries, Cherry Peak, Lowell Gardens, Cannabay, Cannacity, Twin Peaks, Berkley, The Cofee Joint, Courtside Gardens, New Jersey Dispensaries, NJ Dispensaries, Releaf on Vine, California Dispensaries, Oxnard Dispensaries"></meta>
                <link rel="canonical" href="https://www.yumaway.com/locations"></link>
            </Helmet>
            <Container fluid>
                <Row>
                    <Col xs={{span:12,order:2}} sm={{span:12,order:2}} lg={{span:4,order:1}} className='storeFinderInfo'> 
                        <div className='search'>
                            <Search callBack = {setStoreDistance}></Search>
                        </div>
                        <div className='storeCards'>
                            <Store organizedCards={storeDistance.stores} callBack = {setId}></Store>
                        </div>
                    </Col>
                    <Col xs={{span:12,order:1}} sm={{span:12,order:1}} lg={{span:8,order:2}} className='mapCol'>
                        <div className='mobileSearch'>
                            <Search callBack = {setStoreDistance}></Search>
                        </div>
                        <div className='stickyMap desktopMap'> 
                            <Maps center={mapParams.center} zoom={mapParams.zoom} windowSize={'calc(100vh  - 70px - 55px)'}></Maps> 
                        </div>
                         <div className='stickyMap mobileMap'> 
                            <Maps center={mapParams.center} zoom={mapParams.zoom -2} windowSize={'70vh'}></Maps> 
                        </div>
                    </Col>
                    
                </Row>
            </Container>
            </div>
        )
    }
    // If there is an Id return the Target Location component and a map component
    // Also returns a search component on mobile only
    if(id){
        return(
            <Container fluid>
            <Helmet>
                <title>Yuma Way Locations | Find A Location Nearest You</title>
                <meta charset="utf-8" />
                <meta name="description" content="Find the nearest Colorado or Michigan Yuma Way location! Shop in-store or order online."></meta>
                <link rel="canonical" href="https://www.yumaway.com/locations"></link>
            </Helmet>
            <Row>
                <Col xs={{span:12,order:2}} sm={{span:12,order:2}} lg={{span:4,order:1}} className='storeFinderInfo selectedStoreInfo'> 
                    <div className='storeCards'>
                        <TargetLocation  id = {id.id} callBack = {setId} menuChosen={setMenuChosen}></TargetLocation>
                    </div>
                </Col>
                <Col xs={{span:12,order:1}} sm={{span:12,order:1}} lg={{span:8,order:2}} className='stickyMap'>
                    <div className='mobileSearch'>
                            <Search callBack = {setStoreDistance} ></Search>
                        </div>
                    <div className='stickyMap desktopMap'> 
                        <Maps center={mapParams.center} zoom={mapParams.zoom} windowSize={'calc(100vh  - 70px - 55px)'}></Maps> 
                    </div>
                    <div className='stickyMap mobileMap'> 
                        <Maps center={mapParams.center} zoom={mapParams.zoom} windowSize={'70vh'}></Maps> 
                    </div>
                </Col>
                
            </Row>
        </Container>
        )
    }
}
export default StoreFinder;
