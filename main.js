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