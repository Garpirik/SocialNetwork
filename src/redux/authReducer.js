import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_LOGIN_DATA = 'SET-LOGIN-DATA'
let initialState = {
id: null,
email: null,
login: null,
isAuth: false,
}
export const authReducer = (state = initialState,action) => {
        switch(action.type) {
            case SET_USER_DATA:
            return {...state,
                    ...action.data,
              
                }
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
   export const setAuthUserData = (id,email,login,isAuth) =>({type:SET_USER_DATA,data:{id,email,login,isAuth}});
//    export const SetLoginUserData = (email,password,rememberMe) =>({type: SET_LOGIN_DATA, data:{email,password,rememberMe}})
   export const getAuthUserData = () => async (dispatch) =>{  
   let response =  await authAPI.me();
         
            if(response.data.resultCode ===0){
                let{id,login,email} = response.data.data;
                dispatch(setAuthUserData(id,email,login, true));
            }
       console.log(response.data.data);

   }

   export const LogIn = (email,password,rememberMe) =>  async  (dispatch) =>{
    
   let response=  await authAPI.login(email,password,rememberMe)
        
          if(response.data.resultCode ===0){
            //   let{email,password,rememberMe} = response.data.data;
              dispatch(getAuthUserData())
             
          } else{
            let message = response.data.messages.length >0 ? response.data.messages[0] : "some error";
            dispatch(stopSubmit("login", {_error :message}));
          }
     console.log(response.data.items);
      ;
 }

 export const LogOut = () =>  async (dispatch) =>{
     let response =  await authAPI.logout()
          
          if(response.data.resultCode ===0){
            //   let{email,password,rememberMe} = response.data.data;
              dispatch(setAuthUserData(null,null,null,false));

          }
     console.log(response.data.data);
      
 }

   
export default authReducer;