import axios from 'axios'
import React from 'react'
import { render } from 'react-dom'
import  s from './Users.module.css'
import userPhoto from '../../assets/img/user.png'
import { isRouteErrorResponse, NavLink } from 'react-router-dom'
import { toggleFollowingProgress } from '../../redux/usersPageReducer'
import { usersAPI } from '../../API/api'

let Users = (props) =>{
 
    let countPage =  Math.ceil(props.usersCount / props.pageSize)
    let pages = []
    for (let i = 1 ; i <= countPage; i++){
        pages.push(i);
       
    }
    
return<div>
<div>
{pages.map (pagination =>{
   return <span className={ true && props.currentPage === pagination ? s.selectedPage : "" } onClick={(e) =>{
    props.onPageChanged(pagination);
    }}>{pagination}</span>

})}
{/* <span >1</span>
<span className={s.selectedPage}>2</span>
<span >3</span>
<span >4</span>
<span >5</span> */}
</div>
{/* <button onClick={getUsers}>Get Users</button> */}
{
    props.users.map(u => <div key={u.id}>
        <span>
            <div>
               <NavLink to={'/profile/' + u.id}>
                <img src={u.photos?.small != null? u.photos?.small : userPhoto} className={s.userPhoto} />
                </NavLink>
            </div>
            <div>
                {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}  onClick={() =>
                {
                    props.unFollow(u.id)
                } }>unFollow</button> : 
                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => 
                {   
                 props.follow(u.id);
                    }}>Follow</button>}
                
            </div>
        </span>
        <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
        </span>
    </div>)
}
</div>
}
export default Users;
