import { createStore } from "redux";
import alphabet from './reducers';
// import thunk from 'redux-thunk';

// const middleware = applyMiddleware(thunk);
// const enhancer = compose(middleware);
// const store = createStore(alphabet, enhancer);
const store = createStore(alphabet);
export default store;