import React from "react";
import "./navbar.css";
// import Logo from './../images/cropped-TOPNAVLOGO.png';

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div className="row">
          <div className="col-12">
            <div className="navbarImage">
              <a href="/" className="navLogo">
                <img src="/images/homeImages/cropped-TOPNAVLOGO.png" />
              </a>
            </div>
            <div className="navbarMainItems">
              <a href="/" className="mainNavItem">
                Home
              </a>
              {/* <a href="/colorado-deals" className="mainNavItem">
                Deals
              </a> */}
              {/* <nav className="dropdown">
                <ul>
                  <li>
                    <a href="#">Deals</a>
                    <ul>
                      <li className="dropdown-item">
                        <a href="/colorado-deals">Colorado</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="/michigan-deals">Michigan</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav> */}

              <a href="/locations" className="mainNavItem">
                Shop
              </a>
              <a href="/donate" className="mainNavItem">
                <img
                  className="donateImg"
                  src="/images/donate/donateButton.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
