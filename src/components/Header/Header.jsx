import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogOut } from '../../redux/authReducer';
import  s from './Header.module.css';
const Header = (props) =>{
    return(
    <header className={s.header}>
    <img  src='https://www.jimdo.com/static/060fc292d0fa8170d0349034f007a5bd/5ce94/Logo_LogoExample_Header_4_EN.png'/>
    <div className={s.loginBlock}>
    <div></div>
   { props.isAuth ? <div> {props.login}
      <button onClick={props.LogOut}>Logout</button>
    </div>
    : <NavLink to={'/login'}> Login</NavLink>}
    </div>
  </header>
    )
}
export default Header;