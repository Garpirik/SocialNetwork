import axios from 'axios'
import React from 'react'
import { render } from 'react-dom'
import  s from './Users.module.css'
import userPhoto from '../../assets/img/user.png'
import { isRouteErrorResponse, NavLink } from 'react-router-dom'
import { follow, toggleFollowingProgress, unFollow } from '../../redux/usersPageReducer'
import { usersAPI } from '../../API/api'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

let Users = ({currentPage,  usersCount ,onPageChanged,pageSize , follow, unFollow , followingInProgress, users,   ...props}) =>{
 
    // let countPage =  Math.ceil(props.usersCount / props.pageSize)
    // let pages = []
    // for (let i = 1 ; i <= countPage; i++){
    //     pages.push(i);
       
    // }
    
return(
<div>
<Paginator 
currentPage={currentPage}
onPageChanged={onPageChanged} 
totalItemsCount={usersCount}
pageSize={pageSize}

/>
{/* <div>
{pages.map (pagination =>{
   return <span className={ true && props.currentPage === pagination ? s.selectedPage : "" } onClick={(e) =>{
    props.onPageChanged(pagination);
    }}>{pagination}</span>

})}

</div> */}
{/* <button onClick={getUsers}>Get Users</button> */}

    { users.map(u => <User user={u}  
        followingInProgress={followingInProgress}  
        key={u.id} 
        unFollow={unFollow}
        follow={follow}
        /> )
//     <div key={u.id}>
//         <span>
//             <div>
//                <NavLink to={'/profile/' + u.id}>
//                 <img src={u.photos?.small != null? u.photos?.small : userPhoto} className={s.userPhoto} />
//                 </NavLink>
//             </div>
//             <div>
//                 {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}  onClick={() =>
//                 {
//                     props.unFollow(u.id)
//                 } }>unFollow</button> : 
//                 <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => 
//                 {   
//                  props.follow(u.id);
//                     }}>Follow</button>}
                
//             </div>
//         </span>
//         <span>
//                 <span>
//                     <div>{u.name}</div>
//                     <div>{u.status}</div>
//                 </span>
//                 <span>
//                     <div>{'u.location.country'}</div>
//                     <div>{'u.location.city'}</div>
//                 </span>
//         </span>
//     </div>)
// }
// </div>
// }
}
</div>    
)
}
export default Users;
