const planets = ['Mercure', 'Vénus', 'Terre', 'Mars', 'Jupiter', 'Saturne', 'Uranus', 'Neptune'];
const listPlanets = document.querySelector('.listPlanets')

planets.forEach(planet => {
    const divPlanet = document.createElement('div')
    divPlanet.classList.add('planet')
    divPlanet.textContent = planet
    switch (planet) {
        case 'Mercure':
            divPlanet.style.backgroundColor = 'gray';
            break;
        case 'Vénus':
            divPlanet.style.backgroundColor = 'yellow';
            break;
        case 'Terre':
            divPlanet.style.backgroundColor = 'blue';
            break;
        case 'Mars':
            divPlanet.style.backgroundColor = 'red';
            break;
        case 'Jupiter':
            divPlanet.style.backgroundColor = 'orange';
            break;
        case 'Saturne':
            divPlanet.style.backgroundColor = 'gold';
            break;
        case 'Uranus':
            divPlanet.style.backgroundColor = 'lightblue';
            break;
        case 'Neptune':
            divPlanet.style.backgroundColor = 'blue';
            break;
    }
    listPlanets.appendChild(divPlanet)

}
    
);
const solarSystem = [
    { name: "Mercure", color: "gray", moons: [] },
    { name: "Vénus", color: "yellow", moons: [] },
    { name: "Terre", color: "blue", moons: ["Lune"] },
    { name: "Mars", color: "red", moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", color: "orange", moons: ["Io", "Europe", "Ganymède", "Callisto"] },
    { name: "Saturne", color: "gold", moons: ["Titan", "Encelade", "Mimas", "Dioné"] },
    { name: "Uranus", color: "lightblue", moons: ["Titania", "Oberon", "Umbriel", "Miranda"] },
    { name: "Neptune", color: "blue", moons: ["Triton", "Néréide"] }
];

// bonnus

solarSystem.forEach(planet => {
   
    const divPlanet = document.createElement('div');
    divPlanet.classList.add('planet');
    divPlanet.textContent = planet.name;
    divPlanet.style.backgroundColor = planet.color;

    planet.moons.forEach((moon, index) => {
        const divMoon = document.createElement('div');
        divMoon.classList.add('moon');
        divMoon.textContent = moon;  

       
        divMoon.style.top = `${Math.random() * 100}px`;
        divMoon.style.left = `${Math.random() * 100}px`;

        divPlanet.appendChild(divMoon);
    });

    listPlanets.appendChild(divPlanet);
});
