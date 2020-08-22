import axios from "axios"
require("dotenv").config();

const baseUrl = "https://free.currconv.com/api/v7";
const API_KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
    baseURL : baseUrl,
    params : {
        compact : "ultra",
        apiKey : API_KEY
    }
})