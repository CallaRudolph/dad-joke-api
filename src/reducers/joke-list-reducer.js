import constants from "./../constants";
const { defaultState, types } = constants;

const jokesById = (state = defaultState, action) => {
  let joke;
  let newJoke;
  let newState;
  switch (action.type) {
    case types.REQUEST_JOKE:
      newJoke = {
        isFetching: true,
        word: action.word,
        jokeId: action.jokeId
      };
      newState = Object.assign({}, state, {
        [action.jokeId]: newJoke
      });
      return newState;
    case types.DISPLAY_JOKE:
      joke = state[action.jokeId];
      newJoke = Object.assign({}, joke, {
        isFetching: false,
        joke: action.joke,
        jokeId: action.jokeId
      });
      return newJoke;
    default:
      return state;
  }
}

export default jokesById;
