import axios from "axios"
export const apiCall = axios.create({
    baseURL:"https://fakestoreapi.com/" // this is axios instance , every api call will go through this 
})

