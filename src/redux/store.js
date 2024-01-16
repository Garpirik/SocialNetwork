import messagesPageReducer from "./messagesPageReducer";
import profileDataReducer from "./profileDataReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'
// let postData = [
//     {id : 1 , message: "Hello", likes: 24}, {id : 2 , message : "Wow amesome" , likes : 12}
//   ]
//   let dialogsData = [{id : 1,name: "Petik"} , {id : 2 , name:"Ghul"}]

// import { rerenderEntireTree } from "..";



let store = {
    _state: {
         profileData: 
         {
            postData: [{ id: 1, message: "Hello", likes: 24 }, { id: 2, message: "Wow amesome", likes: 12 }],
            newPostText: ''
        },
        messagesPage: {
            messagesData: [{ id: 1, message: "Hi" }, { id: 2, message: "I'm good" }, { id: 3, message: "How are you" }],
            dialogsData: [{ id: 1, name: "Petik" }, { id: 2, name: "Ghul" }],
            newMessageText: ''
        },
        sidebar: {},
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("state")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost  ()  {
    //     let newPost = {
    //         id: 5,
    //         message : this._state.profileData.newPostText,
    //         likes : 0
    //     };
    //     this._state.profileData.postData.push(newPost);
    //     this._state.profileData.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    //  updateNewPostText  (newText)  {

    //     this._state.profileData.newPostText = newText;

    //     this._callSubscriber(this._state);
    // },
    dispatch(action) { // {type: 'addPost'}
        this._state.profileData = profileDataReducer(this._state.profileData, action);
        this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
                    // if (action.type === ADD_POST) {
                    //     let newPost = {
                    //         id: 5,
                    //         message: this._state.profileData.newPostText,
                    //         likes: 0
                    //     };
                    //     this._state.profileData.postData.push(newPost);
                    //     this._state.profileData.newPostText = '';
                    //     this._callSubscriber(this._state);
                    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
                    //     this._state.profileData.newPostText = action.newText;

                    //     this._callSubscriber(this._state);
                    // } else if (action.type === ADD_MESSAGE) {
                    //     let newMessage = {
                    //         id: 5,
                    //         message: this._state.messagesPage.newMessageText
                    //     };
                    //     this._state.messagesPage.messagesData.push(newMessage)
                    //     this._state.messagesPage.newMessageText = '';
                    //     this._callSubscriber(this._state);

                    // } else if (action.type == UPDATE_MESSAGE) {
                    //     this._state.messagesPage.newMessageText = action.newText
                    //     this._callSubscriber(this._state);
                    // }

    }

}

// export const addPostActionCreator = () => ({ type: ADD_POST })
// export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
// export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
// export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_MESSAGE, newText: text })

// let state = {

// }    

// }

window.store = store;



export default store;


