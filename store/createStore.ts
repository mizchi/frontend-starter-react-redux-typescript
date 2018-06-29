// @flow
import ReactRedux from "react-redux";
import Redux from "redux";

const { Provider } = ReactRedux;

type CounterState = {
  value: number
};

const initialState: CounterState = {
  value: 0
};

const counter = (state: CounterState = initialState, action: any) => {
  switch (action.type) {
    case "counter/add": {
      return { value: state.value + 1 };
    }
  }
  return state;
};

export type RootState = { counter: CounterState }

const rootReducer = Redux.combineReducers({ counter });

export default () => Redux.createStore(rootReducer);
