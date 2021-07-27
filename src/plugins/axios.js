import Vue from "vue";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/"
});
axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.prototype.$axios = axiosInstance;