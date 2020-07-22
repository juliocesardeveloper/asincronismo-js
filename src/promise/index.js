const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Whooops!');
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True');
      }, 2000)
    } else {
      const error = new Error('Whooops!');
      reject(error);
    }
  });
}

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err));


Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Array of results', response);
  })
  .catch(err => {
    console.error(err);
  })


/*
Métodos de las promesas

Promise.all(iterable)
Devuelve una de dos promesas:

Una que se cumple cuando todas las promesas en el argumento iterable
han sido cumplidas, o una que se rechaza tan pronto como una de las
promesas del argumento iterable es rechazada.

Si la promesa retornada es cumplida, lo hace con un arreglo de los
valores de las promesas cumplidas en el mismo orden definido en el iterable.

Si la promesa retornada es rechazada, es rechazada con la razón
de la primera promesa rechazada en el iterable. Este método puede
ser útil para agregar resultados de múltiples promesas.

Promise.race(iterable)
Devuelve una promesa que se cumple o rechaza tan pronto como una de las
promesas del iterable se cumple o rechaza, con el valor o razón de esa
promesa.

Promise.reject(reason)
Devuelve un objeto Promise que es rechazado con la razón dada.

fuente: MDN
*/




//USING TERNARY OPERATOR

const somethingWillHappen = () => newPromise((resolve, reject) => true ? resolve('Hey!') : reject('Whoops!'));

somethingWillHappen()
  .then( response => console.log(response))
  .catch( err => console.log(err));

const error = newError('Woops!!'); // Error que nos permite ver en consola más detalles del error

const somethingWillHappen2 = () => newPromise((resolve, reject) => true ? setTimeout(() => resolve('True'), 5000) : reject(error)
);

somethingWillHappen2()
  .then( response => console.log(response))
  .catch( err => console.log(err));

// Para correr todas las promesas tenemos el método Promise.all() que nos retornara un array con la respuesta de todas las promesas que pasemos como parametro.

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then( response => console.log(response))
  .catch(err => console.log(err))