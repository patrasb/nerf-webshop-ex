import axios from "axios";

const productsRequestURL = 'http://private-5815fe-recommendationsknip.apiary-mock.com/products';

export const getAllProducts = () => {
    return axios({
        url: productsRequestURL,
        method: 'get'
    });
}