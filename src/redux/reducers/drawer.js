export const drawerReducer = (state = { drawer: false }, action) => {
  switch (action.type) {
    case "DRAWER":
      console.log(action.payload, "asdasdasdasdasd");
      return action.payload;

    default:
      return state;
  }
};
