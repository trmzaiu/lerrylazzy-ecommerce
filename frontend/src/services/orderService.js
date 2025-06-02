import axios from '../axios'

const handleCreateNewOrder = (token, data) => {
    return axios.post('/api/protected/create-order', data, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

const handleClearCart = (token, orderid, note) => {
    return axios.put('/api/protected/clear-cart', { orderid, note }, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

const handleShowOrderItem = (token, orderid) => {
    return axios.get(`/api/protected/show-order-item?orderid=${orderid}`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

const handleShowAllOrders = (token) => {
    return axios.get('/api/protected/show-all-orders', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

const handleShowOrder = (token, orderid) => {
    return axios.get(`/api/protected/show-order?orderid=${orderid}`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

const handleApplyCoupon = (token, code) => {
    return axios.post('/api/protected/apply-coupon', { code }, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export {
    handleCreateNewOrder,
    handleClearCart,
    handleShowOrderItem,
    handleShowAllOrders,
    handleShowOrder,
    handleApplyCoupon
}