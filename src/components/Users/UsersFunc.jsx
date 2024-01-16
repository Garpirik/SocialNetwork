// import axios from 'axios'
// import React from 'react'
// import { render } from 'react-dom'
// import  s from './Users.module.css'
// import userPhoto from '../../assets/img/user.png'
// let Users = (props) =>{
//     let getUsers = () => 
//     {
//     if(props.users.length === 0){
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {   
//         props.setUsers(response.data.items);
//         console.log(response.data.items);
//         })
//         // .catch(error => {
//         //     if (error.response) {
//         //         // Запрос был выполнен, и сервер ответил кодом статуса, отличным от 2xx
//         //         console.error('Ошибка статуса:', error.response.status);
//         //         console.error('Данные ответа:', error.response.data);
//         //       } else if (error.request) {
//         //         // Запрос был сделан, но не получен ответ
//         //         console.error('Запрос не получил ответ');
//         //       } else {
//         //         // Произошла ошибка при настройке запроса
//         //         console.error('Ошибка настройки запроса:', error.message);
//         //       }
//         //   });
//         }
//         }
    
    
//     return <div>
//         <button onClick={getUsers}>Get Users</button>
//         {
//             props.users.map(u => <div key={u.id}>
//                 <span>
//                     <div>
//                         <img src={u.photos?.small != null? u.photos?.small : userPhoto} className={s.userPhoto} />
//                     </div>
//                     <div>
//                         {u.followed ? <button onClick={() => {props.unFollow(u.id)}}>unFollow</button> : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        
//                     </div>
//                 </span>
//                 <span>
//                         <span>
//                             <div>{u.name}</div>
//                             <div>{u.status}</div>
//                         </span>
//                         <span>
//                             <div>{'u.location.country'}</div>
//                             <div>{'u.location.city'}</div>
//                         </span>
//                 </span>
//             </div>)
//         }
//     </div>
// }



// export default UsersFunc;


 //     return <Users/><div>
    //     <div>
    //     {pages.map (pagination =>{
    //        return <span className={ true && this.props.currentPage === pagination ? s.selectedPage : "" } onClick={(e) =>{
    //             this.onPageChanged(pagination);
    //         }}>{pagination}</span>
        
    //     })}
    //     {/* <span >1</span>
    //     <span className={s.selectedPage}>2</span>
    //     <span >3</span>
    //     <span >4</span>
    //     <span >5</span> */}
    //     </div>
    //     <button onClick={this.getUsers}>Get Users</button>
    //     {
    //         this.props.users.map(u => <div key={u.id}>
    //             <span>
    //                 <div>
    //                     <img src={u.photos?.small != null? u.photos?.small : userPhoto} className={s.userPhoto} />
    //                 </div>
    //                 <div>
    //                     {u.followed ? <button onClick={() => {this.props.unFollow(u.id)}}>unFollow</button> : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                        
    //                 </div>
    //             </span>
    //             <span>
    //                     <span>
    //                         <div>{u.name}</div>
    //                         <div>{u.status}</div>
    //                     </span>
    //                     <span>
    //                         <div>{'u.location.country'}</div>
    //                         <div>{'u.location.city'}</div>
    //                     </span>
    //             </span>
    //         </div>)
    //     }
    // </div>
    