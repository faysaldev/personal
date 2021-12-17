import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PhoneIcon from '@material-ui/icons/Phone';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {

    const [navBlck, setnavBlack] = useState(false);
    const [openMenu, setMenu] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setnavBlack(true)
        } else {
            setnavBlack(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);

        return ()=> window.removeEventListener('scroll' ,transitionNavBar)
    },[])

    const menu = () => {
        if (openMenu) {
            setMenu(false);
        } else {
            setMenu(true);
        }
    }

    console.log(openMenu)

    return (
        <header>
            <div className={`header ${navBlck && "headerWhite"}`}>
                <div className="container header__contant">
                    <div className="header__left">
                        <Link to='/'>
                        <img src="/img/logo.svg" className='logo' />
                    </Link>
                    </div>

                    <div className="mobile__menu">
                        <PhoneIcon className="phoneIcon"/>
                        <MenuIcon className="menuIcon"onClick={menu} />
                    </div>

                    <nav className="nav">
                        <ul>
                            <li><Link to='/services'>Services</Link>
                            </li>
                            <li><Link to='/solutions'>Solutions</Link></li>
                            <li><Link to='/work'>Work</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/resources'>Resources</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>

                        <div className="header__right">
                            <div className="contact_number">
                            <PhoneIcon className="phoneIcon" />
                            <span>+880 1646177169</span>
                        </div>

                        <Link to="/project" className="headerButton">EXTIMATE PROJECT</Link>
                        </div>
                    </nav>
                </div>


                {openMenu && (
                    <div className="mobile__menus">
                         <ul>
                        <li><Link to='/services'>Services</Link> <ExpandMoreIcon /></li>
                        <li><Link to='/solutions'>Solutions</Link> <ExpandMoreIcon /></li>
                        <li><Link to='/work'>Work</Link> <ExpandMoreIcon /></li>
                        <li><Link to='/about'>About</Link> <ExpandMoreIcon /></li>
                        <li><Link to='/resources'>Resources</Link> <ExpandMoreIcon /></li>
                        <li><Link to='/contact'>Contact</Link> <ExpandMoreIcon /></li>
                    </ul>
                    </div>
                )}

            </div>


        </header>
    )
}

export default Header
