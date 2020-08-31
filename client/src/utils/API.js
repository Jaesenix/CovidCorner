import axios from 'axios';

export default {
    getArticles: () => {
        return axios.get("/api/articles")
    },
    checkUserInfo: () => {
        return axios.get("/api/user_data");
    },
    signup: (signupData) => {
        return axios.post("/api/signup", signupData)
    },
    login: (loginData) => {
        return axios.post("/api/login", loginData)
    },
    logout: () => {
        return axios.get("/logout");
    },
    getData: () => {
        return axios.get("/api/map_data");
    },
    getTestingCenters: (location) => {
        return axios.get("https://covid-19-testing.github.io/locations/" + location + "/complete.json")
    }
}

