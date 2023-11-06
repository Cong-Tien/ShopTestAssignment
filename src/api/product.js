import React from 'react'
import axiosClient from '../config/api';
import { API_PATH } from '../const/api';

const productAPI = {
    getProductList: () => {
        return axiosClient.get(API_PATH.PRODUCT_LIST);
    },
}
export default productAPI
