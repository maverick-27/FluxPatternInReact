// Simple Reducer Object 
const merge = (prev, update) => Object.assign({}, prev, update);
// const reducer = (state, update) => merge(state, update);
const reducer = (state, update) => state 

let state = {};
state = reducer(state, { foo: "foo" });
state = reducer(state, { bar: "bar" });
state = reducer(state, { foo: "baz" });
