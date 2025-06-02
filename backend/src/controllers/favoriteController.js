import favoriteService from '../services/favoriteService'

const handleAddRemoveFavorite = async (req, res) => {
    try {
        const userid = req.user.userid 
        const { productid } = req.body
        const message = await favoriteService.addRemoveFavorite (userid, productid)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling add favorite product request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleShowFavorite = async (req, res) => {
    try {
        const userid = req.user.userid 
        
        const message = await favoriteService.showFavorite(userid)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling show favorite request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleCheckFavorite = async (req, res) => {
    try {
        const userid = req.user.userid 
        const { productid } = req.query
        const message = await favoriteService.checkFavorite(userid, productid)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling check product in favorite request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

module.exports = {
    handleAddRemoveFavorite: handleAddRemoveFavorite,
    handleShowFavorite: handleShowFavorite,
    handleCheckFavorite: handleCheckFavorite
}

