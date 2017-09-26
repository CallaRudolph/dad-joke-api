// import constants from "./../constants";
// const { types } = constants;


export default (state = [], action) => {
  switch (action.type) {
    case "DISPLAY_JOKE":
      const { joke } = action;
      return [
        joke: joke
      ];
    default:
      return state;
  }
}
