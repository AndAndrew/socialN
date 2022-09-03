import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {StoreType} from "./Redux/reduxStore";

type PropsType = {
    store: StoreType
}

function App(props: PropsType) {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={() => <Profile
                        profilePage={state.profilePage}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path='/Dialogs' render={() => <Dialogs
                        state={state.dialogsPage}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
