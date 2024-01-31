import axios from 'axios'
import React, { useState } from 'react'
import { render } from 'react-dom'
import  s from '../Paginator/Paginator.module.css'
import userPhoto from '../../../assets/img/user.png'
import { isRouteErrorResponse, NavLink } from 'react-router-dom'
import { usersAPI } from '../../../API/api'
import { toggleFollowingProgress } from '../../../redux/usersPageReducer'


let Paginator = ({currentPage,  totalItemsCount ,onPageChanged,pageSize}) =>{
 
    let countPage =  Math.ceil(totalItemsCount / pageSize)
    let pages = []
    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / totalItemsCount));
    // let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber -1) * pageSize +1;
    let rightPortionPageNumber = portionNumber* pageSize;
    for (let i = 1 ; i <= countPage; i++){
        pages.push(i);
       
    }
    
return(

<div>
{ portionNumber >1 &&  <button onClick={ ()=>{setPortionNumber(portionNumber-1)}}>PREVIEW</button>}
{pages
.filter(p => p>= leftPortionPageNumber && p <= rightPortionPageNumber)
.map (pagination =>{
   return <span className={ true && currentPage === pagination ? s.selectedPage : "" } key={pagination} onClick={(e) =>{

    onPageChanged(pagination);
    }}>{pagination}</span>

})}
{ countPage > portionNumber &&  <button onClick={ ()=>{setPortionNumber(portionNumber+1)}}>NEXT</button>}
{/* <span >1</span>
<span className={s.selectedPage}>2</span>
<span >3</span>
<span >4</span>
<span >5</span> */}

{/* <button onClick={getUsers}>Get Users</button> */}


</div>)

}
export default Paginator;
