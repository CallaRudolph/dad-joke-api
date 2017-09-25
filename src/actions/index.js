export function fetchJoke(word) {
  return function (dispatch) {
    word = word.replace(" ", "%20");
    return fetch("https://icanhazdadjoke.com/search?term=" + word + "&limit=1").then(
      respone => response.json(),
      error => console.log("An error occurred.", error)
    ).then(function(json) {
      if (json.results > 0) {
        const joke = json.results.joke;
        console.log(joke);
        /// what goes here
      } else {
        console.log("No jokes were had.");
      }
    });
  };
}
