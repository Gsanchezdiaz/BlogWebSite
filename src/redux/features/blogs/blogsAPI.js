import instanceAxios from "../../../components/instanceAxios.js"

export const getBlogs = async() => {
    const response = await instanceAxios.get('/blogs');
    return response.data;
}