import axios from "axios";

const instance = axios.create({
  baseURL: "http://xue.cnkdl.cn:23683",
  timeout: 30000,
});

console.log("instance", instance.interceptors);
instance.interceptors.request.use(
  (config) => {
    console.log("config", config);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
