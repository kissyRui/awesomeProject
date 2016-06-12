import { combineReducers } from 'redux';
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { selectedReddit, postsByReddit } from './reddit'

import products, * as fromProducts from './products'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    selectedReddit,
    postsByReddit,
    products
});

export default todoApp;
