// import handleArr from "./";
// let reducer = (
//   state = { ...handleArr.state },
//   action: { type: string; val: number }
// ) => {
//   let newState = JSON.parse(JSON.stringify(state));

//   switch (action.type) {
//     case handleArr.sarrpush:
//       handleArr.actions[handleArr.sarrpush](newstate, action);
//       break;
//     default:
//       break;
//   }
//   return newState;
// };
// export default reducer;
import handler from "./";
let reducer = (state = { ...handler.state }, action: { type: string }) => {
  let newState = JSON.parse(JSON.stringify(state));
  for (let key in handler.actionNames) {
    if (action.type === handler.actionNames[key]) {
      handler.actions[handler.actionNames[key]](newState, action);
      break;
    }
  }
  return newState;
};
export default reducer;
