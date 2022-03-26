import React, { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.scss'
import searchIcon from '../../img/searchIcon.png'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const navigate = useNavigate()

    const search = useRef()

    const handleClick = () => {
        setClick(click => !click)
        // console.log('All fine',click)
    }

    const handleInputChange = () => {
        navigate('search')
    }

    return (
        <div className='nav'>

            {/* salom dunyo */}
            <h3 className='nav__logo'>Watchflix</h3>
            <ul className='nav__menu'>
                <li className='nav__menu__item'>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li className='nav__menu__item'>
                    <NavLink to={'/movie'}>Movies</NavLink>
                </li>
                <li className='nav__menu__item'>
                    <NavLink to={'/search'}>TV show</NavLink>
                </li>
            </ul>

            <div className='nav__search'>
                <div className={!click ? 'nav__search__cr' : 'nav__search__cr nav__search__cr--active'}>
                    {click ? <input ref={search}  type="text" onChange={() => {navigate('/search')}} placeholder='Enter search phrase..'/> : ''}
                    {/* onChange={search.current.value != '' ? handleInputChange() : ''} */}
                    <button className={!click ? 'btn' : 'btn btn--active'} onClick={() => {handleClick()}}><img src={searchIcon} alt="" /></button>
                </div>
                <div className='nav__search__user'>
                    <div className='nav__search__user__img'></div>
                    <div className='nav__search__user__text'>
                        John Glich
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Navbar;
