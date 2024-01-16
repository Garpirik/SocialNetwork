import { reduxForm } from "redux-form";
import {connect} from "react-redux"
import { LogIn, LogOut } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import { Field } from "redux-form"
import { maxLengthCreator, requiredField } from "../../utils/validators/validator"
import { Input } from "../common/FormsControls/FormsControls"
import styles from "../common/FormsControls/FormsControls.module.css"
const LoginForm = (props) =>{
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
        props.LogIn(FormData.email,FormData.password, FormData.rememberMe)
    }
    if(props.isAuth){
        return <Navigate to="/profile"/>
    }
    return(
        <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </div>
        )
}
const mapStateToProps = (state) =>({isAuth : state.auth.isAuth})
    
export default connect(mapStateToProps,{LogIn})(Login);
