import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./Redux/reduxStore";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

type PropsType = {
    store: StoreType
}

function App() {
    // const state = store.getState();
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={() => <Profile
                        // profilePage={state.profilePage}
                        // dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path='/Dialogs' render={() => <DialogsContainer
                        // state={state.dialogsPage}
                        // dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
