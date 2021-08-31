import React from 'react';
import './footer.css';

const Footer=() => {
  return (
    <>
    <div className="footerBackground">
        <div className="row">
            <div className="col-6">
                <a href="/" className="footerTM">
                    ©2021 Yuma Way All Rights Reserved 
                </a>
            </div>
            <div className="col-6">
                <a href="/privacy-policy" className="footerNav">Privacy Policy</a> 
                <a href="/about" className="footerNav">About Us</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;