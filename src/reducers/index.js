import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';


const reducers = combineReducers({
    counter, ui
});

export default reducers;
//combineReducers를 통해 컴바인 시켜준다.
