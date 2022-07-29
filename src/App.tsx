import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' component={Profile}/>
                    <Route path='/Dialogs' component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
