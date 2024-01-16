import React from "react";
import PreLoader from "../../common/PreLoader/preLoader";
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) =>{
    if(!props.profile){
        return<>
        <PreLoader/>
        </>
    }
    
    return <div>
        <div><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'/></div>
     <div className={s.description_block}>
        <img src={props.profile.photos.large}/>
        {props.profile.lookingForAJobDescription}</div>   
       <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
}

export default ProfileInfo;