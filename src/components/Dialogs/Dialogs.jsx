import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import store, { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/messagesPageReducer';
import { maxLengthCreator, requiredField } from '../../utils/validators/validator';
import { TextArea } from '../common/FormsControls/FormsControls';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

/* eslint-disable */
const Dialogs = (props) =>{
    let state = props.messagesPage;
    let messagesElement = state.messagesData.map ( message => <Message name = {props.message} key={message.id} message = {message.message} />)
    let dialogsElement = state.dialogsData.map( dialog=> <DialogItem name = {dialog.name} key={dialog.id} id = {dialog.id}/>)
    
    // [
        
    //         <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>,
    //         <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id}/>
    
    // ]
    // let messageSend = React.createRef()

    let addMessage = () => {
        props.sendMessage()
    }

    // let onMessageChange = (e) =>{
    //     let text = e.current.value;
    //     let action = updateMessageTextActionCreator(text);
    //     // props.dispatch(action);
    // }
    let addNewMessage = (values) =>{
        alert(values.newMessageBody)
        props.sendMessage(values.newMessageBody)
    }

    // alert(props.isAuth);
    // if(!props.isAuth === false){return <Navigate to={'/login'}/>}
    return( <div className={s.dialogs}>
        <div className={s.dialogs_item}>
            {dialogsElement}
            {/* <DialogItem name = "Petik" id = "1"/>
            <DialogItem name = "Ghul" id = "2"/> */}
        </div>
        <div className={s.messages}>
            {messagesElement}
            {/* <Message message = {messagesData[0].message} />
            <Message message = {messagesData[1].message}/>
            <Message message = "How are you"/> */}

       </div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>)
}
const AddMessageForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
        <div className={s.me}>
            <Field component={TextArea} name={"newMessageBody"}  validate={[requiredField , maxLengthCreator(50)]} placeholder="Enter your message"/>
            {/* <textarea placeholder = "Enter your message"onChange={onMessageChange} ref={messageSend} value={props.newMessageText}> </textarea> */}
            <div>

            </div><button >Отправить</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm)
// button onClick={addMessage}

export default Dialogs;