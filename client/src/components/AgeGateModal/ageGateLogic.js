import Cookies from "js-cookie"

export default function ageGateLogic(){

    // CHECKS TO SEE IF USER HAS AGEGATE COOKIE
    const yumaCookie = Cookies.get('yumawayAgeGateKey')

    // IF USER IS ON PRIVACY POLICY PAGE, REMOVE AGE GATE
    const url = window.location.href;
    const str = url.split("/")
    const currentHref = str[(str.length - 1)]
    if (currentHref==="privacy-policy"){
        document.getElementById("ageGateBackground").style.display = "none"
        return false
        
    // IF USER HAS AGE GATE MODAL, REMOVE MODAL
    } else if (yumaCookie==="yesLegalAge"){
        document.getElementById("ageGateBackground").style.display = "none"
        return false
    // OTHERWISE KEEP THE MODAL
    } else if (yumaCookie===!"yesLegalAge"){
        return true
    } else {
        return true
    }
}