import { Form, reduxForm } from "redux-form";
import { createField, Input, TextArea } from "../../common/FormsControls/FormsControls";
import s from "./../../../components/common/FormsControls/FormsControls.module.css"
const ProfileDataForm = ({handleSubmit, profile , error}) =>{
    return(
        <form onSubmit={handleSubmit}>
            {/* {isOwner && !userId ? <div> <button onClick={() => { }} >save</button></div> : null} */}
        <div> <button> save</button></div>
        {error && <div className={s.formSummaryError}> {error}</div>}
        <div><b>Full name:</b> {createField("Full name","fullName",[],Input)}</div>
        <div>
            <b>  Looking for a job:  </b> {createField("","LookingForAJob",[],Input, {type: "checkbox"})}
        </div>
            {/* <div> 
            <b>My professional skills: </b>  {profile.lookingForAJobDescription} 
            </div> */}
            {createField("My professional skills","lookingForAJobDescription",[],TextArea)}
        <div>
           {/* <b>About me: </b> {profile.aboutMe} */}
           {createField("About me","AboutMe",[],TextArea)}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key=> { return <div key={key}>  
            <b >{key}: {createField(key, "contacts." + key , [] , Input)}</b>
           
            </div>})}

        </div>
        </form>
    )
}

export default reduxForm({ form: "edit-profile" })(ProfileDataForm);