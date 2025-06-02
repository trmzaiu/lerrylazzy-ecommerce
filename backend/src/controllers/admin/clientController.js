import clientService from '../../services/admin/clientService'

const countUsersCreated = async (req, res) => {
    try {
        const todayCount = await clientService.countUsersCreatedToday()
        const monthlyCount = await clientService.countUsersCreatedThisMonth()
        const totalCount = await clientService.getAllUsersAndCount()

        return res.status(200).json({
            todayCount,
            monthlyCount,
            totalCount
        })
    } catch (error) {
        console.error('Error handling count users created request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

module.exports = {
    countUsersCreated: countUsersCreated
}