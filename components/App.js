// @flow
import React from "react";
import ReactRedux from "react-redux";
import Redux from "redux";

const { Provider, connect } = ReactRedux;

type State = {
  value: number
};

const initialState: State = {
  value: 0
};

const counter = (state: State = initialState, action: any) => {
  switch (action.type) {
    case "add": {
      return { value: state.value + 1 };
    }
  }
  return state;
};

const rootReducer = Redux.combineReducers({ counter });

const App = connect(state => state.counter)(props => {
  return (
    <div>
      value: {props.value}
      <button onClick={() => props.dispatch({ type: "add" })}>+1</button>
    </div>
  );
});

const store = Redux.createStore(rootReducer);
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
