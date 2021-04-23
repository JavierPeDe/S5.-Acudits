//Variasbles:
const urlJoke = 'https://icanhazdadjoke.com/';
const urlJoke2 = "https://api.icndb.com/jokes/random";
const textJoke = document.getElementById('acudit');
//Selector de jokes: elije la api a utilizar de manera aleatoria
const selectorJoke =() =>{
    if((Math.floor((Math.random()* 9)+1)%2)===0) {
        randomJoke();
    }
    else {
        randomJoke2();
    }
}
const randomJoke=()=>{
    axios ( {
        method: 'GET',
        url: urlJoke,
        headers: {
            'Accept': 'application/json'
        }
    }).then((jokes)=>{
        console.log(jokes.data.joke)
        textJoke.innerHTML =jokes.data.joke;
    })
}

const randomJoke2=()=>{
    axios ( {
        method: 'GET',
        url: urlJoke2,
    }).then((jokes)=>{
        console.log(jokes.data.value.joke)
        textJoke.innerHTML =jokes.data.value.joke;
    })
}


const tiempoTexto = document.getElementById("tiempoTexto");
const elTiempo = () =>{
    let APIkey = 'c2a837960ca2ff0c9275e80b7751ee58'
    let city ="Barcelona"
    urlTiempo = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ca&appid=${APIkey}`

    axios({
        method: 'GET', 
        url: urlTiempo
    }).then(data=>{
        console.log(data.data.weather[0].description)
        tiempoTexto.innerHTML = `Avui: ${data.data.weather[0].description}`
    })
}








// //Variables:
// const curDate = document.getElementById("date");
// const weatherIcon = document.getElementById("weatherIcon");
// const currentCity = document.getElementById("location");
// const curTemp = document.getElementById("temp");
// const tempMaxMin = document.getElementById("tempMinMax");
// const descriptionWeatherIcon = document.getElementById("descriptionWeatherIcon");
// const newCity = document.getElementById("newCity");
// const cityNotFound = document.getElementById("cityNotFound");
// //funcion principal elTiempo.
// function elTiempo(city = "Barcelona") {
//     let APIkey = 'c2a837960ca2ff0c9275e80b7751ee58'
//     urlTiempo = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
//     fetch(urlTiempo)
//         .then(response => response.json())
//         .then(data => {
//             if(data.name!=undefined){
//             addCurrentCity(data);
//             addCurTemp(data);
//             addTempMaxMin(data);
//             addIcon(data);
//             addDate()
//             }
        
//         })
//         .catch(err => console.log('No funciona!'));
// }

// //Funciones secundarias:
// //Indica la ciudad seleccionada:
// const addCurrentCity = (date) => currentCity.innerHTML = date.name;
// //Añade a la app la temperatura actual de la ciudad. 
// const addCurTemp = date => curTemp.innerHTML = `${kelvinToCelsius(date.main.temp)}ºC`;
// //Añade a la App la temperatura maxima y minima.
// const addTempMaxMin = date => {
//     tempMaxMin.innerHTML = `Min ${kelvinToCelsius(date.main.temp_min)}ºC | Max ${kelvinToCelsius(date.main.temp_max + 1)}ºC`;
// }
// //Funcion para paras de grados Kelvin a grados celsius:
// const kelvinToCelsius = temp => Math.ceil(temp - 273.15);

// //Añade el Icono de tiempo a la app (Se utiliza el codigo de img de la API y sus iconos):
// const addIcon = data => {
//     weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     descriptionWeatherIcon.innerHTML = data.weather[0].description;
// }
// //Añade la fecha desde el objeto de la API
// const addDate = () => {
//     let currentTime = new Date();
//     let fecha = currentTime.toDateString();
//     curDate.innerHTML = fecha;
// }
// //event lisenings:
// document.getElementById("searchNewCity").addEventListener("click", function () {
//     let city = newCity.value;
//     elTiempo(city);
// });
// document.querySelector('#newCity').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         let city = newCity.value;
//         elTiempo(city);
//     }
// });
