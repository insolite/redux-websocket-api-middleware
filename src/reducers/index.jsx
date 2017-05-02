import {combineReducers} from 'redux';

import widgets from './widgets';


let mainReducer = combineReducers({
    widgets,
});

export default mainReducer;
