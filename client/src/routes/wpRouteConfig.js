import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// helper to check fetch status
import checkStatus from './etc/checkStatus';
// Some of our example components 
import LocationsPage from '../client/src/App';
import Home from './Components/Home';
import About from './Components/About';
import NotFound from './Components/NotFound';
import Header from './Components/Header';

const siteURL = 'http://yumawaydev.com';
const getPages = () => {
  return new Promise((resolve, reject) => {
    const endpoint = `${siteURL}/wp-json/better-rest-endpoints/v1/pages?content=false&acf=false&media=false&per_page=99`
  fetch(endpoint)
    .then(checkStatus)
    .then(response => response.json())
    .then(pages => {
      resolve(pages);
    })
    .catch(error => console.error(error))
    console.log(response)
  })
}
const identifyComponent = (page) => {
  // this is where you map your template names to a component 
  const components = {
    'home': Home,
    'about': About
  }
// check the template from the response 
 if(page.template !== 'default' && page.template){
   return components[page.template];
 } else {
   return Page
 }
}
class AppInit {
// build the app and routes with page response
  buildApp() {
   async function buildRoutes (){
     let pageList = await getPages();
    render(
      <div>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/" render={(props) => <Home siteURL={siteURL} {...props} />} exact />
             {pageList.map( (page, i) => {
                let Template = identifyComponent(page)
                let pageID = page.id;
                let parent = page.parent;
                return(
                  <Route
                    key={pageID}
                    path={`${parent ? '/'+parent :''}/${page.slug}`}
                    render={(props) => <Template pageID={pageID} siteURL={siteURL} {...props} />}
                    exact
                  />
                 )
                })}
               <Route component={NotFound} />
             </Switch>
           </div>
          </Router>
        </div>
        , document.getElementById('root')
      )
    }
    buildRoutes();
  }
/*
 * Run the App
 */
 run() {
   this.buildApp();
 }
}
new AppInit().run();