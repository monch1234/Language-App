import { ENG, AM, RU, GREEN, YELLOW, RED } from './type';

function themeReducer(state = 'appGreen', action) {
    switch (action.type) {
        case GREEN:
            return 'appGreen';
        case YELLOW:
            return 'appYellow'
        case RED:
            return 'appRed'

        default:
            break;
    }
    return state
}

export default themeReducer