import React from "react";
import {Header} from "./Header";
import {AppStateType} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../Redux/authReducer";

type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

type mapDispatchToPropsType = {
    getAuthUserData: () => void,
    logout: () => void
}

export type HeaderPropsType = MapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType, any> {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);