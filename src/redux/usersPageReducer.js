import {   usersAPI } from "../API/api";
import { updateObjectArray } from "../utils/validators/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_ISFETCHING = 'TOGGLE-ISFETCHING'
const TOGGLE_ISFOLLOWING_PROGRESS = 'TOGGLE-ISFOLLOWING-PROGRESS'
let initialState = {
users: [],
pageSize: 20,
usersCount: 300,
currentPage: 1,
isFetching: false,
followingInProgress: [],
}
export const usersPageReducer = (state = initialState,action) => {
        switch(action.type) {
            case FOLLOW:
            return {...state,
                users: updateObjectArray(state.users, action.userId, "id",{ followed : true})
                // users: state.users.map( u => {
                //     if(u.id === action.userId){
                //         return {...u, followed: true};
                //     }
                //     return u;}
                //     )
                }
                

            case UNFOLLOW:
                return {...state,
                    users: updateObjectArray(state.users, action.userId, "id",{ followed : false})
                    // users: state.users.map( u => {
                    //     if(u.id === action.userId){
                    //         return {...u, followed: false};
                    //     }
                    //     return u;})
                }    
                case SET_USERS: 
                {
                    return {...state, users:  action.users}
                }
                case SET_CURRENT_PAGE: 
                {
                    return {...state, currentPage: action.currentPage}
                }
                case SET_TOTAL_USERS_COUNT: 
                {
                    return {...state, usersCount: action.count}
                }
                case TOGGLE_ISFETCHING:
                    {
                    return {...state, isFetching: action.isFetching}
                }
                case TOGGLE_ISFOLLOWING_PROGRESS:
                    {
                    return {...state, followingInProgress: action.isFetching ? [...state.followingInProgress,  action.userId] : state.followingInProgress.filter(id => id != action.userId)}
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
    
    export const followSucess = (userId) => ({ type: FOLLOW ,userId})
    export const unFollowSucess = (userId) => ({ type: UNFOLLOW, userId })
    export const setUsers = (users) => ({ type: SET_USERS, users})
    export const setCurrentPage = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage})
    export const setTotalUsersCount =(usersCount) => ({type: SET_TOTAL_USERS_COUNT , count: usersCount})
    export const toggleIsFetching =(isFetching) => ({type: TOGGLE_ISFETCHING, isFetching})
    export const toggleFollowingProgress = (isFetching, userId) =>({type:TOGGLE_ISFOLLOWING_PROGRESS,  isFetching , userId})
    export const getUsers = (currentPage,pageSize) =>{
        return async(dispatch) =>{
        dispatch(toggleIsFetching(true));
         let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(setCurrentPage(currentPage));
            dispatch(setUsers(data.items));
            dispatch(toggleIsFetching(false));
            // this.props.setUsersCount(response.data.totalCount);
            dispatch(setTotalUsersCount(data.totalCount)); 
            console.log(data.items);
                
 
    }
} 
const followUnfollowFlow =  async(dispatch,userId, apiMethod, actionCreator) =>{
    dispatch(toggleFollowingProgress(true, userId));
    let response  = await apiMethod(userId);
     if(response.data.resultCode === 0){
          dispatch(actionCreator(userId));
     }
     dispatch(toggleFollowingProgress(false, userId)); 
} 

export const follow = (userId) =>{
    return async(dispatch) =>{
        followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),followSucess)
            
    }
}
export const unFollow = (userId) =>{
    return async (dispatch) =>{
        followUnfollowFlow(dispatch,userId,usersAPI.unFollow.bind(usersAPI),unFollowSucess)
        dispatch(toggleFollowingProgress(true, userId));
    }
}


    export default usersPageReducer;