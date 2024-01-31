import axios from 'axios'
import React from 'react'
import { render } from 'react-dom'
import  s from './Users.module.css'
import userPhoto from '../../assets/img/user.png'
import { isRouteErrorResponse, NavLink } from 'react-router-dom'
import { toggleFollowingProgress } from '../../redux/usersPageReducer'
import { usersAPI } from '../../API/api'
import Paginator from '../common/Paginator/Paginator'

let User = ({user,unFollow,follow, followingInProgress}) =>{
    

    
return(


    <div>
        <span>
            <div>
               <NavLink to={'/profile/' + user.id}>
                <img src={user.photos?.small != null? user.photos?.small : userPhoto} className={s.userPhoto} />
                </NavLink>
            </div>
            <div>
                {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)}  onClick={() =>
                {
                    unFollow(user.id)
                } }>unFollow</button> : 
                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => 
                {   
                 follow(user.id);
                    }}>Follow</button>}
                
            </div>
        </span>
        <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
        </span>

        </div>


)
}
export default User;
