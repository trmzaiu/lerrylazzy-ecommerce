import axios from '../axios'

const handleAddRemoveFavorite = (token, productid) => {
    return axios.post('/api/protected/add-remove-favorite', { productid } , {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

const handleShowFavorite = (token) => {
    return axios.get('/api/protected/show-favorite', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

const handleCheckFavorite = (token, productid) => {
    return axios.get(`/api/protected/check-favorite?productid=${productid}`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export {
    handleAddRemoveFavorite, 
    handleCheckFavorite,
    handleShowFavorite
}
