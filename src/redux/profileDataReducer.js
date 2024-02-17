import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE  ';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'
let initialState = {
    postData: [{ id: 1, message: "Hello", likes: 24 }, { id: 2, message: "Wow amesome", likes: 12 }],
    // newPostText: '',
    profile: null,
    status: " ",
}
 const profileReducer = (state = initialState,action) => {
        switch(action.type) {
           
            case ADD_POST : { 

                let newPost = {
                id: 5,
                message: action.newMessageBody,
                likes: 0
            };
            return  {...state,
                postData: [...state.postData, newPost],
                // newPostText: ''

            };
            // stateCopy.postData = [...state.postData];
            // stateCopy.postData.push(newPost);
            // stateCopy.newPostText = '';
            // return stateCopy;
        }
            // case UPDATE_NEW_POST_TEXT : {
            // return {...state,
            // newPostText : action.newText};
            // };
            case SET_STATUS: {
                return { ...state, 
                   status: action.status}
            };

            case SET_USER_PROFILE: {
                return{ ...state,profile: action.profile}
            };
            
            case SAVE_PHOTO_SUCCESS:
                return{...state, profile: {...state.profile , photos: action.photos}}
            

            default:
                return state;
        }
        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 5,
        //         message: state.newPostText,
        //         likes: 0
        //     };
        //     state.postData.push(newPost);
        //     state.newPostText = '';
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     state.newPostText = action.newText;

        // } 
    
    }

    const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile})
    export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
    export const addPostActionCreator = (newMessageBody) => ({ type: ADD_POST, newMessageBody })
    // export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
    export const setStatus =(status) =>({type: SET_STATUS, status})
    export const getUserProfile = (userId) => async (dispatch) =>{
       
            let response = await usersAPI.getProfile(userId)
            
            dispatch(setUserProfile(response.data));
               
       }
       
       export const getStatus = (userId) => (dispatch) =>{
       
        profileAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data));
        });   
   }

   export const updateStatus = (status) =>  async (dispatch) =>{
    try{
    let response = await profileAPI.updateStatus(status)
       
    if(response.data.resultCode === 0){    
        dispatch(setStatus(response.data.data.status));
    }
    } catch(error){
        console.log("error");
    }
}
export const savePhoto = (file) =>  async (dispatch) =>{
    let response = await profileAPI.savePhoto(file)
       
    if(response.data.resultCode === 0){    
        dispatch(savePhotoSuccess(response.data.data.photos));
    }

    
       
}
export const saveProfile = (profile) =>  async (dispatch, getState) =>{
    const UserId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
       
    if(response.data.resultCode === 0){    
        //dispatch(savePhotoSuccess(response.data.data.photos));
        dispatch(getUserProfile(UserId));
        
    } else{
        dispatch(stopSubmit("edit-profile", {_error : response.data.messages[0]}));
        return Promise.reject(response.data.messages[0])
    }

    
       
}


export default profileReducer;