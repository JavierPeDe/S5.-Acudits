//Exercici-1 (nivel-1)
// Crear la web d'acudits, el funcionament dels quals és:

// - En entrar no mostrarà cap acudit. Apareixerà el títol i el botó de següent acudit“

// - En prémer el botó de “Següent acudit” es farà fetch a la API d'acudits i es mostrarà per consola l'acudit en qüestió.

// Nota: En aquest exercici no és necessari maquetar la web, primer farem que funcioni per a passar a aplicar-li els estils.

//Variasbles:
const urlJoke = 'https://icanhazdadjoke.com/';
const textJoke = document.getElementById('acudit');
//randomJoke() Funcion que utiliza la API urlJoke y muestra un chiste por consola. 
async function randomJoke() {
    try {
        const jokeData = await fetch(urlJoke, {
            headers: {
                'Accept': 'application/json'
            }
        })
        const jokeObj = await jokeData.json();
        console.log(jokeObj.joke);
        textJoke.innerHTML = jokeObj.joke;
    }
    catch {
        console.log('Se ha producido un error al llamar a ' + urlJoke);
        textJoke.innerHTML = ('Se ha producido un error al llamar a ' + urlJoke);
    }
}

//Variables:
const curDate = document.getElementById("date");
const weatherIcon = document.getElementById("weatherIcon");
const currentCity = document.getElementById("location");
const curTemp = document.getElementById("temp");
const tempMaxMin = document.getElementById("tempMinMax");
const descriptionWeatherIcon = document.getElementById("descriptionWeatherIcon");
const newCity = document.getElementById("newCity");
const cityNotFound = document.getElementById("cityNotFound");
//funcion principal elTiempo.
function elTiempo(city = "Barcelona") {
    let APIkey = 'c2a837960ca2ff0c9275e80b7751ee58'
    urlTiempo = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
    fetch(urlTiempo)
        .then(response => response.json())
        .then(data => {
            if(data.name!=undefined){
            addCurrentCity(data);
            addCurTemp(data);
            addTempMaxMin(data);
            addIcon(data);
            addDate()
            }
        
        })
        .catch(err => console.log('No funciona!'));
}

//Funciones secundarias:
//Indica la ciudad seleccionada:
const addCurrentCity = (date) => currentCity.innerHTML = date.name;
//Añade a la app la temperatura actual de la ciudad. 
const addCurTemp = date => curTemp.innerHTML = `${kelvinToCelsius(date.main.temp)}ºC`;
//Añade a la App la temperatura maxima y minima.
const addTempMaxMin = date => {
    tempMaxMin.innerHTML = `Min ${kelvinToCelsius(date.main.temp_min)}ºC | Max ${kelvinToCelsius(date.main.temp_max + 1)}ºC`;
}
//Funcion para paras de grados Kelvin a grados celsius:
const kelvinToCelsius = temp => Math.ceil(temp - 273.15);

//Añade el Icono de tiempo a la app (Se utiliza el codigo de img de la API y sus iconos):
const addIcon = data => {
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    descriptionWeatherIcon.innerHTML = data.weather[0].description;
}
//Añade la fecha desde el objeto de la API
const addDate = () => {
    let currentTime = new Date();
    let fecha = currentTime.toDateString();
    curDate.innerHTML = fecha;
}
//event lisenings:
document.getElementById("searchNewCity").addEventListener("click", function () {
    let city = newCity.value;
    elTiempo(city);
});
document.querySelector('#newCity').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let city = newCity.value;
        elTiempo(city);
    }
});
