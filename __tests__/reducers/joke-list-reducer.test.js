import jokeList from './../../src/reducers/joke-list-reducer';
import constants from './../../src/constants';

describe("Joke list reducer", () => {

  test('should return equivalent state if no action type is recognized', () => {
    expect(jokeList([], { type: null })).toEqual([]);
  });

  it("update state on request song", () => {
      const action = actions.requestSong("crocodile rock");
      const newObject = {
        isFetching: true,
        title: action.title,
        songId: action.songId,
      };
      expect(songsById(defaultState.songsById, action)[action.songId])
      .toEqual(newObject);
    });

    it("update state on receive song", () => {
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
