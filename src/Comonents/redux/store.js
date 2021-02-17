import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import alphabet from './reducers'

const store = createStore(
    alphabet, composeWithDevTools(applyMiddleware())
)
export default store;