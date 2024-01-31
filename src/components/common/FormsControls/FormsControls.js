import { Field } from "redux-form";
import styles from "./FormsControls.module.css"
const FormControl = ({input,meta,child, element, ...props}) =>{
    const hasError =   meta.touched && meta.error;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error:" " )}>
            <div>
            <element {...props.input}  {...props} />
            </div>
           {hasError  && <span>{meta.error}</span>}
        </div>
    ) 
}
export const TextArea = (props) =>{
    const{input,meta,child, ...restProps} = props;
    // const hasError =   meta.touched && meta.error;
    return(
        <FormControl {...props}>
            <textarea {...props.input}  {...props} /> 
            </FormControl>
        // <div className={styles.formControl + " " + (hasError ? styles.error:" " )}>
        //     <div>
        //     <textarea {...input} {...props}/>
        //     </div>
        //    {hasError  && <span>{meta.error}</span>}
        // </div>
    )
}


export const Input = (props) =>{
    const{input,meta,child, ...restProps} = props;
    // const hasError =   meta.touched && meta.error;
    return(
        <FormControl {...props}><input {...props.input} {...props} /> </FormControl>
        // <div className={styles.formControl + " " + (hasError ? styles.error:" " )}>
        //     <div>
        //     <input {...input} {...props}/>
        //     </div>
        //    {hasError  && <span>{meta.error}</span>}
        // </div>
    )
}

export const createField = (placeholder,name,validators,component,props ={} , text = "")=>{
    return(
        <div>
            <Field  placeholder={placeholder} name={name} validate={validators} component={component} {...props}  />
            {text}
        </div>
    )
}