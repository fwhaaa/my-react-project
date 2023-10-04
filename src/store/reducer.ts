import handleNum from "./NumStatus";

const defaultState = {
  ...handleNum.state,
};

let reducer = (state = defaultState, action: { type: string; val: number }) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case handleNum.add1:
      handleNum.actions[handleNum.add1](newState, action); // 可能划红色曲线警告
      break;
    case handleNum.add2:
      handleNum.actions[handleNum.add2](newState, action); // 可能划红色曲线警告
      break;

    default:
      break;
  }
  return newState;
};

export default reducer;
