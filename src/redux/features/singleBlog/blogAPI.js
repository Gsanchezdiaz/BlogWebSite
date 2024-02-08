import instanceAxios from "../../../components/instanceAxios.js"

export const getBlog = async(id) => {
    const response = await instanceAxios.get(`/blogs/${id}`);
    return response.data;
}