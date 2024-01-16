import { render } from 'react-dom'
import { connect } from 'react-redux';
import { follow, getUsers, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingProgress, toggleIsFetching, unFollow } from '../../redux/usersPageReducer';
import Users from './Users'
// import UsersAPIComponent from './UsersClass';
import  u from './Users.module.css'
import axios from 'axios'
import React from 'react'
import  s from './Users.module.css'
import userPhoto from '../../assets/img/user.png'
import PreLoader from '../common/PreLoader/preLoader';
import { getUsers2, usersAPI } from '../../API/api';
import { withAuthRedirect } from '../HOC/WIthAuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getUsersCount, getUsersSelector, getUsersSuperSelector } from '../../redux/users_selectors';
// import { getUsers } from '../../API/api';

class UsersContainer extends React.Component{
    /* eslint-disable */
    componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
        //     this.props.toggleIsFetching(true);
    //     alert('new');
    //     getUsers(this.props.currentPage, this.props.pageSize).then( data=> {   
    //      this.props.toggleIsFetching(false);
    //      this.props.setUsers(data.items);
    //      this.props.setTotalUsersCount(data.totalCount) 
    //    console.log(data.items);
    //     });
    }
    
    onPageChanged = (pageNumber) =>{
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
       
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render(){
        
        
    return( <>
    <div style={{backgroundColor: "blue"}}>{this.props.isFetching ?  <PreLoader/>: null }</div>
    <Users usersCount={this.props.usersCount} 
    pageSize={this.props.pageSize}
    currentPage={this.props.currentPage}
    onPageChanged={this.onPageChanged}
    users={this.props.users}
    follow={this.props.follow}
    unFollow={this.props.unFollow}
    toggleFollowingProgress={this.props.toggleFollowingProgress}
    followingInProgress={this.props.followingInProgress}
    />
    </>
    )
    }
    
}

let mapStateToProps = ( state) => {
    console.log(state.auth.isAuth)
    return {
        // users: getUsersSelector(state),
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        usersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress :getFollowingInProgress(state),
    }
}






// let mapDispatchToProps = (dispatch) =>{
//     return {
//         follow : (userId) =>{
//             dispatch(followActionCreator(userId))
//         },
//         unFollow : (userId) =>{
//             dispatch(unFollowActionCreator(userId))
//         },
//         setUsers: (users) =>{
//             dispatch(setUsersActionCreator(users))
//         },
//     setCurrentPage: (pageNumber) =>{
//         dispatch(setCurrentPageActionCreator(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) =>{
//         dispatch(setTotalUsersCountActionCreator(totalCount))
//     },
//     toggleIsFetching:(isFetching) =>{
//         dispatch(toggleIsFetchingActionCreator(isFetching))
//     }
// }
// }

// compose(
//     withAuthRedirect,
//     connect(mapStateToProps, 
//         {follow ,unFollow,setCurrentPage ,toggleFollowingProgress, getUsers}) (UsersContainer)
// )(UsersContainer)
// let AuthRedirectComponent = withAuthRedirect(UsersContainer)
 export default compose(  
    withAuthRedirect,
    connect(mapStateToProps,{follow ,unFollow,setCurrentPage ,toggleFollowingProgress, getUsers}))(UsersContainer)
// export default compose(
//     connect(mapStateToProps, 
//         withAuthRedirect,
//         {follow ,unFollow,setCurrentPage ,toggleFollowingProgress, getUsers})) (UsersContainer)
// connect(mapStateToProps, 
//     {follow ,unFollow,setCurrentPage ,toggleFollowingProgress, getUsers}) (UsersContainer); 