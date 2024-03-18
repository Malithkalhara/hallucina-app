import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

export const getToken = () => localStorage.getItem("token");

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

export const ApiClient = axios.create({
    baseURL,
  timeout: 60000,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: getAuthorizationHeader(),
  },
});
