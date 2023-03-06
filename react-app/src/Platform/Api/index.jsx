import axios from "axios";


export const GetCategory = () => {
    return axios.get(`https://api.thecatapi.com/v1/categories`)
};

export const GetPictures = (page, id) => {
    return axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`)
}