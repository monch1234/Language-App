import { combineReducers } from "redux";
import smenReducer from './smenReducer';
import themeReducer from './reducerTheme';

export default combineReducers({
    state1:smenReducer,
    state2:themeReducer
})
