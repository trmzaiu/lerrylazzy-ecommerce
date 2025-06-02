import axios from '../../axios'

const getUsersCreated = () => {
    return axios.get('/api/admin/show-client')
}

export {
    getUsersCreated
}