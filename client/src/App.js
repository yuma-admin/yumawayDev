import React, {useEffect, useState} from "react";
import Cookies from "js-cookie"
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// PRIMARY PAGES 
import Home from './pages/Home/Home'
import DealsPage from './pages/DealsPage/DealsPage'
import About from './pages/About/About'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import DonatePage from "./pages/DonatePage/DonatePage";

// STORE FINDER PAGE AND COMPONENTS
import StoreFinder from './pages/storeFinder/StoreFinder'
import Menu from './pages/storeFinder/menu/menu'

// NAV AND FOOTER COMPONENTS
import NavBar from './components/navbar/navBar'
import Footer from './components/footer/footer'

//AGE GATE
import AgeGateModal from './components/AgeGateModal/AgeGateModal'
import ageGateLogic from './components/AgeGateModal/ageGateLogic'
import { createPortal } from "react-dom"

function App() {

  //  AGE GATE MODAL
  const [showAgeGate,setAgeGate] = useState([""])
  useEffect(() => {
    // Confirms Whether to Show AgeGate
    const confirmation = ageGateLogic()
    setAgeGate(confirmation)
  })

  // If Yes Clicked: Sets AgeGateCookie
  const yesLegal = () => {
    Cookies.set('yumawayAgeGateKey', "yesLegalAge")
    setAgeGate(false)
  }
  // If No: HREF in the Modal code redirects them to Google Search
  const noLegal = () => {
    setAgeGate(true)
  }

  // Age Gate Modal
  const Modal = ({showAgeGate, setAgeGate}) => {
    
      const content = showAgeGate && (
        <AgeGateModal
          className="ageGateBox"
          yesButton={yesLegal}
          noButton={noLegal}

        />
        )
        return createPortal(content, document.body)
  }

  // Store Finder Router: Creates an overarching empty state that looks for store
  const [storeSelected, setStoreSelected] = useState({
    storeId: '',
  });
  // (From Old Developer)

  return (
    /////////////////
    // PAGE STARTS //
    /////////////////

    <Router basename="/">
      {/* NAVBAR found in Components */}
      <NavBar></NavBar>
      <div className='holder'>
      <div id="ageGateBackground"></div>

        
        <Switch>
          
          {/* HOME ROUTE */}
          <Route exact path="/" >
            <Home />
          </Route>

          {/* DEALS PAGE ROUTES */}
          <Route path={["/colorado-deals", "/michigan-deals"]}>
            <DealsPage />
          </Route>

          {/* ABOUT PAGE ROUTE */}
          <Route exact path="/about" >
            <About />
          </Route>

          {/* DONATE PAGE ROUTE */}
          <Route exact path="/donate" >
            <DonatePage />
          </Route>

          {/* PRIVACY POLICY */}
          <Route exact path="/privacy-policy">
            <PrivacyPolicy/>
          </Route>

          {/* STORE LOCATOR ROUTES */}
          {/* KEEP THIS ROUTER AT THE BOTTOM OR ANY PAGE BELOW WILL REDIRECT TO THIS */}
          <Router basename="/locations">
            <Route exact path="/menu/:id" >
              <Menu Id={storeSelected.storeId} callBack={() => setStoreSelected}></Menu>
            </Route>
            <Route exact path='/:store'>
              <StoreFinder callBack={setStoreSelected}></StoreFinder>
            </Route>
            <Route exact path='/'>
              <StoreFinder callBack={setStoreSelected}></StoreFinder>
            </Route>
          </Router>
        </Switch>
        <Footer></Footer>
      </div>

      {/* HIDDEN MODAL */}
      <Modal
          showAgeGate={showAgeGate}
          className="ageGateCSSKey"
          // data-keyboard="false" data-backdrop="static"
        >
      </Modal>
    </Router>
    
  );

}


export default App;

