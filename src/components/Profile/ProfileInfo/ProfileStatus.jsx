import React from "react";
import { useState } from "react";
import PreLoader from "../../common/PreLoader/preLoader";
import s from './ProfileInfo.module.css'
/* eslint-disable */
const ProfileStatus = (props) =>{    
    // let statusInputRef = React.createRef()
    const [isEdit,setEdit] = useState(false);
    const [status, setStatus] = useState(props.status);
    const EditStatus = () =>{
        setEdit(!isEdit)
    }
    // let state = {
    //     status: props.status
    // }
    // if(isEdit ===0){
    //     props.updateStatus(state.status)
    // }
    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
        props.updateStatus(status);
        
    }
    const SaveStatus = (e) =>{
        setEdit(false);
        console.log(props.status)
    }
    return (
    <>
        {isEdit? (
        <div>
        <input onChange={onStatusChange}  autoFocus onBlur={SaveStatus} value={status}/>{status}
    </div>) : (
    <div>
        <span onDoubleClick={setEdit}> {status !==""? status:"No status"} </span>
    </div>)}
    </>
    )
}

export default ProfileStatus