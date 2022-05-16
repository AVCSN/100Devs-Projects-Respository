//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://karljoke.herokuapp.com/jokes/random'
  fetch(url, {method: 'GET'})
      .then(res => res.json()) // parse response as JSON
      .then(joke => {
        console.log(joke)
        document.querySelector('h2').innerText = joke.setup
        document.querySelector('h3').innerText = joke.punchline
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}