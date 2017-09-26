import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

export const requestJoke = (word, jokeId) => ({
  type: types.REQUEST_JOKE,
  word,
  jokeId: jokeId
});

export const displayJoke = (joke, jokeId) => ({
  type: types.DISPLAY_JOKE,
  joke,
  jokeId
});

export function fetchJoke(word) {
  return function (dispatch) {
    const jokeId = v4();
    console.log(jokeId);
    dispatch(requestJoke(word, jokeId));
    word = word.replace(" ", "%20");
    return fetch("https://icanhazdadjoke.com/search?term=" + word + "&limit=1", {
      headers : {
        'Accept': 'application/json'
      }}).then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    ).then(function(json) {
      console.log(json);
      if (json.total_jokes > 0) {
        const joke = json.results[0].joke;
        console.log(joke);
        dispatch(displayJoke(joke, jokeId));
      } else {
        const joke = "Try again. I ain't that good";
        dispatch(displayJoke(joke, jokeId));
      }
    });
  };
}
