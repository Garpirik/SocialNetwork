import React, { useEffect } from "react";
import { useState } from "react";
import PreLoader from "../../common/PreLoader/preLoader";
import s from './ProfileInfo.module.css'
/* eslint-disable */
const ProfileStatusWithHooks = (props) =>{    
        const [editMode,setEditMode] = useState(false);
        const [status,setStatus]  = useState(props.status);
        useEffect( () =>{
            setStatus(props.status)
        } , [props.status])
        const activateEditMode = () =>{
            setEditMode(true)
        }
        const deactivateEditMode =() =>{
            setEditMode(false)
            props.updateStatus(status)
        }

        const onStatusChange = (e) =>{
            setStatus(e.currentTarget.value)
        }
        return (
            
    <>
        { editMode &&
        <div>
        <input autoFocus={true} value={status} onBlur={deactivateEditMode} onChange={onStatusChange}/>
        {/* {props.status}  */}
    </div>  }{ !editMode &&
       
    <div>
       <b>Status: </b> <span onDoubleClick={activateEditMode}> {status || "No status"} </span>
    </div>}
    </>
    )
}

export default ProfileStatusWithHooks;