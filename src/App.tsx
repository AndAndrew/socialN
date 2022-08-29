import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {StateType} from "./Redux/state";

type PropsType = {
    state: StateType,
    addPost: () => void,
    updateNewPostText: (newText: string) => void
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}/>
                    }/>
                    <Route path='/Dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
