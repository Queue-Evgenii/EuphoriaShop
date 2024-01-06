import axios from 'axios';

axios.defaults.baseURL = "http://localhost/phpdb/euphoria/api";

axios.interceptors.request.use(config => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";

    return config;
});

export default axios;
