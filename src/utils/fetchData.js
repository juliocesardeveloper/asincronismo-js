let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest(); //Aquí se genera la referencia al objeto que necesito
    xhttp.open('GET', url_api, true); //Aquí se hace un llamado a la url, con true se activa el asincronismo
    xhttp.onreadystatechange = (() => { //Aquí se genera o se escucha lo que va a hacer la conexión
      if(xhttp.readyState === 4) {
        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error, url_api'))
      }
    });
    xhttp.send();
  });
}

module.exports = fetchData;