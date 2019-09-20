import Axios from "axios";
const api = Axios.create({ baseURL: "https://api.github.com/users/" });

export default api;
