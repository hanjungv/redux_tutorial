import * as types from '../actions/ActionTypes';

const initialState ={
    number: 0,
    dummy : 'dummb',
    dumbObject:{
        d:0,
        u:1,
        m:2,
        b:3
    }
};

export default function Counter(state = initialState, action){
    switch(action.type){
        case types.INCREMENT:
            return {
                ...state,
                number:state.number+1,
                dumbObject:{...state.dumbObject, u: 0}  //이런식으로 객체를 접근할 수 있다.
            };
        case types.DECREMENT:
            return {
                ...state,
                number:state.number-1
            };
        default:
            return state;
    }
}
