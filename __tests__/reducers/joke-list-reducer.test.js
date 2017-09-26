import jokesById from './../../src/reducers/joke-list-reducer';
import constants from './../../src/constants';
import * as actions from "./../../src/actions";

describe("Joke list reducer", () => {
  const { defaultState, types } = constants;

  test('should return equivalent state if no action type is recognized', () => {
    expect(jokesById([], { type: null })).toEqual([]);
  });

  it("update state on request joke", () => {
      const action = actions.requestJoke("cheese");
      const newObject = {
        isFetching: true,
        word: action.word,
        jokeId: action.jokeId,
      };
      expect(jokesById(defaultState.jokeId, action)[action.jokeId])
      .toEqual(newObject);
    });

    it("update state on receive joke", () => {
      const action = actions.receiveSong("kiss", "prince", 1, ["you don't have to be beautiful", "to turn me on"]);
      const newObject = {
        isFetching: false,
        title: action.title,
        artist: action.artist,
        songId: action.songId,
        receivedAt: action.receivedAt,
        songArray: action.songArray,
        currentPhrase: action.songArray[0],
        arrayPosition: 0
      };
      expect(songsById(defaultState.songsById, action)[action.songId])
      .toEqual(newObject);
    });

});
