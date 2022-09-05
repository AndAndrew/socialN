import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, StoreType} from "./Redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import {StoreContext} from './StoreContext';

type ProviderType = {
    store: StoreType,
    children: any
}

const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>
}

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    )
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree)