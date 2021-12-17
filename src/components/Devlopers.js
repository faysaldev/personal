import React from 'react'
import {Link} from 'react-router-dom'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import DevicesIcon from '@material-ui/icons/Devices';
import AirplayIcon from '@material-ui/icons/Airplay';
import GamesIcon from '@material-ui/icons/Games';

function Devlopers() {
    return (
        <section className="developers">
            <div className="container">
                <div className="row">
                    <div className="text-center col-md-12 developer__top">
                        <p><span>DESIGN</span> <span>DEVELOPMENT</span> <span>CUNSULTANCY</span></p>
                        <h1>Develop results-driven products for entrepreneurs, startups, and enterprises with a leading software development company.</h1>
                    </div>
                </div>

                <div className="developerItems">
                    <Link to='/webdevlopment' className="singleItem">
                        <PhoneIphoneIcon />
                        <div className="info">
                            <h2>App</h2>
                            <h2>Development</h2>
                        </div>
                    </Link>

                    <Link to='/webdevlopment' className="singleItem">
                        <PhonelinkSetupIcon />
                        <div className="info">
                            <h2>Game</h2>
                            <h2>Development</h2>
                        </div>
                    </Link>

                    <Link to='/devices' className="singleItem">
                        <DevicesIcon />
                        <div className="info">
                            <h2>Web</h2>
                            <h2>Development</h2>
                        </div>
                    </Link>

                    <Link to='/webdevlopment' className="singleItem">
                        <GamesIcon />
                        <div className="info">
                            <h2>Blockchain</h2>
                            <h2>Development</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Devlopers
