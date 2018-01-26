import {SELECT_POST} from '../actions';

export default function (state=[],action){

    switch(action.type){
        case SELECT_POST:
            return [action.payload]; //concat the state and send
        default:
            return state;
    }

}