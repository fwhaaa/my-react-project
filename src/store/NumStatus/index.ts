const store = {
  state: {
    num: 21,
  },

  actions: {
    add1(newState: { num: number }, action: { type: String }) {
      // newState.num++;
      setTimeout(() => {
        newState.num++;
      }, 1000);
    },
    add2(newState: { num: number }, action: { type: String; val: number }) {
      newState.num++;
    },
  },
  actionNames: {},

  asyncActions: {
    asyncAdd1(dispatch: Function) {
      setTimeout(() => {
        console.log("aaaa");
        dispatch({ type: "add1" });
      }, 500);
    },
  },
};

let actionNames = {};
for (let key in store.actions) {
  actionNames[key] = key;
}
store.actionNames = actionNames;
export default store;
// export default {
//   state: {
//     num: 20,
//   },
//   actions: {
//     add1(newState, action) {
//       newState.num++;
//     },
//     add2(newState, action) {
//       newState.num += action.val;
//     },
//   },
//   add1: "add1",
//   add2: "add2",
// };
