import { createStore, combineReducers } from 'redux';

import notificationReducer from './Reducer/notificationReducer';

const rootReducer = combineReducers({
  notification: notificationReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;