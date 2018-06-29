// @flow
import ReactRedux from "react-redux";
import Redux from "redux";

const { Provider } = ReactRedux;

type State = {
  value: number
};

const initialState: State = {
  value: 0
};

const counter = (state: State = initialState, action: any) => {
  switch (action.type) {
    case "counter/add": {
      return { value: state.value + 1 };
    }
  }
  return state;
};

const rootReducer = Redux.combineReducers({ counter });

export default () => Redux.createStore(rootReducer);
