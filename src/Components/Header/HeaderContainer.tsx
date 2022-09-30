import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {AppStateType} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/authReducer";

type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

type mapDispatchToPropsType = {
    setAuthUserData: (userId: string, email: string, login: string) => void
}

export type HeaderPropsType = MapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType, any> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            headers: {
                'API-KEY': '8f1da31f-2ec3-4f0d-8757-bcc4266dd215'
            },
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);