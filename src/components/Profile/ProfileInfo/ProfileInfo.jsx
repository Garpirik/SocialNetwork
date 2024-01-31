import React from "react";
import PreLoader from "../../common/PreLoader/preLoader";
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserPhoto from "./../../../assets/img/user.png"
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";
const ProfileInfo = ({profile,status,updateStatus, isOwner, savePhoto, userId, saveProfile, ...props}) =>{
    let [editMode,setEditMode] = useState(false);
    
    if(!profile){
        return<>
        <PreLoader/>
        </>
    }
    
    
    console.log("Isowner" , isOwner)
    console.log("usd", userId)
    const onMainPhotoSelected = (e) =>{
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit =  (formData) =>{
        console.log(formData);
        saveProfile(formData).then( () =>{
            setEditMode(false);
        })
 
          
      

    }
    
    return <div>
        {/* <div><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'/></div> */}
     <div className={s.description_block}>
        <img src={profile.photos.large || UserPhoto } className={s.MainPhoto}/>
        {profile.lookingForAJobDescription}</div>   
        {isOwner && !userId ? <input type={"file"}  onChange={onMainPhotoSelected}/> : null}

        {editMode ? <ProfileDataForm initialValues={profile}  profile={profile} onSubmit={onSubmit}/> : <ProfileData goToEditMode={ () => { setEditMode(true)}}  profile={profile} isOwner={isOwner} userId={userId}  />}
        {/* <ProfileData profile={profile} /> */}

       <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
    </div>
}

const ProfileData = ({profile, isOwner , userId, goToEditMode}) =>{
    return(
        <div>
            {isOwner && !userId ? <div> <button onClick={goToEditMode} >Edit</button></div> : null}
        <div><b>Full name:</b> {profile.fullName}</div>
        <div>
            <b>  Looking for a job:  </b> {profile.lookingForAJob ? "yes" : "no"}
        </div>
           {profile.lookingForAJob && <div> 
            <b>My professional skills: </b>  {profile.lookingForAJobDescription} </div>}
        <div>
           <b>About me: </b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key=> <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>)}

        </div>
        </div>
    )
}




const Contacts = ({contactTitle,contactValue}) =>{
    return(
        <div className={s.contact}>
        <b>{contactTitle} :</b> {contactValue}
        </div>
    )
}


export default ProfileInfo;