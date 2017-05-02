import { SAVE_WIDGET_DATA, CLEAR_WIDGET_DATA } from '../actions/widgets';


let initialState = {};

export default function widgets(state=initialState, action) {
    let newState;
    if (action.type == SAVE_WIDGET_DATA) {
        newState = {...state, [action.payload.widgetId]: action.payload.data};
    } else if (action.type == CLEAR_WIDGET_DATA) {
        newState = {...state};
        delete newState[action.payload.widgetId];
    } else {
        newState = state;
    }
    return newState;
};
