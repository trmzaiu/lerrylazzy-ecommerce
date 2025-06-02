import axios from '../axios' 

const handleLoginApi = (username, password) => {
    return axios.post('/api/login', 
    { username, password },  {
        headers: { 
            'Content-Type': 'application/json'
        },
    }) 
} 

const handleRegisterApi = (userData) => {
    return axios.post('/api/register', userData) 
} 

const handleShowProfile = (token) => {
    return axios.get('/api/protected/show-profile', {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    }) 
} 

const handleUpdateProfile = (token, data) => {
    return axios.put('/api/protected/update-profile', data, {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    }) 
} 

const handleGetVerifyCode = (username, email) => {
    return axios.post('/api/reset-password/request', { username, email }) 
} 

const handleCheckVerifyCode = (username, code)  => {
    return axios.post('/api/reset-password/enter-code', { username, code })
}

const handleResetPassword = (username, code, password) => {
    return axios.put('/api/reset-password', { username, code, password }) 
}

const handleChangePassword = (token, oldpassword, newpassword) => {
    return axios.put('/api/protected/change-password', { oldpassword, newpassword },{
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    })
}

const handleDeleteUserAccount = (token) => {
    return axios.delete('/api/protected/delete-account', {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    })
}

export {
    handleLoginApi,
    handleRegisterApi,
    handleShowProfile,
    handleUpdateProfile,
    handleGetVerifyCode,
    handleCheckVerifyCode,
    handleResetPassword,
    handleChangePassword,
    handleDeleteUserAccount
} 

