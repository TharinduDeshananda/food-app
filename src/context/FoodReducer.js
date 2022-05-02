const foodReducer = (state, action) => {
  switch (action.type) {
    case "SET_MEAL":
      state.meal = action.payload;
      return { ...state };
    case "ADD_CURRY":
      state.curries.push(action.payload);
      return { ...state };
    case "ADD_CURRIES":
      console.log("setting curries");
      console.log("beore new curries set: ", state.curries);
      state.curries.push(...action.payload);
      console.log("after new curries set: ", state.curries);
      return { ...state };
    case "SET_CURRIES":
      console.log("beore new curries set: ", state.curries);
      state.curries = action.payload;
      console.log("after new curries set: ", state.curries);
      return { ...state };
    case "REMOVE_CURRY":
      console.log("before state: ", state.curries);
      state.curries = state.curries.filter(
        (value) => value?.localeCompare(action.payload) != 0
      );
      console.log("after state: ", state.curries);
      return { ...state };
    default:
      return state;
  }
};

export default foodReducer;
