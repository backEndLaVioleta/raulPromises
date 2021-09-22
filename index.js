/**
 Crear una operación que devuelva el resultado de una suma asíncrona en una promesa. Después elevar al cuadrado el resultado.

Si algún sumando es 0 devolverá error.
Si el resultado de la potencia es mayor que 100 devolverá error.

 */
// operation

/* const mathsAdd = (a,b) => a + b;

const mathPow = (num) => Math.pow(num, 2);

// creacion promesa
const myMathsOps = new Promise((res, rej) => {
    
    setTimeout(()=> {
        res( )
    }, 1500);
  
    let myError = new Error('Operation not allowed');
    rej(myError);
   
 
});*/

// use it

// function wrapping promise to launch promise

/* const launchMe = (a, b) => {
    myMathsOps.then(console.log((mathsAdd(a, b))))
    .catch(err => console.log(err.message));
} */
// launchMe(10,2);
// console.log(mathsAdd(10,2));

/************************Raul's answer*****************************/
// objecto
const promises = {
    promiseFn:(a,b) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               // ((a == 0 || b == 0) || (Math.pow(a + b, 2) > 100)) ? reject(new Error('Not allowed')) : resolve(Math.pow(a + b, 2));
               (a == 0 || b == 0) ? reject(new Error('Not allowed')) : resolve(a + b)
              },1000)
            
        })
    },
    powFn: (num) => Math.pow(num, 2) > 100 ? Promise.reject(new Error("Pow greater than 100")) :
    Promise.resolve(Math.pow(num,2)),
    promiseMe: (a,b) => {
       return new Promise((resolve, reject) => {
            promises.promiseFn(a, b)
                    .then(promises.powFn)
                    .then((data) => resolve(data))
                    .catch((error) => reject(error.message))
        })
    }
}

export default promises;
/* 
export const promiseFn = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           // ((a == 0 || b == 0) || (Math.pow(a + b, 2) > 100)) ? reject(new Error('Not allowed')) : resolve(Math.pow(a + b, 2));
           (a == 0 || b == 0) ? reject(new Error('Not allowed')) : resolve(a + b)
          },1000)
        
    })
}
export const powFn = (num) => Math.pow(num, 2) > 100 ? Promise.reject(new Error("Pow greater than 100")) :
                                                       Promise.resolve(Math.pow(num,2));

export const promiseMe = (a,b) => {
    new Promise((resolve, reject) => {
        promiseFn(a, b)
                .then(powFn)
                .then((data) => resolve(data))
                .catch((error) => reject(error.message))
    })
} */