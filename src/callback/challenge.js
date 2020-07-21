let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest(); //Aquí se genera la referencia al objeto que necesito
  xhttp.open('GET', url_api, true); //Aquí se hace un llamado a la url, con true se activa el asincronismo
  xhttp.onreadystatechange = function (event) { //Aquí se genera o se escucha lo que va a hacer la conexión
    if(xhttp.readyState === 4) {
      if(xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error('Error' + url_api);
        return callback(error, null)
      }
    }
  }
  xhttp.send();
}