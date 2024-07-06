import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";

const init = "init";
// Define constants for increment
const inc = "increment";
// Define constant for decrement
const dec = "decrement";
// Define constant for increment by amount
const incByAmt = "incrementByAmount";

//store
const store = createStore(reducer, applyMiddleware(logger.default));

const history = [];

function reducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmt:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }

  return state;
}

// This line of code subscribes to the store's state change
store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

function initUser() {
  return { type: init };
}

// This function returns an object with a type property set to "increment"
function increment() {
  return { type: inc };
}
// This function returns an object with a type property set to "decrement"
function decrement() {
  return { type: dec };
}
// This function returns an object with a type property set to "incrementByAmount" and a payload property set to the value passed in
function incrementByAmount(value) {
  return { type: incByAmt, payload: value };
}

setInterval(() => {
  store.dispatch(increment());
  store.dispatch(decrement());
  store.dispatch(incrementByAmount(10));
}, 2000);

console.log(store.getState());
