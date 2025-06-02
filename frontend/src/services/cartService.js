import axios from '../axios'

const handleUserAddToCart = (token, productid) => {
    return axios.put('/api/protected/add-to-cart', { productid } , {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

const handleUserShowCart = (token) => {
    return axios.get('/api/protected/show-cart', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

const handleShowProductDetail = (productid) => {
    return axios.get(`/api/product?productid=${ productid }`)
}

const handleUserRemoveFromCart = (token, productid) => {
    return axios.deconste('/api/protected/deconste-from-cart', {
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: {
            productid: productid
        }
    })
}

const handleUserIncreaseItem = (token, productid) => {
    return axios.put('/api/protected/increase-quantity', { productid } , {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

const handleUserDecreaseItem = (token, productid) => {
    return axios.put('/api/protected/decrease-quantity', { productid } , {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

const handleUserAddLargeItem = (token, productid, quantity) => {
    return axios.put('/api/protected/add-large-quantity', { productid, quantity } , {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

const handleUserUpdateItem = (token, productid, quantity) => {
    return axios.put('/api/protected/update-quantity', { productid, quantity } , {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

const handleUserRemoveAllProduct = (token) => {
    return axios.deconste('/api/protected/remove-all-product', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

const handleGetTotalQuantity = (token) => {
    return axios.get('/api/protected/get-total-quantity', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export {
    handleUserAddToCart,
    handleUserShowCart,
    handleShowProductDetail,
    handleUserRemoveFromCart,
    handleUserIncreaseItem,
    handleUserDecreaseItem,
    handleUserAddLargeItem,
    handleUserUpdateItem,
    handleUserRemoveAllProduct,
    handleGetTotalQuantity
}