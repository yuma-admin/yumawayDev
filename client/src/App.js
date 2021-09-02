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

// MAIN PAGES 
import Home from './pages/Home/Home'
import ColoradoDeals from './pages/DealsPages/ColoradoDeals'
import MichiganDeals from './pages/DealsPages/MichiganDeals'
import About from './pages/About/About'
import StoreFinder from './pages/StoreFinder/StoreFinder'

// STORE FINDER COMPONENTS
import Menu from './components/menu/menu'

// NAV AND FOOTER COMPONENTS
import NavBar from './components/navbar/navBar'
import Footer from './components/footer/footer'
import { createPortal } from "react-dom"

function App() {
  const yumaCookie = Cookies.get('yumaway')
  const [showAgeGate,setAgeGate] = useState([true])
  console.log(yumaCookie)

  useEffect(() => {
    console.log(yumaCookie)
    if (yumaCookie==="legalAge"){
      console.log(yumaCookie)
      setAgeGate(false)
    }
  })

  // Age Gate Display
 
 
  //Age Gate Status
  const yesLegal = () => {
    Cookies.set('yumaway', "legalAge")
    setAgeGate(false)
  }

  

  function handleCookie() {
    
  }

  

    const Modal = ({showAgeGate, setAgeGate}) => {
      const content = showAgeGate && (
        <AgeGateModal
          className="ageGateBox"
          yesButton={yesLegal}
          noButton={false}

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
      <div className='holder'>

        <NavBar></NavBar>
        <Switch>
          
          {/* HOME ROUTE */}
          <Route exact path="/" >
            <Home />
          </Route>

          {/* <Route exact path="/verify-your-age" >
            <AgeGate />
          </Route> */}

          {/* DEALS PAGE ROUTES */}
          <Route exact path="/colorado-deals" >
            <ColoradoDeals />
          </Route>
          <Route exact path="/michigan-deals" >
            <MichiganDeals />
          </Route>
          
          {/* STORE LOCATOR ROUTES */}
          <Route exact path="/locations/menu/:id" >
            <Menu Id={storeSelected.storeId} callBack={() => setStoreSelected}></Menu>
          </Route>
          <Route exact path='/locations/:store'>
            <StoreFinder callBack={setStoreSelected}></StoreFinder>
          </Route>
          <Route exact path='/locations'>
            <StoreFinder callBack={setStoreSelected}></StoreFinder>
          </Route>

          {/* ABOUT PAGE ROUTE */}
          <Route exact path="/about" >
            <About />
          </Route>
          
        </Switch>
        <Footer></Footer>
      </div>
      <Modal
          showAgeGate={showAgeGate}
          onClick={handleCookie}
        >
      </Modal>
    </Router>
    
  );

}


export default App;

