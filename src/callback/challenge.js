//Como estoy trabajando sobre Node, necesito llamar la dependencia XMLHttpRequest,
//la cual nos ayuda a hacer peticiones a algun servicio en la nube (url, API, etc)
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

//Con callbacks se trabajaría así:
function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest(); //Aquí se genera la referencia al objeto que necesito
  xhttp.open('GET', url_api, true); //Aquí se hace un llamado a la url, con true se activa el asincronismo
  xhttp.onreadystatechange = function (event) { //Aquí se genera o se escucha lo que va a hacer la conexión
    if(xhttp.readyState === 4) {
      if(xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error(`Error ${url_api}`);
        return callback(error, null)
      }
    }
  }
  xhttp.send();
}

fetchData(API, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  })
})