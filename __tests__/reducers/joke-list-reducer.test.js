import jokesById from './../../src/reducers/joke-list-reducer';
import constants from './../../src/constants';
import * as actions from "./../../src/actions";

describe("Joke list reducer", () => {
  const { defaultState, types } = constants;

  it('should return equivalent state if no action type is recognized', () => {
    expect(jokesById([], { type: null })).toEqual([]);
  });

  it("update state on request joke", () => {
    const action = actions.requestJoke("cheese");
    const newObject = {
      isFetching: true,
      word: action.word,
      jokeId: action.jokeId,
    };
    expect(jokesById(defaultState.jokesById, action)[action.jokeId])
    .toEqual(newObject);
  });

  it("update state on receive joke", () => {
    const action = actions.displayJoke("This is a joke", 1);
    const newObject = {
      isFetching: false,
      joke: action.joke,
      jokeId: action.jokeId
    };
    expect(jokesById(defaultState, action))
    .toEqual(newObject);
  });

});
