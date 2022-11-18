import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../Utils/Validators/Validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/reduxStore";

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Email'}
                   name={'email'}
                   validate={[requiredField]}
                   component={Input}/>
        </div>
        <div>
            <Field placeholder={'Password'}
                   type={'password'}
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

const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)