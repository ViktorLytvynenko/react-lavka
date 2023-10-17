import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.scss';
import AppContainer from "./appContainer";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
const setFirstStorage = (key) => {
    if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify([]))
    }
}
setFirstStorage("wishListId")
setFirstStorage("basketListId")
if (!localStorage.getItem("viewMod")){
    localStorage.setItem("viewMod",'cards')
}

export const ViewContext = createContext(undefined)
const ViewProvider = () => {
    let viewMod = localStorage.getItem('viewMod')
    return (
        <ViewContext.Provider value = {viewMod} >
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </ViewContext.Provider>
    )
}

root.render(
    <ViewProvider/>
);

reportWebVitals();
