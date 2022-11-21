import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/appReducer";
import {AppStateType} from "./Redux/reduxStore";
import {Preloader} from "./Components/Common/Preloader/Preloader";

type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    initializeApp: () => void
}
export type AppPropsType = mapStateToPropsType & mapDispatchToPropsType

class App extends React.Component<AppPropsType, any> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/Users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
