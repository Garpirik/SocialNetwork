import { Field } from "redux-form"
import { maxLengthCreator, requiredField } from "../../utils/validators/validator"
import { createField, Input } from "../common/FormsControls/FormsControls"

const LoginForm = (props, captchaUrl) =>{
    
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

    <div>
        <button>Login</button>
    </div>

    </form>
    )
}
export default LoginForm