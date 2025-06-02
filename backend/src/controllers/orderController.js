import orderService from '../services/orderService'
import cron from 'node-cron'

const handleCreateNewOrder = async(req, res) => {
    try {
        const userid = req.user.userid
        const data = req.body

        console.log(data)

        const message = await orderService.createNewOrder(userid, data)

        if (message.errCode === 0) {
            return res.status(201).json(message)
        } else {
            return res.status(400).json(message)
        }
    } catch (error) {
        console.error('Error handling create new order request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleClearCart = async (req, res) => {
    try {
        const userid = req.user.userid
        const { orderid, note } = req.body

        const message = await orderService.clearCart(userid, orderid, note)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling clear cart request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleShowOrder = async (req, res) => {
    try {
        const userid = req.user.userid 
        const  { orderid } = req.query

        const message = await orderService.showOrder(userid, orderid)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling show order request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleShowOrderItem = async (req, res) => {
    try {
        const userid = req.user.userid
        const { orderid } = req.query

        const message = await orderService.showOrderItem(userid, orderid)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling show order item request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleShowAllOrders = async (req, res) => {
    try {
        const userid = req.user.userid
        const message = await orderService.showAllOrders(userid)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling show all orders request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleApplyCoupon = async (req, res) => {
    try {
        const userid = req.user.userid
        const { code } = req.body
        const message = await orderService.applyCoupon(userid, code)
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling apply coupn request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const handleUpdateOrderStatus = async () => {
    try {
        const pickupToDelivery = await orderService.updatePickupStatus()
        const deliveryToDelivered = await orderService.updateDeliveryStatus()
        const confirmToCancel = await orderService.updateConfirmStatus()

        if (pickupToDelivery.errCode !== 0) {
            console.log('Update pending pick up to pending delivery:', pickupToDelivery.errMessage);
        }

        if (deliveryToDelivered.errCode !== 0) {
            console.log('Update pending delivery to delivered:', deliveryToDelivered.errMessage);
        }
        
        if (confirmToCancel.errCode !== 0) {
            console.log('Update pending confirmation to canceled:', confirmToCancel.errMessage);
        }

        console.log('Order status updated successfully')
        return {
            pickupToDelivery,
            deliveryToDelivered,
            confirmToCancel
        }
    } catch (error) {
        console.error('Error handling update order status request:', error);
    }
}

// // Cron job to run every 5 minutes
// cron.schedule('*/10 * * * *', async () => {
//     console.log('Running a task every 5 minutes')
//     const message = await handleUpdateOrderStatus()
//     console.log(message)
// })

module.exports = {
    handleCreateNewOrder: handleCreateNewOrder,
    handleClearCart: handleClearCart,
    handleShowOrder: handleShowOrder,
    handleShowOrderItem: handleShowOrderItem,
    handleShowAllOrders: handleShowAllOrders,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    handleApplyCoupon: handleApplyCoupon
}



