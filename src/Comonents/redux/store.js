import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
//import alphabet from './reducer'

const store = createStore(
    counter, composeWithDevTools(applyMiddleware())
)
export default store;