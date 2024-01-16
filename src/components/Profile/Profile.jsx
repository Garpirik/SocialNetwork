import React from 'react';
import store, { addPost } from '../../redux/store';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) =>{


return <div >

    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    <MyPostsContainer />
    </div>
}
// store={props.store} MyPostsContainer


export default Profile;