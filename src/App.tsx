import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {DialogItemType, MessageType, PostType} from "./Redux/state";

type stateType = {
    state: {
        profilePage: {
            posts: Array<PostType>
            newPostText: string
        },
        dialogsPage: {
            dialogs: Array<DialogItemType>,
            messages: Array<MessageType>
        }
    },
    addPost: () => void,
    updateNewPostText: (newText: string) => void
}

function App(props: stateType) {
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
    )
        ;
}

export default App;
