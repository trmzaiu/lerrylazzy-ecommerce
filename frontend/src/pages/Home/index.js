import React from 'react'

import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import HotItem from '../../components/Item/HotItem'
import NavBar from '../../components/NavBar'
import NewItem from '../../components/Item/NewItem'

import './Home.scss'

const Home = () => {

    return (
        <div>
            <NavBar/>
            <Banner/>
            <div className='container my-5 pt-5 px-5'>
                <div className='row align-items-end mb-4'>
                    <div className='hero-content pb-4 text-center'>
                        <h1 className='hero-heading' id='bestSeller'>Best Sellers</h1>
                    </div>
                    <div className='mb-4'><HotItem /></div>
                </div>
            </div>
            <div className='container my-5 pt-5 px-5'>
                <div className='row gutter-1 align-items-end mb-4'>
                    <div className='hero-content pb-4 text-center'>
                        <h1 className='hero-heading'>New Arrivals</h1>
                    </div>
                    <NewItem />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home