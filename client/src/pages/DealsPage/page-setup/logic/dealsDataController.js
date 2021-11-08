// IMPORT IMAGE DATA
import carouselDealsData from '../../updateDealsHere/carouselDealsData'
import weeklyDealsData from '../../updateDealsHere/weeklyDealsData.js'
const coloradoTopRight = "/images/deals/coloradoDeals/colorado-happy-hour.jpg"
const michiganTopRight = "/images/deals/michiganDeals/michigan-happy-hour.jpg"

// THIS FUNCTION DETERMINES STATE SELECTED AND SETS PAGE DATA AND IMAGE URLS
// HOW IT WORKS
// --- It reads the URL HREF (colorado-deals or michigan-deals)
// --- It then sets appropriate data for images and the state selector
// --- It builds this data into data objects that can be accessed through object notation on the deals page
// --- Currently, this data is then set as state on the Deals page

// IMAGES
//  --- Images are located in folders at root/client/public/images/
//  --- Image URLS are specified in the file paths imported at the top of this page
//  --- Image sizes/specs are specified in each file to inform designer
//  --- Image URLS must match an image name in the folder, or this page will break

// WEEKLY COUPONS
//  --- weeklyDealsData will be updated every Wednesday night
//  --- The images are located at root/client/public/images/deals/
//  --- After replacing above, make sure they match URLS in weeklyDealsData
//  - I recommend maintaining the name structure "coupon-1, coupon-2, etc." for easy changing, but you can do as you like

export default function dealsStateOrganizer(){

    // Reads URL HREF to Determine State Selected
    const url = window.location.href;
    const str = url.split("/")
    const currentHref = str[(str.length - 1)]
    console.log(currentHref)

    // Sets Page Data Based on URL Above
    // IF Colorado...
    if(currentHref==="colorado-deals") {
        // Builds Each Data Set as Objects for Deals Page
        const stateDealsDataObj = {
            stateData: {
                stateHeadline: "Colorado Deals",
                stateHref: "/michigan-deals",
                unSelectedState: "Michigan Deals",
            },
            chosenCarousel: carouselDealsData.colorado,
            chosenTopRightCoupon: coloradoTopRight,
            chosenWeeklyDeals: weeklyDealsData.colorado,
        }
        return stateDealsDataObj
    // If Michigan...
    } else if (currentHref==="michigan-deals") {
        const stateDealsDataObj = {
            stateData: {
                stateHeadline: "Michigan Deals",
                stateHref: "/colorado-deals",
                unSelectedState: "Colorado Deals",
            },
            chosenCarousel: carouselDealsData.colorado,
            chosenTopRightCoupon: michiganTopRight,
            chosenWeeklyDeals: weeklyDealsData.michigan,
        }
        return stateDealsDataObj
    // Anything else, return Colorado Data.
    } else {
        const stateDealsDataObj = {
            stateData: {
                stateHeadline: "Colorado Deals",
                stateHref: "/cannabis-deals/michigan-deals",
                unSelectedState: "Michigan Deals",
            },
            chosenCarousel: carouselDealsData.colorado,
            chosenTopRightCoupon: coloradoTopRight,
            chosenWeeklyDeals: weeklyDealsData.colorado,
        }
        return stateDealsDataObj
    }
}