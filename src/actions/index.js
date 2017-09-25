export function fetchJoke(word) {
  return function (dispatch) {
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
        /// what goes here
      } else {
        console.log("No jokes were had.");
      }
    });
  };
}
