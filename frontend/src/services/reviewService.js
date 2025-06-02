import axios from '../axios'

const handleCreateReview = (token, productid, rating, comment) => {
    return axios.post('/api/protected/create-review', { productid, rating, comment }, {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    })
}

export {
    handleCreateReview
}