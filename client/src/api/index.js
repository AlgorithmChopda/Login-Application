import axios from 'axios'

const API = axios.create( {baseURL: "http://localhost:5000"})

export const LOGIN = (data) => API.post("/login-check", data)
export const SIGNUP = (data) => API.post("/signup-check", data);
export const CHANGE = (data) => API.post("/change-data", data);