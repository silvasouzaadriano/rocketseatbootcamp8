import { createStore } from 'redux';

import rootReducer from './modules/rootreducer';

const store = createStore(rootReducer);

export default store;
