import axios from "axios";

const axiosClient=axios.create({
    baseURL:`https://localhost:5002/api`
})

export default axiosClient;