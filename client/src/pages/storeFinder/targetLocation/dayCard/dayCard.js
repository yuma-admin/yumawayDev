import React from "react";
import './dayCard.css'
import { Container, Row, Col} from 'react-bootstrap';

export default function DayCard(props) {

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
      
    const store = props.store[0].hours
    const hours = []

    // Functions used to make the hours component for targeted locations.
    const makeHours = (storeHours) => {
        for (let key in storeHours){
            hours.push(
                <Row className='hourRow'>
                    <Col xs={6} className='day'>{key}</Col>
                    <Col xs={6} className='hours'>{storeHours[key]}</Col>
                </Row>
            )
        }
        return hours
    }
 
    return (
        <Container className='hourContainer'>{makeHours(store)}</Container>
        )
}