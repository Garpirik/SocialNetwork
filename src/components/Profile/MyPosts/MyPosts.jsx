import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
/* eslint-disable */
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileDataReducer';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validator';
import { TextArea } from '../../common/FormsControls/FormsControls';
// import store  from '../../../redux/state';
import  s from './MyPosts.module.css'
import Post from './post/Post';

const MyPosts = (props) =>{


let postElement = props.postData.map( post => <Post message = {post.message}  likes = {post.likes}/>)
let newPostElement = React.createRef();

let onAddPost = (values) =>{
  // let text = newPostElement.current.value;
  props.addPost(values.newMessageBody);
  alert(values.newMessageBody);
  // props.dispatch(addPostActionCreator());
  // props.updateNewPostText('');
}  
// let onPostChange  = () =>{
//   let text = newPostElement.current.value;
//   props.updateNewPostText(text);
//   // let action =  {type : 'UPDATE-NEW-POST-TEXT', newText : text} 
//   // let action =  updateNewPostTextActionCreator(text);
//   // props.dispatch(action);

// }
return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <MyPostsReduxForm onSubmit={onAddPost}/>
      <div className='posts'>
    {postElement}
    </div>
      </div>
)
}



const MyPostsForm = (props) =>{
  return (
  <form onSubmit={props.handleSubmit}>
  <div>
    <div>
      <Field name={"newMessageBody"} component={TextArea}  validate={[requiredField , maxLengthCreator(15)]}/>
    </div>
    <div>
      <button  >Add post</button>
    </div>
  </div>

    </form>
  )
}
//onClick={props.onAddPost}
const MyPostsReduxForm = reduxForm({
  form: "ProfileAddNewPostForm"
})(MyPostsForm)
export default MyPosts;
