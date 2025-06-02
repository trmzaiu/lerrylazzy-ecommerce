import orderClientService from '../../services/admin/orderClientService'

const countOrdersCreated = async (req, res) => {
    try {
        const todayCount = await orderClientService.countOrdersCreatedToday()
        const monthlyCount = await orderClientService.countOrdersCreatedThisMonth()
        const totalCount = await orderClientService.getAllOrdersAndCount()
        const order = await orderClientService.getOrdersForLast7Days()
        const allOrder = await orderClientService.showAllOrders()

        return res.status(200).json({
            todayCount,
            monthlyCount,
            order,
            allOrder,
            totalCount,
        })
    } catch (error) {
        console.error('Error handling count orders created request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

// const getAllOrders = async (req, res) => {
//     try {
        
//         return res.status(200).json(message)
//     } catch (error) {
//         console.error('Error handling get all order request: ', error)
//         return res.status(500).json({
//             errCode: -1,
//             message: 'An internal server error occurred.'
//         })
//     }
// }

module.exports = {
    countOrdersCreated: countOrdersCreated,
    // getAllOrders: getAllOrders
}