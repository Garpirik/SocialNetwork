import React, { useEffect } from 'react';
import store, { addPost } from '../../redux/store';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { connect } from 'react-redux';
import  { getStatus, getUserProfile, savePhoto, saveProfile, setUserProfile, updateStatus } from '../../redux/profileDataReducer';
import axios from 'axios';
import usersPageReducer from '../../redux/usersPageReducer';
import { Navigate, useParams } from 'react-router-dom';
import { usersAPI } from '../../API/api';
import { withAuthRedirect } from '../HOC/WIthAuthRedirect';
import { compose } from 'redux';


/* eslint-disable */
function ProfileContainer(props){
    let { userId } = useParams();
    useEffect(() => {
        if (!userId) {
            userId = props.authorizedUserId;
        }
        props.getUserProfile(userId);
        props.getStatus(userId);
       console.log("use ef", userId)
        
        // usersAPI.getProfile(userId).then((response) => {
        //     props.setUserProfile(response.data);
        // });       
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)

    }, [userId]);
    
 


    return(

    <Profile 
    isOwner={props.authorizedUserId}
    profile={props.profile}
    status={props.status}
    updateStatus={props.updateStatus}
    userId={userId}
    savePhoto={props.savePhoto}
    saveProfile={props.saveProfile}
    />         
    )
    
}


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); 



let mapStateToProps = (state) =>({
    profile: state.profileData.profile,
    status: state.profileData.status,
    authorizedUserId: state.auth.id,
    isAuth : state.auth.isAuth

});

// compose(
//     withAuthRedirect,
//     connect(mapStateToProps, {getUserProfile})

// )(ProfileContainer)

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getUserProfile , getStatus, updateStatus, savePhoto , saveProfile})

)(ProfileContainer)

// connect(mapStateToProps, {getUserProfile}) (AuthRedirectComponent);
