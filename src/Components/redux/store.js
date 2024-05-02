import {createStore} from 'redux';
import alphabet from './reducers';

const store = createStore(alphabet);

export default store;
