import { combineReducers } from "redux";
import { createStore } from "redux";

// Reducers
const initialState = {
    count: 0
};

function auth(state = initialState, action) {
  console.log("auth", state, action);

  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  auth: auth,
});

export const store = createStore(auth);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });

export type RootState = ReturnType<typeof rootReducer>;
