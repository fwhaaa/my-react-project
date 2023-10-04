import handleNum from "./";

let reducer = (
  state = { ...handleNum.state },
  action: { type: string; val: number }
) => {
  let newState = JSON.parse(JSON.stringify(state));
  //   switch (action.type) {
  //     case handleNum.add1:
  //       handleNum.actions[handleNum.add1](newState, action);
  //       break;
  //     case handleNum.add2:
  //       handleNum.actions[handleNum.add2](newState, action);
  //       break;
  //     default:
  //       break;
  for (let key in handleNum.actionNames) {
    if (action.type === handleNum.actionNames[key]) {
      handleNum.actions[handleNum.actionNames[key]](newState, action);
      break;
    }
  }

  return newState;
};

export default reducer;
