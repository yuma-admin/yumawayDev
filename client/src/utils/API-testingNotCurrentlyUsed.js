import axios from "axios";

// TEST PROJECT: TRYING TO SET UP AN API WITH IHEARTJANE SO WE DON'T HAVE TO DISPLAY THEIR ENTIRE PAGE AND CAN PULL PRODUCTS FROM THEIR DATA //

// NOT CURRENTLY BEING USED IN THE ACTIVE CODE //

export default {
    getJaneAPI: function() {
        const queryURL = 'https://staging-api.iheartjane.com/partner/v1/stores/17/menu_products?visible=true&count=10&pagination_id=0'
        
        return axios ({
            method:'GET',
            url: queryURL,
            headers: {
                'Authorization': 'token 9a7MFk2e878iedixUh7Md95D',
                'Access-Control-Allow-Origin': "http://localhost:3000",
                'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
                'Access-Control-Allow-Headers': 'Authorization, Lang'
            }
        })
        
        
        
    }
}