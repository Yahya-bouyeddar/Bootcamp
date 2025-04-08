let promiseResolve = Promise.resolve(3);

promiseResolve.then((value) => {
    console.log(value);  
});

const promiseReject = Promise.reject("Bouh");

promiseReject
  .catch(error => {
    console.log(error);  
  });

