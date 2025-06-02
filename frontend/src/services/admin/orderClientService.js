import axios from '../../axios'

const getOrdersCreated = () => {
    return axios.get('/api/admin/show-order')
}

export {
    getOrdersCreated
} 