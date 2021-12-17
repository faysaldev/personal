import React from 'react'
import './Home.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Devlopers from '../components/Devlopers'
import Transforming from '../components/Transforming'


function Home() {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Devlopers />
            <Transforming />
        </div>
    )
}

export default Home
