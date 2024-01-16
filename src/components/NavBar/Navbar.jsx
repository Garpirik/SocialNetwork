import React from 'react';
import { NavLink } from 'react-router-dom';
import  s from './Navbar.module.css'
const Navbar = () =>{

    return <nav className={s.nav}>
    <div className={s.item}><NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item } >Profile</NavLink></div>
    <div className={s.item}><NavLink to='/dialogs'>Messages</NavLink></div>
    <div className={s.item}><NavLink to='/news'>News</NavLink></div>
    <div className={s.item}><NavLink to='/Music'>Music</NavLink></div>
    <div className={s.item} ><NavLink to='/Settings'>Settings</NavLink></div>
    <div className={s.item}><NavLink to='/users'>Users</NavLink></div>
</nav>
}
export default Navbar;