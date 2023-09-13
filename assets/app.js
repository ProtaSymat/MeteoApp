import { registerReactControllerComponents } from '@symfony/ux-react';
import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));

const parametres = {
    clé: "bb9b75d39892dc9ac5921552d5683730",
    unité: "metric",
    langue: "fr",
}

const form = document.getElementById('meteo');
const villeInput = document.getElementById('ville');
const resultatDiv = document.getElementById('resultat');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêcher la soumission du formulaire par défaut

    const nouvelleVille = villeInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nouvelleVille}&appid=${parametres.clé}&units=${parametres.unité}&lang=${parametres.langue}`)
        .then(res => res.json())
        .then(data => {
            if (data.cod === "404") {
                resultatDiv.innerHTML = `La ville ${nouvelleVille} n'existe pas`;
            } else {
                const { name, weather, main } = data;
                resultatDiv.innerHTML = `<h2>${name}</h2> <p>${weather[0].description}</p> <p>${main.temp}</p> <p>${main.humidity}</p>`;
            }
        });
});