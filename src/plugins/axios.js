import axios from "axios";
import { store } from "../store";

axios.defaults.baseURL =
    process.env.NODE_ENV === "production"
        ? "https://boom-brains-api.kdo.one"
        : "https://boom-brains-api.kdo.one";

axios.interceptors.request.use(config => {
    const accessToken = store.getters["auth/accessToken"];    

    config.headers["Content-type"] = "application/json";

    // if (language) {
    //     config.headers["App-Language"] = language;
    // }

    if (accessToken) {
        config.headers.Authorization = "Bearer " + accessToken;
        config.headers.Accept = "application/json";
    } else {
        config.headers.Authorization = null;
        config.headers["Secret-key"] = "Hackathon";
    }

    return config;
});

axios.interceptors.response.use(
    res => res,
    err => {
        if (401 === err.response.status) {
            store.dispatch("auth/logout", true);
        }
    }
);
