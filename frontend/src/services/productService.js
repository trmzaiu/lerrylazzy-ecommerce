import axios from '../axios'

const getProductsByCategory = (categoryid) => {
    return axios.get(`/api/product?categoryid=${categoryid}`)
}

const getProductsBySubcategory = (subcategoryid) => {
    return axios.get(`/api/product?subcategoryid=${subcategoryid}`)
}

const getProductById = (productid) => {
    return axios.get(`/api/product?productid=${productid}`)
}

const getHotProduct = async () => {
    const response = await axios.get('/api/hot-product')
    return response
}

const getNewProduct = async () => {
    const response = await axios.get('/api/new-product')
    return response
}

const getAllReviews = (productid) => {
    return axios.get(`/api/product/review?productid=${productid}`)
}

const getProductByKeyword = (keyword) => {
    return axios.get(`/api/search-product?keyword=${keyword}`)
}

const getAllProducts = async () => {
    return axios.get('/api/admin/show-product')
    
}

export {
    getAllProducts, getAllReviews, getHotProduct,
    getNewProduct, getProductById, getProductByKeyword, getProductsByCategory, getProductsBySubcategory
}
