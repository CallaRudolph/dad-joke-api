import jokeList from './../../src/reducers/joke-list-reducer';
import constants from './../../src/constants';

describe("Joke list reducer", () => {

  test('should return equivilant state if no action type is recognized', () => {
    expect(jokeList([], { type: null })).toEqual([]);
  });

});
