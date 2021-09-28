import { combineReducers } from "redux";
import { ENG, AM, RU } from './type';

function Smen(state = 0, action) {

    if (action.type = RU) {
        return state + 1
    } else if(action.type = ENG) {
        return state - 1
    }
    return state

    // if(action.type = RU){
    //     return 'Text Why are you little brother quieted down? - resentment is poured into the chest.'
    // } else if (action.type = ENG){
    //     return ' Текст Ну что ты братишка притих? - обида залита в груди.'

    // }
}

export const Reducer = combineReducers({
    Sm: Smen
})