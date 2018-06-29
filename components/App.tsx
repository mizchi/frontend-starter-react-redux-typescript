// @flow
import React from "react";
import ReactRedux from "react-redux";
import createStore, { RootState } from "../store/createStore.ts";

const { Provider, connect } = ReactRedux;

const App = connect((state: RootState) => state.counter)(props => {
  return (
    <div>
      value: {props.value}
      <button onClick={() => props.dispatch({ type: "counter/add" })}>
        +1
      </button>
    </div>
  );
});

export default () => (
  <Provider store={createStore()}>
    <App />
  </Provider>
);
