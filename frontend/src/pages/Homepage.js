
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import HotItem from '../components/Item/HotItem'
import NewItem from '../components/Item/NewItem'
import NavBar from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />

            {/* Best Sellers Section */}
            <div className="container mx-auto my-10 pt-10 px-6">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4" id="bestSeller">
                        Best Sellers
                    </h1>
                    <div className="mt-4">
                        <HotItem />
                    </div>
                </div>
            </div>

            {/* New Arrivals Section */}
            <div className="container mx-auto my-10 pt-10 px-6">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        New Arrivals
                    </h1>
                    <NewItem />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home
