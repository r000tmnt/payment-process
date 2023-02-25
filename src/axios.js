import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://run.mocky.io/v3/'
})

axiosClient.interceptors.response.use(
    (response) => {
        const res = response?.data || response

        return res;
    },
    async (error) => {
        console.log('api_error :>>>', error.response.data)
        return error.response.data
    }    
)

export default axiosClient