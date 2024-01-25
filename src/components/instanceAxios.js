import axios from "axios"

const instanceAxios = axios.create({
    baseURL: 'localhost:5000/',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

export default instanceAxios