import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../Utils/Validators/Validators";

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'}
                   name={'login'}
                   validate={[requiredField]}
                   component={Input}/>
        </div>
        <div>
            <Field placeholder={'Password'}
                   name={'password'}
                   validate={[requiredField]}
                   component={Input}/>
        </div>
        <div>
            <Field type={'checkbox'}
                   name={'rememberMe'}
                   component={Input}/>remember me
        </div>
        <div>
            <button>login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}