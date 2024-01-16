import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import  { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/messagesPageReducer';
import store from '../../redux/store';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css'
import { connect } from 'react-redux/es/exports';
import { withAuthRedirect } from '../HOC/WIthAuthRedirect';
import { compose } from 'redux';
import Message from './Message/Message';


// const DialogsContainer = (props) =>{ 
//     let state = store.getState().messagesPage;
//     // let messagesElement = props.state.messagesData.map ( message => <Message message = {message.message}/>)
//     // let dialogsElement = props.state.dialogsData.map( dialog=> <DialogItem name = {dialog.name} id = {dialog.id}/>)
//     // [

//     //         <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>,
//     //         <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id}/>
    
//     // ]
//     // let messageSend = React.createRef()


   
//     return <StoreContext.Consumer>
//         { store =>{
//         let addMessage = () => {
//             store.dispatch(addMessageActionCreator());
//         }
    
//         let onMessageChange = (text) =>{
//             // let text = messageSend.current.value;
//             // let action = updateMessageTextActionCreator(text);
//             store.dispatch(updateMessageTextActionCreator(text));
//         }
    


//     return<Dialogs updateMessageTextActionCreator={onMessageChange} sendMessage={addMessage} messagesPage={store.getState().messagesPage}/>
//     }
// }
//     </StoreContext.Consumer>
// }
let mapStateToProps = (state) =>{
    return {
        messagesPage : state.messagesPage,
      
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        // updateMessageTextActionCreator: (body) =>{
        //     dispatch(updateMessageTextActionCreator());
        // },
        sendMessage: (newMessageBody) =>{
            dispatch(addMessageActionCreator(newMessageBody));
        }
    }
}
// compose(
//     connect(mapStateToProps,mapDispatchToProps),
//     withAuthRedirect

// )(Dialogs)
// let AuthRedirectComponent = withAuthRedirect(Dialogs); 

// const DialogsContainer=connect(mapStateToProps,mapDispatchToProps) (AuthRedirectComponent);
//DialogsContainer
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect

)(Dialogs);