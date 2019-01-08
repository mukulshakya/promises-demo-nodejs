const methods = require('./methods');

// using promises
methods.userDetail.then((result) => {
    console.log(`${result.userName} is an ${result.authority}`);
}, (error) => {
    console.log(`${error.userName} is an ${error.authority}`);
});

//using normal callback
// methods.userDetail((error,result) => {
//     if(error) {
//         console.log(`${error.userName} is an ${error.authority}`);
//     }
//     else {
//         console.log(`${result.userName} is an ${result.authority}`);
//     }
// });