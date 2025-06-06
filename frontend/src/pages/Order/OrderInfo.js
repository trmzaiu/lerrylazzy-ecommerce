
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import OrderDetail from '../../components/Order/OrderDetail'

const OrderInfo = () => {

    return (
        <div>
            <NavBar />
            <div className='container my-5 py-5'>
                <OrderDetail />
            </div>
            <Footer />
        </div>
    )
}

export default OrderInfo
