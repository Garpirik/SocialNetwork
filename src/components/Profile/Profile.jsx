import React from 'react';
import store, { addPost } from '../../redux/store';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) =>{

return <div >
    
    <ProfileInfo 
    savePhoto={props.savePhoto}   
    isOwner={props.isOwner} 
    profile={props.profile} 
    status={props.status} 
    saveProfile={props.saveProfile}
    updateStatus={props.updateStatus} 
    userId={!!props.userId}/>
    <MyPostsContainer />
    </div>
}
// store={props.store} MyPostsContainer


export default Profile;