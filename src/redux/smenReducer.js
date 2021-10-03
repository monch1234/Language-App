
import { ENG, AM, RU } from './type';

function smenReducer(state = 'Text Why are you little brother quieted down? - resentment is poured into the chest.', action) {

    switch (action.type) {
        case ENG:
            return 'Text Why are you little brother quieted down? - resentment is poured into the chest.';
        case AM: 
        return ' Տեքստ Ինչու՞ ես փոքր եղբայր լռում: - դժգոհությունը լցվում է կրծքավանդակի մեջ.';
        case RU: 
        return ' Текст Ну что ты братишка притих? - обида залита в груди.' ;
        default:
            return state;
    }

    // if (action.type === ENG) {
    //     return 'Text Why are you little brother quieted down? - resentment is poured into the chest.'
    // } else if (action.type === RU) {
    //     return ' Текст Ну что ты братишка притих? - обида залита в груди.'
    // } else if (action.type === AM) {
    //     return ' Տեքստ Ինչու՞ ես փոքր եղբայր լռում: - դժգոհությունը լցվում է կրծքավանդակի մեջ.'
    // }
    // return state
}

export default smenReducer