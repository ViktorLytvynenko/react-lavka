import {combineReducers, createStore} from "redux";
import productsReducer from "./reducers/productsReducer";

const reducers = combineReducers({
    productsPage: productsReducer
})

const store = createStore(reducers)

export default store