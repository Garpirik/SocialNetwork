import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { connect } from 'react-redux/es/exports';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileDataReducer';
import store from '../../../redux/redux_store';
import MyPosts from './MyPosts';
// import store  from '../../../redux/state';



// const MyPostsContainer = (props) =>{

// // 
// return (
//   <StoreContext.Consumer>
//     {
//   (store) =>{
//     let state = store.getState()
//     let addPost = () =>{
//   // let text = newPostElement.current.value;
//   store.dispatch(addPostActionCreator());
//   // props.updateNewPostText('');
// }  
// let onPostChange  = (text) =>{
//   // let action =  {type : 'UPDATE-NEW-POST-TEXT', newText : text} 
//   let action =  updateNewPostTextActionCreator(text);
//   store.dispatch(text);
// }


// return <MyPosts addPost={addPost} updateNewPostText={onPostChange} postData={store.getState().profileData.postData} newPostText={store.getState().profileData.newPostText}/>
// }
// }
// </StoreContext.Consumer>

// )
// }
let mapStateToProps = (state) =>{
  return {
    postData: state.profileData.postData,
    newPostText: state.profileData.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return{ 
    // updateNewPostText: (text) =>{
    // let action =  updateNewPostTextActionCreator(text);  
    // dispatch(action);
    // },
    addPost: (newMessageBody) =>{
      dispatch(addPostActionCreator(newMessageBody));
    }
  }
}


const MyPostsContainer=connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;