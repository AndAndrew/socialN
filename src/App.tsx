import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {PostType} from "./Components/Profile/MyPosts/Post/Post";
import {MessageType} from "./Components/Dialogs/Message/Message";
import {DialogItemType} from "./Components/Dialogs/DialogItems/DialogItem";
import {Dialogs} from "./Components/Dialogs/Dialogs";

function App(props: {posts: Array<PostType>, messages: Array<MessageType>, dialogs: Array<DialogItemType>}) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/Profile' component={Profile}/>*/}
                    {/*<Route path='/Dialogs' component={Dialogs}/>*/}

                    <Route path='/Profile' render={() => <Profile posts={props.posts}/>}/>
                    <Route path='/Dialogs' render={() => <Dialogs messages={props.messages} dialogsData={props.dialogs}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
