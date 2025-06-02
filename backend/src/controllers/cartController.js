import cartService from '../services/cartService'

const handleAddToCart = async (req, res) => {
    try {
        const userid = req.user.userid
        const { productid } = req.body

        if (!userid) {
            return res.status(401).json({
                errCode: 1,
                message: 'You need to login first',
            })
        }

        const message = await cartService.addProductToCart(userid, productid)
        return res.status(200).json(message)
        
    } catch (error) {
        console.error('Error handling add to cart request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleShowCart = async (req, res) => {
    try {
        const userid = req.user.userid

        if (!userid) {
            return res.status(401).json({
                errCode: 1,
                message: 'You need to login first',
            })
        }
        
        const message = await cartService.showCart(userid)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling show cart request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleRemoveFromCart = async (req, res) => {
    try {
        const userid = req.user.userid
        const { productid } = req.body

        if (!userid) {
            return res.status(401).json({
                errCode: 1,
                message: 'You need to login first',
            })
        }

        const message = await cartService.removeProductFromCart(userid, productid)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling deconste from cart request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleIncreaseQuantity = async (req, res) => {
    try {
        const userid = req.user.userid
        const { productid } = req.body

        if (!userid) {
            return res.status(401).json({
                errCode: 1,
                message: 'You need to login first',
            })
        }

        const message = await cartService.increaseQuantity(userid, productid)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling increase quantity request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleDecreaseQuantity = async (req, res) => {
    try {
        const userid = req.user.userid
        const { productid } = req.body

        if (!userid) {
            return res.status(401).json({
                errCode: 1,
                message: 'You need to login first',
            })
        }

        const message = await cartService.decreaseQuantity(userid, productid)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling decrease quantity request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleAddLargeQuantity = async (req, res) => {
    try {
        const userid = req.user.userid
        const { productid, quantity } = req.body

        if (!userid) {
            return res.status(401).json({
                errCode: 1,
                message: 'You need to login first',
            })
        }

        const message = await cartService.addLargeQuantity(userid, productid, quantity)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling add large quantity request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleUpdateQuantity = async (req, res) => {
    try {
        const userid = req.user.userid
        const { productid, quantity } = req.body

        if (!userid) {
            return res.status(401).json({
                errCode: 1,
                message: 'You need to login first',
            })
        }

        const message = await cartService.updateQuantity(userid, productid, quantity)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling update quantity request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleRemoveAllProduct = async (req, res) => {
    try {
        const userid = req.user.userid

        if (!userid) {
            return res.status(401).json({
                errCode: 1,
                message: 'You need to login first',
            })
        }
        
        const message = await cartService.removeAllProduct(userid)
        return res.status(200).json(message)
    } catch (error) {

    }
}

const handleGetTotalQuantity = async (req, res) => {
    try {
        const userid = req.user.userid
        if (!userid) {
            return res.status(401).json({
                errCode: 1,
                message: 'You need to login first',
            })
        }

        const message = await cartService.getTotalQuantity(userid)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling get total quantity request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

module.exports = {
    handleAddToCart: handleAddToCart,
    handleShowCart: handleShowCart,
    handleRemoveFromCart: handleRemoveFromCart,
    handleIncreaseQuantity: handleIncreaseQuantity,
    handleDecreaseQuantity: handleDecreaseQuantity,
    handleAddLargeQuantity: handleAddLargeQuantity,
    handleUpdateQuantity: handleUpdateQuantity,
    handleRemoveAllProduct: handleRemoveAllProduct,
    handleGetTotalQuantity: handleGetTotalQuantity
}