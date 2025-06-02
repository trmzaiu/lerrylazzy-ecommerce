import userService from "../services/userService"

const handleLogin = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json({
                errCode: 1,
                message: 'Username and password are required!',
            })
        }

        const message = await userService.userLogin(username, password)

        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling login request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.',
        })
    }
}

const handleRegister = async (req, res) => {
    try {
        const message = await userService.userRegister(req.body)
        console.log(message)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling register request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleShowProfile = async (req, res) => {
    try {
        const message = await userService.findUserByUsername(req.user.username)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling show profile request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleChangeProfile = async (req, res) => {
    try {
        const data = req.body
        const username = req.user.username
        const message = await userService.updateProfile(username, data)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling profile change request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleChangePassword = async (req, res) => {
    try {
        const { oldpassword, newpassword } = req.body
        const username = req.user.username

        if (!oldpassword || !newpassword) {
            return res.status(400).json({
                errCode: 1,
                message: 'Please enter your current password and new password'
            })
        }

        const message = await userService.changePassword(username, oldpassword, newpassword)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling password change request: ', error)
        return res.status(200).json({
            errorCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleRequestResetPassword = async (req, res) => {
    try {
        const { username, email } = req.body
        if (!username || !email) {
            return res.status(400).json({
                errCode: 1,
                message: 'Please enter your username and email'
            })
        }
        const message = await userService.requestResetPassword(username, email)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling request reset password: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleEnterCode = async (req, res) => {
    try {
        const { username, code } = req.body

        if (!code) {
            return res.status(400).json({
                errCode: 1,
                message: 'Please enter your verify code'
            })
        }

        const message = await userService.checkVerifyCode(username, code)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling enter code request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleResetPassword = async (req, res) => {
    try {
        const { username, code, password } = req.body

        if (!code) {
            return res.status(400).json({
                errCode: 1,
                message: 'Please enter your verify code'
            })
        }

        const message = await userService.resetPassword(username, code, password)
        return res.status(200).json(message)
    } catch (error) {
        console.log('Error handling reset password: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleDeleteAccount = async (req, res) => {
    try {
        const username = req.user?.username
        if (!username) {
            return res.status(400).json({
                errCode: 1,
                message: 'Missing required parameter!'
            })
        }
        const message = await userService.deconsteAccount(username)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling deconste account request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

module.exports = {
    handleLogin: handleLogin,
    handleRegister: handleRegister,
    handleShowProfile: handleShowProfile,
    handleChangeProfile: handleChangeProfile,
    handleChangePassword: handleChangePassword,
    handleRequestResetPassword: handleRequestResetPassword,
    handleEnterCode: handleEnterCode,
    handleResetPassword: handleResetPassword,
    handleDeleteAccount: handleDeleteAccount
}

