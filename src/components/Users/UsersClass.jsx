import axios from 'axios'
import React from 'react'
import { render } from 'react-dom'
import  s from './Users.module.css'
import userPhoto from '../../assets/img/user.png'
import Users from './Users'

class UsersAPIComponent extends React.Component{
    /* eslint-disable */
    componentDidMount(){
        alert('new');
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {   
       this.props.setUsers(response.data.items);
       this.props.setTotalUsersCount(response.data.totalCount) 
       console.log(response.data.items);
        });
    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {   
        this.props.setUsers(response.data.items);
        // this.props.setUsersCount(response.data.totalCount);
        console.log(response.data.items);
            
    })
    }

    render(){
        
        
    return <Users usersCount={this.props.usersCount}
    pageSize={this.props.pageSize}
    currentPage={this.props.currentPage}
    onPageChanged={this.onPageChanged}
    users={this.props.users}
    follow={this.props.follow}
    unFollow={this.props.unFollow}
    />
       
    }
}


export default UsersAPIComponent;