import { combineReducers } from 'redux';
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { selectedReddit, postsByReddit } from './reddit'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    selectedReddit,
    postsByReddit
});

export default todoApp;
