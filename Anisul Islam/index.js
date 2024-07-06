//state
const initialCounterState = {
  count: 0,
};
const userState = {
  users: [{ name: "Aaban Nayeem" }],
};

//action - object (type and payload)
const incrementCounter = () => {
  return { type: "INCREMENT_COUNTER" };
};
//increments Counter

//decrements
