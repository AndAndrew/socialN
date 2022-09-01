import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, StoreType} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

const rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root')
    )
}

rerenderEntireTree(store);

store.subscribe(rerenderEntireTree)