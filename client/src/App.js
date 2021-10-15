import React, {useEffect, useState} from "react";
import Cookies from "js-cookie"
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//AGE GATE
import AgeGateModal from './pages/AgeGateModal/AgeGateModal'
import { createPortal } from "react-dom"

// MAIN PAGES 
import Home from './pages/Home/Home'
import ColoradoDeals from './pages/DealsPages/ColoradoDeals'
import MichiganDeals from './pages/DealsPages/MichiganDeals'
import About from './pages/About/About'
import TermsOfUse from './pages/TermsOfUse/TermsOfUse'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'

// STORE FINDER COMPONENTS
import StoreFinder from './components/storeFinder/StoreFinder'
import Menu from './components/menu/menu'

// NAV AND FOOTER COMPONENTS
import NavBar from './components/navbar/navBar'
import Footer from './components/footer/footer'

// TESTING PAGE (FOR TRYING NEW PAGES)
import TestPage from './pages/DealsPages/CSSGrid'

function App() {
  const yumaCookie = Cookies.get('yumawayAgeGateKey')

  const [showAgeGate,setAgeGate] = useState([false])
  console.log(yumaCookie)

  useEffect(() => {
    // If User Has LegalAge Cookie, Remove Modal
    if (yumaCookie==="yesLegalAge"){
      console.log(yumaCookie)
      document.getElementById("ageGateBackground").style.display = "none"
      setAgeGate(false)
    } else if (yumaCookie===!"yesLegalAge"){
      setAgeGate(true)
      
    } else {
      setAgeGate(true)
    }

    const url = window.location.href;
    const str = url.split("/")
    const currentHref = str[(str.length - 1)]
    console.log("Current HREF: " + currentHref)

    if (currentHref==="privacy-policy"){
      document.getElementById("ageGateBackground").style.display = "none"
      setAgeGate(false)
    }
  })

// Sets State and Cookie with Legal Age
const yesLegal = () => {
  Cookies.set('yumawayAgeGateKey', "yesLegalAge")
  setAgeGate(false)
}

const noLegal = () => {
  setAgeGate(true)
}
  // Builds Age Gate Modal
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

  

  // Creates an overarching empty state that looks for store (-Tyler)
  const [storeSelected, setStoreSelected] = useState({
    storeId: '',
  });

  return (
    
    <Router basename="/">
      <NavBar></NavBar>
      <div className='holder'>
      <div id="ageGateBackground"></div>

        
        <Switch>
          
          {/* HOME ROUTE */}
          <Route exact path="/" >
            <Home />
          </Route>

          {/* DEALS PAGE ROUTES */}
          <Route exact path="/colorado-deals" >
            <ColoradoDeals />
          </Route>
          <Route exact path="/michigan-deals" >
            <MichiganDeals />
          </Route>

          {/* ABOUT PAGE ROUTE */}
          <Route exact path="/about" >
            <About />
          </Route>

          {/* PRIVACY POLICY */}
          <Route exact path="/privacy-policy">
            <PrivacyPolicy/>
          </Route>
          
          {/* TERMS OF USE */}
          <Route exact path="/terms-of-use">
            <TermsOfUse/>
          </Route>

          {/* TESTING PAGE */}
          <Route exact path="/testing-page" >
            <TestPage />
          </Route>
          
          {/* STORE LOCATOR ROUTES */}
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

