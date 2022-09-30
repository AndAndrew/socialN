import React from "react";
import {Header} from "./Header";
import {AppStateType} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/authReducer";
import {authAPI} from "../../API/api";

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
        authAPI.getAuthMe().then(response => {
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