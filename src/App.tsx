import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
