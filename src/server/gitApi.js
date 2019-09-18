import Axios from "axios";
const api = Axios.create({ baseURL: "https://api.github.com/repos/" });

export default api;
