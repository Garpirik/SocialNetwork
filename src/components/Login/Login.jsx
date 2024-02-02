import { reduxForm } from "redux-form";
import {connect} from "react-redux"
import { LogIn, LogOut } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import { Field } from "redux-form"
import { maxLengthCreator, requiredField } from "../../utils/validators/validator"
import { createField, Input } from "../common/FormsControls/FormsControls"
import styles from "../common/FormsControls/FormsControls.module.css"
const LoginForm = (props) =>{
    console.log("Captcha lol:" , props.captchaUrl);
    return(<form onSubmit={props.handleSubmit}>
    <div>
        <Field placeholder={"Email"} name={"email"} component={Input} validate={[requiredField , maxLengthCreator(20)]}  type="login" />
    </div>
    <div>
    <Field placeholder={"Password"}  name={"password"} component={Input} validate={[requiredField , maxLengthCreator(25)]}  type="password" />
    </div>
    <div>
    <Field component={Input}  placeholder={"remember"} name={"rememberMe"}   type={"checkbox"} /> remember me
    </div>
    {props.captchaUrl && <img src={props.captchaUrl}/>}
    {props.captchaUrl && createField("Symbols from image", "captcha", [], Input)}
    { props.error &&  <div className={styles.formSummaryError}>
        {props.error}
    </div> 
}
    <div>
        <button>Login</button>
    </div>
   
    </form>
    )
}



const LoginReduxForm =reduxForm({
        form: 'login'
})(LoginForm)

const Login = (props) =>{
    const onSubmit = (FormData) =>{
        props.LogIn(FormData.email,FormData.password, FormData.rememberMe , FormData.captcha)
    }
    if(props.isAuth){
        return <Navigate to="/profile"/>
    }
    return(
        <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        
        </div>
            
        )
}
const mapStateToProps = (state) =>({captchaUrl: state.auth.captchaUrl , isAuth : state.auth.isAuth})
    
export default connect(mapStateToProps,{LogIn})(Login);
