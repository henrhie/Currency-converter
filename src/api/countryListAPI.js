
import axios from "axios"

const countryListUrl = "https://free.currconv.com/api/v7";
const API_KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
    baseURL : countryListUrl,
    params : {
        apiKey : API_KEY
    }
})