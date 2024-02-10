import instanceAxios from "../../../components/instanceAxios.js"

export const getRelatedBlogs = async (tags, search) => {

    const limit = 5;
    let queryString = tags.length > 0 
        ? `tags_like=${tags[0]}&id_ne=${id}&_limit=${limit}` 
        : `id_ne=${id}&_limit=${limit}`;

    const response = await instanceAxios.get(`/blogs?${queryString}`);

    return response.data;
}