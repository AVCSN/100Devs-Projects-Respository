//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener ('click', getDrink)
let i = 0
function getDrink() {
    let drink = document.querySelector('input').value.replace(' ', '_')
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink)
    .then(res => res.json())
    .then(data => {
        document.querySelector('h2').innerText = data.drinks[i].strDrink
        document.querySelector('img').src = data.drinks[i].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[i].strInstructions
        i++
        if (i >= data.drinks.length) {
            i = 0;}
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}