import React, {useState} from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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

function App() {
  
  // Creates an overarching empty state that looks for
  const [storeSelected, setStoreSelected] = useState({
    storeId: '',
  });

  // If there is no store ID return the storeFinder component 
  return (
    
    <Router basename="/">
      <div className='holder'>

        <NavBar></NavBar>
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
    </Router>
  );

}


export default App;

